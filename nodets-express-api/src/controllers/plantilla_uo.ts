/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plantilla_Uo = DB.Plantilla_Uo;
const router = express.Router();




/**
 * Route to list plantilla_uo records
 * @route {GET} /plantilla_uo/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plantilla_Uo.getQuery();
		
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
			let searchFields = Plantilla_Uo.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Plantilla_Uo.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_puo', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plantilla_Uo.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Plantilla_Uo record
 * @route {GET} /plantilla_uo/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantilla_Uo.getQuery();
		query.where("id_puo=:recid", { recid });
		let selectFields = Plantilla_Uo.viewFields();
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
 * Route to insert Plantilla_Uo record
 * @route {POST} /plantilla_uo/add
 */
router.post('/add/' , 
	[
		body('id_puo').not().isEmpty().isNumeric(),
		body('codigo_soa').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('clasificacion_uo').optional({nullable: true, checkFalsy: true}),
		body('nombre_uo').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('dependencia_uo').optional({nullable: true, checkFalsy: true}),
		body('prefijo_soa').optional({nullable: true, checkFalsy: true}),
		body('nivel_uo').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Plantilla_Uo record
		let record = await Plantilla_Uo.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plantilla_Uo record for edit
 * @route {GET} /plantilla_uo/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantilla_Uo.getQuery();
		const editFields = Plantilla_Uo.editFields(); // get fields to edit
		query.where("id_puo=:recid", { recid });
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
 * Route to update  Plantilla_Uo record
 * @route {POST} /plantilla_uo/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('id_puo').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('codigo_soa').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('clasificacion_uo').optional({nullable: true, checkFalsy: true}),
		body('nombre_uo').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('dependencia_uo').optional({nullable: true, checkFalsy: true}),
		body('prefijo_soa').optional({nullable: true, checkFalsy: true}),
		body('nivel_uo').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Plantilla_Uo.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plantilla_Uo.getQuery();
		query.where("id_puo=:recid", { recid });
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
 * Route to delete Plantilla_Uo record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plantilla_uo/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plantilla_Uo.getQuery();
		query.where({'id_puo': In(recid)});
		 
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
