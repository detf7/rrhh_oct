/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Temp_Cas1 = DB.Temp_Cas1;
const router = express.Router();




/**
 * Route to list temp_cas1 records
 * @route {GET} /temp_cas1/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Temp_Cas1.getQuery();
		
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
			let searchFields = Temp_Cas1.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Temp_Cas1.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_cas', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Temp_Cas1.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Temp_Cas1 record
 * @route {GET} /temp_cas1/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Temp_Cas1.getQuery();
		query.where("id_cas=:recid", { recid });
		let selectFields = Temp_Cas1.viewFields();
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
 * Route to insert Temp_Cas1 record
 * @route {POST} /temp_cas1/add
 */
router.post('/add/' , 
	[
		body('id_cas').not().isEmpty().isNumeric(),
		body('anyos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mes').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_permanente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Temp_Cas1 record
		let record = await Temp_Cas1.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Temp_Cas1 record for edit
 * @route {GET} /temp_cas1/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Temp_Cas1.getQuery();
		const editFields = Temp_Cas1.editFields(); // get fields to edit
		query.where("id_cas=:recid", { recid });
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
 * Route to update  Temp_Cas1 record
 * @route {POST} /temp_cas1/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id_cas').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('anyos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mes').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('id_permanente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Temp_Cas1.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Temp_Cas1.getQuery();
		query.where("id_cas=:recid", { recid });
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
 * Route to delete Temp_Cas1 record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /temp_cas1/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Temp_Cas1.getQuery();
		query.where({'id_cas': In(recid)});
		 
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
