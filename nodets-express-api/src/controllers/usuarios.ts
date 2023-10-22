/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Usuarios = DB.Usuarios;
const router = express.Router();




/**
 * Route to list usuarios records
 * @route {GET} /usuarios/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Usuarios.getQuery();
		
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
			let searchFields = Usuarios.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Usuarios.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idcarnet', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Usuarios.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Usuarios record
 * @route {GET} /usuarios/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Usuarios.getQuery();
		query.where("idcarnet=:recid", { recid });
		let selectFields = Usuarios.viewFields();
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
 * Route to insert Usuarios record
 * @route {POST} /usuarios/add
 */
router.post('/add/' , 
	[
		body('user_role_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('permisos').optional({nullable: true, checkFalsy: true}),
		body('editar').optional({nullable: true, checkFalsy: true}),
		body('jsonunidad').optional({nullable: true, checkFalsy: true}),
		body('apmaterno').optional({nullable: true, checkFalsy: true}),
		body('usuario').optional({nullable: true, checkFalsy: true}),
		body('clave').optional({nullable: true, checkFalsy: true}),
		body('foto').optional({nullable: true, checkFalsy: true}),
		body('theme').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('account_status').optional({nullable: true, checkFalsy: true}),
		body('idcarnet').not().isEmpty(),
		body('expedido').optional({nullable: true, checkFalsy: true}),
		body('nombres').optional({nullable: true, checkFalsy: true}),
		body('appaterno').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Usuarios record
		let record = await Usuarios.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Usuarios record for edit
 * @route {GET} /usuarios/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Usuarios.getQuery();
		const editFields = Usuarios.editFields(); // get fields to edit
		query.where("idcarnet=:recid", { recid });
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
 * Route to update  Usuarios record
 * @route {POST} /usuarios/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('user_role_id').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('permisos').optional({nullable: true, checkFalsy: true}),
		body('editar').optional({nullable: true, checkFalsy: true}),
		body('jsonunidad').optional({nullable: true, checkFalsy: true}),
		body('apmaterno').optional({nullable: true, checkFalsy: true}),
		body('usuario').optional({nullable: true, checkFalsy: true}),
		body('clave').optional({nullable: true, checkFalsy: true}),
		body('foto').optional({nullable: true, checkFalsy: true}),
		body('theme').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('account_status').optional({nullable: true, checkFalsy: true}),
		body('idcarnet').optional({nullable: true}).not().isEmpty(),
		body('expedido').optional({nullable: true, checkFalsy: true}),
		body('nombres').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Usuarios.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Usuarios.getQuery();
		query.where("idcarnet=:recid", { recid });
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
 * Route to delete Usuarios record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /usuarios/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Usuarios.getQuery();
		query.where({'idcarnet': In(recid)});
		 
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
