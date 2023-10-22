/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Eo_Maestra = DB.Eo_Maestra;
const router = express.Router();




/**
 * Route to list eo_maestra records
 * @route {GET} /eo_maestra/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Eo_Maestra.getQuery();
		
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
			let searchFields = Eo_Maestra.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Eo_Maestra.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_eo', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Eo_Maestra.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Eo_Maestra record
 * @route {GET} /eo_maestra/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eo_Maestra.getQuery();
		query.where("id_eo=:recid", { recid });
		let selectFields = Eo_Maestra.viewFields();
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
 * Route to insert Eo_Maestra record
 * @route {POST} /eo_maestra/add
 */
router.post('/add/' , 
	[
		body('nro_eo').not().isEmpty().isNumeric(),
		body('fecha_reg_eo').optional({nullable: true, checkFalsy: true}),
		body('soa_eo').not().isEmpty(),
		body('sigla_eo').not().isEmpty(),
		body('dependencia_eo').not().isEmpty(),
		body('cod_gestion_eo').optional({nullable: true, checkFalsy: true}),
		body('rm_eo').optional({nullable: true, checkFalsy: true}),
		body('nivel_eo').not().isEmpty(),
		body('denominacion_eo').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Eo_Maestra record
		let record = await Eo_Maestra.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Eo_Maestra record for edit
 * @route {GET} /eo_maestra/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eo_Maestra.getQuery();
		const editFields = Eo_Maestra.editFields(); // get fields to edit
		query.where("id_eo=:recid", { recid });
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
 * Route to update  Eo_Maestra record
 * @route {POST} /eo_maestra/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nro_eo').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('fecha_reg_eo').optional({nullable: true, checkFalsy: true}),
		body('soa_eo').optional({nullable: true}).not().isEmpty(),
		body('sigla_eo').optional({nullable: true}).not().isEmpty(),
		body('dependencia_eo').optional({nullable: true}).not().isEmpty(),
		body('cod_gestion_eo').optional({nullable: true, checkFalsy: true}),
		body('rm_eo').optional({nullable: true, checkFalsy: true}),
		body('nivel_eo').optional({nullable: true}).not().isEmpty(),
		body('denominacion_eo').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Eo_Maestra.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Eo_Maestra.getQuery();
		query.where("id_eo=:recid", { recid });
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
 * Route to delete Eo_Maestra record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /eo_maestra/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Eo_Maestra.getQuery();
		query.where({'id_eo': In(recid)});
		 
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
