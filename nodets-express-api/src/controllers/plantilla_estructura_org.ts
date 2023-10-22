/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plantilla_Estructura_Org = DB.Plantilla_Estructura_Org;
const router = express.Router();




/**
 * Route to list plantilla_estructura_org records
 * @route {GET} /plantilla_estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plantilla_Estructura_Org.getQuery();
		
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
			let searchFields = Plantilla_Estructura_Org.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Plantilla_Estructura_Org.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idunidad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plantilla_Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Plantilla_Estructura_Org record
 * @route {GET} /plantilla_estructura_org/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantilla_Estructura_Org.getQuery();
		query.where("idunidad=:recid", { recid });
		let selectFields = Plantilla_Estructura_Org.viewFields();
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
 * Route to insert Plantilla_Estructura_Org record
 * @route {POST} /plantilla_estructura_org/add
 */
router.post('/add/' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codentidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('ley').optional({nullable: true, checkFalsy: true}),
		body('soa').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Plantilla_Estructura_Org record
		let record = await Plantilla_Estructura_Org.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plantilla_Estructura_Org record for edit
 * @route {GET} /plantilla_estructura_org/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantilla_Estructura_Org.getQuery();
		const editFields = Plantilla_Estructura_Org.editFields(); // get fields to edit
		query.where("idunidad=:recid", { recid });
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
 * Route to update  Plantilla_Estructura_Org record
 * @route {POST} /plantilla_estructura_org/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codentidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('ley').optional({nullable: true, checkFalsy: true}),
		body('soa').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Plantilla_Estructura_Org.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plantilla_Estructura_Org.getQuery();
		query.where("idunidad=:recid", { recid });
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
 * Route to delete Plantilla_Estructura_Org record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plantilla_estructura_org/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plantilla_Estructura_Org.getQuery();
		query.where({'idunidad': In(recid)});
		 
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
