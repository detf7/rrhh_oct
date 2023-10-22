/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Escala_T = DB.Escala_T;
const router = express.Router();




/**
 * Route to list escala_t records
 * @route {GET} /escala_t/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Escala_T.getQuery();
		
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
			let searchFields = Escala_T.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Escala_T.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idescala', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Escala_T.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Escala_T record
 * @route {GET} /escala_t/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Escala_T.getQuery();
		query.where("idescala=:recid", { recid });
		let selectFields = Escala_T.viewFields();
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
 * Route to insert Escala_T record
 * @route {POST} /escala_t/add
 */
router.post('/add/' , 
	[
		body('costo_mensual').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ageneral').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mgeneral').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('aespecifica').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mespecifica').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('normativa_codigo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('normativa_anyo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('entidad').optional({nullable: true, checkFalsy: true}),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('organizacion').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('detalle').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('habilitado').optional({nullable: true, checkFalsy: true}),
		body('academico').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Escala_T record
		let record = await Escala_T.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Escala_T record for edit
 * @route {GET} /escala_t/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Escala_T.getQuery();
		const editFields = Escala_T.editFields(); // get fields to edit
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
 * Route to update  Escala_T record
 * @route {POST} /escala_t/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('costo_mensual').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ageneral').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mgeneral').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('aespecifica').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mespecifica').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('normativa_codigo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('normativa_anyo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('numero_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('entidad').optional({nullable: true, checkFalsy: true}),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('organizacion').optional({nullable: true, checkFalsy: true}),
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('detalle').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('habilitado').optional({nullable: true, checkFalsy: true}),
		body('academico').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Escala_T.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Escala_T.getQuery();
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
 * Route to delete Escala_T record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /escala_t/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Escala_T.getQuery();
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
export default router;
