/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Escala = DB.Escala;
const router = express.Router();




/**
 * Route to list escala records
 * @route {GET} /escala/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Escala.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 50;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.escala_financiero){
			let paramValue = req.query.escala_financiero;
			query.andWhere("escala.financiero=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Escala.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		
		const selectFields = Escala.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idescala', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Escala.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Escala record
 * @route {GET} /escala/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Escala.getQuery();
		query.where("idescala=:recid", { recid });
		let selectFields = Escala.viewFields();
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
 * Route to insert Escala record
 * @route {POST} /escala/add
 */
router.post('/add/' , 
	[
		body('normativa_codigo').not().isEmpty(),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('nivel').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isFloat({ max:40,min:0 }),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Escala record
		let record = await Escala.save(modeldata);
		await afterAdd(record, req);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});
/**
    * After new record created
    * @param {object} record // newly created record
    */
async function afterAdd(record, req:HttpRequest){
    //enter statement here
    let queryParams = [record.idgestion];
    let sqltext = `CALL actualiza_costomensual($1)`;
    let result = await rawQuery(sqltext, queryParams);
}


/**
 * Route to get  Escala record for edit
 * @route {GET} /escala/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Escala.getQuery();
		const editFields = Escala.editFields(); // get fields to edit
		query.where("idescala=:recid", { recid });
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
 * Route to update  Escala record
 * @route {POST} /escala/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isFloat({ max:40,min:0 }),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Escala.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Escala.getQuery();
		query.where("idescala=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		await afterEdit(recid, record, req);
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});
/**
    * After page record updated
    * @param {string} recid // updated record id
    * @param {object} record // updated page record
    */
async function afterEdit(recid, record, req:HttpRequest){
    //enter statement here
    let queryParams = [record.idescala];
    let sqltext = `CALL actualiza_costomensualed($1)`;
    let result = await rawQuery(sqltext, queryParams);
}


/**
 * Route to delete Escala record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /escala/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Escala.getQuery();
		query.where({'idescala': In(recid)});
		 
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


/**
 * Route to get  Escala record for edit
 * @route {GET} /escala/edit/{recid}
 */
router.get('/edicion/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Escala.getQuery();
		const editFields = Escala.edicionFields(); // get fields to edit
		query.where("idescala=:recid", { recid });
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
 * Route to update  Escala record
 * @route {POST} /escala/edit/{recid}
 */
router.post('/edicion/:recid' , 
	[
		body('habilitado').optional({nullable: true, checkFalsy: true}),
		body('normativa_codigo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('normativa_anyo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('denominacion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Escala.edicionFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Escala.getQuery();
		query.where("idescala=:recid", { recid });
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
 * Route to list escala records
 * @route {GET} /escala/index/{fieldname}/{fieldvalue}
 */
router.get(['/listado/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Escala.getQuery();
		
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
			let searchFields = Escala.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Escala.listadoFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idescala', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Escala.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
