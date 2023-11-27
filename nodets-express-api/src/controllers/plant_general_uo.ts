/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plant_General_Uo = DB.Plant_General_Uo;
const router = express.Router();




/**
 * Route to list plant_general_uo records
 * @route {GET} /plant_general_uo/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plant_General_Uo.getQuery();
		
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
			let searchFields = Plant_General_Uo.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Plant_General_Uo.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idpuo', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plant_General_Uo.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Plant_General_Uo record
 * @route {GET} /plant_general_uo/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plant_General_Uo.getQuery();
		query.where("idpuo=:recid", { recid });
		let selectFields = Plant_General_Uo.viewFields();
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
 * Route to insert Plant_General_Uo record
 * @route {POST} /plant_general_uo/add
 */
router.post('/add/' , 
	[
		body('idpuo').not().isEmpty().isNumeric(),
		body('codn1').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn2').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn3').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn4').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn5').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn6').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('prefijosoa').optional({nullable: true, checkFalsy: true}),
		body('nombreuo').optional({nullable: true, checkFalsy: true}),
		body('clasificacionuo').optional({nullable: true, checkFalsy: true}),
		body('dependenciauo').optional({nullable: true, checkFalsy: true}),
		body('niveluo').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Plant_General_Uo record
		let record = await Plant_General_Uo.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plant_General_Uo record for edit
 * @route {GET} /plant_general_uo/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plant_General_Uo.getQuery();
		const editFields = Plant_General_Uo.editFields(); // get fields to edit
		query.where("idpuo=:recid", { recid });
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
 * Route to update  Plant_General_Uo record
 * @route {POST} /plant_general_uo/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('idpuo').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('codn1').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn2').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn3').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn4').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn5').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codn6').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('prefijosoa').optional({nullable: true, checkFalsy: true}),
		body('nombreuo').optional({nullable: true, checkFalsy: true}),
		body('clasificacionuo').optional({nullable: true, checkFalsy: true}),
		body('dependenciauo').optional({nullable: true, checkFalsy: true}),
		body('niveluo').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Plant_General_Uo.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plant_General_Uo.getQuery();
		query.where("idpuo=:recid", { recid });
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
 * Route to delete Plant_General_Uo record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plant_general_uo/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plant_General_Uo.getQuery();
		query.where({'idpuo': In(recid)});
		 
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
