/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
import EscalaListExport from '../exports/EscalaList';
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
		const limit = Number(req.query.limit) || 15;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.escala_codgestion){
			let paramValue = req.query.escala_codgestion;
			query.andWhere("escala.codgestion=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Escala.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Escala.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idescala', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		if(req.query.export){
			const exportFields = Escala.exportListFields(); // get export fields
			query.select(exportFields);
			let records = await query.getRawMany();
			return EscalaListExport(records, req, res);
		}
		await beforeList(fieldName, fieldValue, req);
		
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
* Before page list record
* @param {string} fieldName //filter records by table field
* @param {string} fieldValue //filter value
*/
async function beforeList(fieldName, fieldValue, req:HttpRequest){
    //enter statement here
}


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
		body('normativa_codigo').not().isEmpty().isNumeric(),
		body('normativa_anyo').not().isEmpty().isFloat({ max:2050,min:2020 }),
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
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


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
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('costo_mensual').optional({nullable: true, checkFalsy: true}).isNumeric(),
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
export default router;
