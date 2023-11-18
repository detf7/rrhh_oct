/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { Not, In } from 'typeorm';
const Users = DB.Users;
const router = express.Router();




/**
 * Route to list users records
 * @route {GET} /users/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Users.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		
		if(search){
			let searchFields = Users.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		
		const selectFields = Users.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Users.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Users record
 * @route {GET} /users/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Users.getQuery();
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		query.where("id=:recid", { recid });
		let selectFields = Users.viewFields();
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
 * Route to insert Users record
 * @route {POST} /users/add
 */
router.post('/add/' , 
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
		let errors = validationResult(req); // get validation errors if any
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
		
		// set default role for user
		const roleId =  await DB.Roles.findValue('role_id', {role_name: 'Admin'});
		modeldata['user_role_id'] = roleId;
		
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
		
		//save Users record
		let record = await Users.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Users record for edit
 * @route {GET} /users/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Users.getQuery();
		const editFields = Users.editFields(); // get fields to edit
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
router.post('/edit/:recid' , 
	[
		body('permisos').optional({nullable: true, checkFalsy: true}),
		body('user_role_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('jsonunidad').optional({nullable: true, checkFalsy: true}),
		body('apmaterno').optional({nullable: true, checkFalsy: true}),
		body('usuario').optional({nullable: true}).not().isEmpty(),
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
		const recid = req.params.recid;
		
		const editFields = Users.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.foto !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.foto, "foto");
			modeldata.foto = fileInfo.filepath;
		}
		
		//check if usuario already exists
		let usuarioExists = await Users.getQuery().where({
			'usuario': modeldata.usuario, 
			'id': Not(recid)
		}).exists();
		if(usuarioExists){
			return res.badRequest(`${modeldata.usuario} already exist.`);
		}
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


/**
 * Route to delete Users record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /users/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Users.getQuery();
		query.where({'id': In(recid)});
		let allowedRoles = ["user", "admin"];
		let userRole = req.user.roleName;
		if(!allowedRoles.includes(userRole)){
			query.andWhere('id=:userid', { userid: req.user.id });
		}
		 
		const records = await query.getMany();
		if(!records){
			return res.recordNotFound();
		}
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		
		const result = await query.delete().execute();
		
		return res.send(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
