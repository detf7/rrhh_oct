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
const Denominacion = DB.Denominacion;
const router = express.Router();




/**
 * Route to list denominacion records
 * @route {GET} /denominacion/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Denominacion.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.denominacion_fuente){
			let paramValue = req.query.denominacion_fuente;
			query.andWhere("denominacion.fuente=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Denominacion.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Denominacion.listFields(); //get columns to select
		query.select(selectFields);
		const orderBy = req.getOrderBy('id_denominacion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		else{
			query.orderBy('nivel_denom', 'ASC');
		}
		
		//return records and pager info
		const pageData = await Denominacion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Denominacion record
 * @route {GET} /denominacion/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Denominacion.getQuery();
		query.where("id_denominacion=:recid", { recid });
		let selectFields = Denominacion.viewFields();
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
 * Route to insert Denominacion record
 * @route {POST} /denominacion/add
 */
router.post('/add/' , 
	[
		body('nivel_denom').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('desc_denominacion').optional({nullable: true, checkFalsy: true}),
		body('haber_basico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nro_items').not().isEmpty().isNumeric(),
		body('costo_mensual').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('fuente').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Denominacion record
		let record = await Denominacion.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Denominacion record for edit
 * @route {GET} /denominacion/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Denominacion.getQuery();
		const editFields = Denominacion.editFields(); // get fields to edit
		query.where("id_denominacion=:recid", { recid });
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
 * Route to update  Denominacion record
 * @route {POST} /denominacion/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id_denominacion').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('nivel_denom').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('desc_denominacion').optional({nullable: true, checkFalsy: true}),
		body('haber_basico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nro_items').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('costo_mensual').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('fuente').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Denominacion.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Denominacion.getQuery();
		query.where("id_denominacion=:recid", { recid });
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
    let queryParams = [ record.nro_items, record.haber_basico, record.id_denominacion];
    let sqltext = `CALL calculo_denocm($1, $2, $3)`;
    let result = await rawQuery(sqltext, queryParams);
    // Procesar el resultado aquí
}


/**
 * Route to delete Denominacion record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /denominacion/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Denominacion.getQuery();
		query.where({'id_denominacion': In(recid)});
		 
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
 * Route to list denominacion records
 * @route {GET} /denominacion/index/{fieldname}/{fieldvalue}
 */
router.get(['/vista/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Denominacion.getQuery();
		
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
			let searchFields = Denominacion.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Denominacion.vistaFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_denominacion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Denominacion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to list denominacion records
 * @route {GET} /denominacion/index/{fieldname}/{fieldvalue}
 */
router.get(['/vistainte/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Denominacion.getQuery();
		
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
			let searchFields = Denominacion.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Denominacion.vistainteFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_denominacion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Denominacion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
