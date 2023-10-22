/** 
 * Express router providing user auth routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import config from '../config';
import { body, validationResult, matchedData }  from 'express-validator';
import bcrypt from 'bcryptjs';
import ejs from 'ejs';
import jwt from 'jsonwebtoken';
import sendMail from '../helpers/mailer';
const Users = DB.Users;
const router = express.Router();


/**
 * Generate jwt token
 * @param {string} userId - current user id
 * @param {string} expiresIn - token expiration duration
 */
function generateUserToken(user){
	let expiresIn = config.auth.jwtDuration + 'm' //in minutes;
	let userid = user.id;
	let token = jwt.sign({sub: userid}, config.app.secret, { expiresIn });
	return token;
}


/**
 * Get userid from jwt token
 * @param {string} token
 */
function getUserIDFromJwt(token){
	try {
		let decoded = jwt.verify(token, config.app.secret);
		return decoded.sub
	}
	catch (err) {
		throw new Error(err);
	}
}


/**
 * Return user login data
 * @param {object} user - current user
 */
async function getUserLoginData(user){
	// generate a signed jwt for the user
	let token = generateUserToken(user); //generate token duration
	return { token }; //return user object and token
}


/**
 * Route to login user using credential
 * @route {POST} /auth/login
 */
router.post('/login', [
		body('username').trim().not().isEmpty(),
		body('password').not().isEmpty(),
	], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let { username, password } = req.body;
		let user = await Users.findOne({where: { 'usuario': username }});
		if(!user){
			return res.unauthorized("Nombre de usuario o contraseña no correctos");
		}
		if(!utils.passwordVerify(password, user.password)){
			return res.unauthorized("Nombre de usuario o contraseña no correctos");
		}
		let loginData = await getUserLoginData(user);
		return res.send(loginData);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to register new user
 * @route {POST} /auth/register
 */
router.post('/register', 
	[
		body('usuario').not().isEmpty(),
		body('password').not().isEmpty(),
		body('confirm_password', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
		body('foto').optional({nullable: true, checkFalsy: true}),
		body('email').not().isEmpty().isEmail(),
		body('telefono').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		// Finds the validation errors in this request and convert to specific format
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.foto !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.foto, "foto");
			modeldata.foto = fileInfo.filepath;
		}
		
		//hash password before save
		modeldata.password = utils.passwordHash(modeldata.password);
		
		//check if usuario already exists
		let usuarioExists = await Users.getQuery().where({'usuario': modeldata.usuario}).exists();
		if(usuarioExists){
			return res.badRequest(`${modeldata.usuario} already exist.`);
		}
		
		//check if email already exists
		let emailExists = await Users.getQuery().where({'email': modeldata.email}).exists();
		if(emailExists){
			return res.badRequest(`${modeldata.email} already exist.`);
		}
		const record = await Users.save(modeldata);
		
		//get user record
		const user = await Users.findOne({
			where: {'id': record.id}
		});
		
		let loginData = await getUserLoginData(user);
		return res.send(loginData);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to send password reset link to user email
 * @route {POST} /auth/forgotpassword
 */
router.post('/forgotpassword', [
		body('email').not().isEmpty().isEmail(),
	], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		let email = modeldata.email;
		let user = await Users.findOne({where: { 'email': email} });
		if(!user){
			return res.recordNotFound("Email not registered");
		}
		await sendPasswordResetLink(user);
		
		return res.send("We have emailed your password reset link!");
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to reset user password
 * @route {POST} /auth/resetpassword
 */
router.post('/resetpassword', [
		body('password').not().isEmpty().custom((val, { req }) => {
			if (val !== req.body.confirm_password) {
				throw new Error("Passwords confirmation does not match");
			} else {
				return val;
			}
        }),
	],  async (req, res) => {
	try{
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const token = req.body.token;
		const userid = getUserIDFromJwt(token);  //get user id from token payload
		const password = req.body.password;
		const record = await Users.getQuery().where("id=:userid", { userid }).getOne();
		if(!record){
			return res.recordNotFound("User not found");
		}
		const newPassword = bcrypt.hashSync(password, 10);
		const modeldata = {password: newPassword}
		Object.assign(record, modeldata);
		const user = await Users.save(record);
		
		return res.send("Password changed");
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Send password reset link to user email 
*/
async function sendPasswordResetLink(user){
	let token = generateUserToken(user);
	let resetlink = `${config.app.frontendUrl}/#/index/resetpassword?token=${token}`;
	let username = user.usuario;
	let email = user.email;
	let mailtitle = 'Password Reset';
	
	let viewData = { username, email, resetlink, config };
	let mailbody = await ejs.renderFile("src/views/pages/index/password_reset_email_template.ejs", viewData);
	
	let mailResult = await sendMail(email, mailtitle, mailbody);
	if(!mailResult.messageId){
		throw new Error(mailResult.response);
	}
	return true;
}
export default router;
