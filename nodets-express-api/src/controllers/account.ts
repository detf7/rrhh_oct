/**
 * Express router providing user account related routes
*/
import express from 'express';
import { Rbac } from '../helpers/rbac';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
const Users = DB.Users;
const router = express.Router();


/**
 *  models
 * @const
 */


/**
 * Route to view Users record
 * @route {GET} /users/view/{recid}
 */
router.get(['/', '/index'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.user.id;
		let query = Users.getQuery();
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		query.where("id=:recid", { recid });
		let selectFields = Users.accountviewFields();
		//page export command
		query.select(selectFields);
		let record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Users record for edit
 * @route {GET} /users/edit/{recid}
 */
router.get(['/edit'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.user.id;
		let query = Users.getQuery();
		const editFields = Users.accounteditFields(); // get fields to edit
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		query.where("id=:recid", { recid });
		query.select(editFields);
		let record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Users record
 * @route {POST} /users/edit/{recid}
 */
router.post(['/edit'] , 
	[
		body('permisos').optional({nullable: true, checkFalsy: true}),
		body('user_role_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jsonunidad').optional({nullable: true, checkFalsy: true}),
		body('apmaterno').optional({nullable: true, checkFalsy: true}),
		body('usuario').optional({nullable: true, checkFalsy: true}),
		body('foto').optional({nullable: true, checkFalsy: true}),
		body('telefono').optional({nullable: true, checkFalsy: true}),
		body('carnet').optional({nullable: true, checkFalsy: true}),
		body('expedido').optional({nullable: true, checkFalsy: true}),
		body('appaterno').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.user.id;
		
		const editFields = Users.accounteditFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Users.getQuery();
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		query.where("id=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});
router.get('/currentuserdata', async function (req:HttpRequest, res:HttpResponse)
{
	let user = req.user;
	let userRole = user.user_role_id;
	let rbac = new Rbac(userRole);
	let userPages = await rbac.getUserPages();
	let userRoleNames = await rbac.getRoleNames();
	let data = {
		user: user,
		pages: userPages,
		roles: userRoleNames
	}
    return res.send(data);
});


/**
 * Route to change user password
 * @route {POST} /account
 */
router.post('/changepassword' , 
	[
		body('oldpassword').not().isEmpty(),
		body('newpassword').not().isEmpty(),
		body('confirmpassword').not().isEmpty().custom((value, {req}) => (value === req.body.newpassword))
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const oldPassword = req.body.oldpassword;
		const newPassword = req.body.newpassword;
		const userid = req.user.id;
		const user = await Users.getQuery().where("id=:userid", { userid }).getOne();
		const currentPasswordHash = user.password;
		if(!utils.passwordVerify(oldPassword, currentPasswordHash)){
			return res.badRequest("Current password is incorrect");
		}
		const modeldata = {
			password: utils.passwordHash(newPassword)
		}
		Object.assign(user, modeldata);
		await Users.save(user);
		return res.send("Password change completed");
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
