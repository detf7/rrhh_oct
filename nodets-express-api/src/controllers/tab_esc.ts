/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Tab_Esc = DB.Tab_Esc;
const router = express.Router();




/**
 * Route to list tab_esc records
 * @route {GET} /tab_esc/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Tab_Esc.getQuery();
		
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
			let searchFields = Tab_Esc.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Tab_Esc.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_t_e', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Tab_Esc.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Tab_Esc record
 * @route {GET} /tab_esc/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Tab_Esc.getQuery();
		query.where("id_t_e=:recid", { recid });
		let selectFields = Tab_Esc.viewFields();
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
 * Route to insert Tab_Esc record
 * @route {POST} /tab_esc/add
 */
router.post('/add/' , 
	[
		body('id_t_e').not().isEmpty().isNumeric(),
		body('nivel_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nro_item_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haber_b_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('categoria_te').optional({nullable: true, checkFalsy: true}),
		body('denom_te').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Tab_Esc record
		let record = await Tab_Esc.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Tab_Esc record for edit
 * @route {GET} /tab_esc/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Tab_Esc.getQuery();
		const editFields = Tab_Esc.editFields(); // get fields to edit
		query.where("id_t_e=:recid", { recid });
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
 * Route to update  Tab_Esc record
 * @route {POST} /tab_esc/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id_t_e').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('nivel_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nro_item_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haber_b_te').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('categoria_te').optional({nullable: true, checkFalsy: true}),
		body('denom_te').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Tab_Esc.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Tab_Esc.getQuery();
		query.where("id_t_e=:recid", { recid });
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
 * Route to delete Tab_Esc record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /tab_esc/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Tab_Esc.getQuery();
		query.where({'id_t_e': In(recid)});
		 
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
