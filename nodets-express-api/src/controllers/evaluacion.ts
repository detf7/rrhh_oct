/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Evaluacion = DB.Evaluacion;
const router = express.Router();




/**
 * Route to list evaluacion records
 * @route {GET} /evaluacion/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Evaluacion.getQuery();
		
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
			let searchFields = Evaluacion.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Evaluacion.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idevaluacion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Evaluacion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Evaluacion record
 * @route {GET} /evaluacion/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Evaluacion.getQuery();
		query.where("idevaluacion=:recid", { recid });
		let selectFields = Evaluacion.viewFields();
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
 * Route to insert Evaluacion record
 * @route {POST} /evaluacion/add
 */
router.post('/add/' , 
	[
		body('valacademico').optional({nullable: true, checkFalsy: true}),
		body('valespecifica').optional({nullable: true, checkFalsy: true}),
		body('valgeneral').optional({nullable: true, checkFalsy: true}),
		body('resultado').optional({nullable: true, checkFalsy: true}),
		body('detespecifica').optional({nullable: true, checkFalsy: true}),
		body('detgeneral').optional({nullable: true, checkFalsy: true}),
		body('idevaluacion').not().isEmpty(),
		body('observacion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Evaluacion record
		let record = await Evaluacion.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Evaluacion record for edit
 * @route {GET} /evaluacion/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Evaluacion.getQuery();
		const editFields = Evaluacion.editFields(); // get fields to edit
		query.where("idevaluacion=:recid", { recid });
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
 * Route to update  Evaluacion record
 * @route {POST} /evaluacion/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('valacademico').optional({nullable: true, checkFalsy: true}),
		body('valespecifica').optional({nullable: true, checkFalsy: true}),
		body('valgeneral').optional({nullable: true, checkFalsy: true}),
		body('resultado').optional({nullable: true, checkFalsy: true}),
		body('detespecifica').optional({nullable: true, checkFalsy: true}),
		body('detgeneral').optional({nullable: true, checkFalsy: true}),
		body('idevaluacion').optional({nullable: true}).not().isEmpty(),
		body('observacion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Evaluacion.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Evaluacion.getQuery();
		query.where("idevaluacion=:recid", { recid });
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
 * Route to delete Evaluacion record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /evaluacion/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Evaluacion.getQuery();
		query.where({'idevaluacion': In(recid)});
		 
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
