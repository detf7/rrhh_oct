/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Configuracion = DB.Configuracion;
const router = express.Router();




/**
 * Route to list configuracion records
 * @route {GET} /configuracion/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Configuracion.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		
		const selectFields = Configuracion.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idconf', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Configuracion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Configuracion record
 * @route {GET} /configuracion/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Configuracion.getQuery();
		query.where("idconf=:recid", { recid });
		let selectFields = Configuracion.viewFields();
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
 * Route to insert Configuracion record
 * @route {POST} /configuracion/add
 */
router.post('/add/' , 
	[
		body('refrigerio').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descafp').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('desciva').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('frontera').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('minnacional').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipocambio').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Configuracion record
		let record = await Configuracion.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Configuracion record for edit
 * @route {GET} /configuracion/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Configuracion.getQuery();
		const editFields = Configuracion.editFields(); // get fields to edit
		query.where("idconf=:recid", { recid });
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
 * Route to update  Configuracion record
 * @route {POST} /configuracion/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('refrigerio').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descafp').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('desciva').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('frontera').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('minnacional').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipocambio').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Configuracion.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Configuracion.getQuery();
		query.where("idconf=:recid", { recid });
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
 * Route to delete Configuracion record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /configuracion/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Configuracion.getQuery();
		query.where({'idconf': In(recid)});
		 
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
