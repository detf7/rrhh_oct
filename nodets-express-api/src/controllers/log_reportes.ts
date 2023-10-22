/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Log_Reportes = DB.Log_Reportes;
const router = express.Router();




/**
 * Route to list log_reportes records
 * @route {GET} /log_reportes/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Log_Reportes.getQuery();
		
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
			let searchFields = Log_Reportes.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Log_Reportes.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_log_reporte', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Log_Reportes.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Log_Reportes record
 * @route {GET} /log_reportes/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Log_Reportes.getQuery();
		query.where("id_log_reporte=:recid", { recid });
		let selectFields = Log_Reportes.viewFields();
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
 * Route to insert Log_Reportes record
 * @route {POST} /log_reportes/add
 */
router.post('/add/' , 
	[
		body('feccumple').not().isEmpty().isNumeric(),
		body('vacaciones').not().isEmpty().isNumeric(),
		body('cviajes').not().isEmpty().isNumeric(),
		body('bmedicas').not().isEmpty().isNumeric(),
		body('singocehaber').not().isEmpty().isNumeric(),
		body('fecha_reporte').not().isEmpty(),
		body('falta').not().isEmpty().isNumeric(),
		body('abandono').not().isEmpty().isNumeric(),
		body('atraso').not().isEmpty().isNumeric(),
		body('clave').not().isEmpty(),
		body('usuario_reporte').not().isEmpty(),
		body('fecha_reporte_cadena').not().isEmpty(),
		body('documento_identidad').not().isEmpty(),
		body('nombre_completo').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Log_Reportes record
		let record = await Log_Reportes.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Log_Reportes record for edit
 * @route {GET} /log_reportes/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Log_Reportes.getQuery();
		const editFields = Log_Reportes.editFields(); // get fields to edit
		query.where("id_log_reporte=:recid", { recid });
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
 * Route to update  Log_Reportes record
 * @route {POST} /log_reportes/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('feccumple').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('vacaciones').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('cviajes').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('bmedicas').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('singocehaber').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('fecha_reporte').optional({nullable: true}).not().isEmpty(),
		body('falta').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('abandono').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('atraso').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('clave').optional({nullable: true}).not().isEmpty(),
		body('usuario_reporte').optional({nullable: true}).not().isEmpty(),
		body('fecha_reporte_cadena').optional({nullable: true}).not().isEmpty(),
		body('documento_identidad').optional({nullable: true}).not().isEmpty(),
		body('nombre_completo').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Log_Reportes.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Log_Reportes.getQuery();
		query.where("id_log_reporte=:recid", { recid });
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
 * Route to delete Log_Reportes record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /log_reportes/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Log_Reportes.getQuery();
		query.where({'id_log_reporte': In(recid)});
		 
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
