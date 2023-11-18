/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Planilla_Presupuestaria = DB.Planilla_Presupuestaria;
const router = express.Router();




/**
 * Route to list planilla_presupuestaria records
 * @route {GET} /planilla_presupuestaria/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Planilla_Presupuestaria.getQuery();
		
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
			let searchFields = Planilla_Presupuestaria.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		
		const selectFields = Planilla_Presupuestaria.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idplanillapres', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Planilla_Presupuestaria.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Planilla_Presupuestaria record
 * @route {GET} /planilla_presupuestaria/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Planilla_Presupuestaria.getQuery();
		query.where("idplanillapres=:recid", { recid });
		let selectFields = Planilla_Presupuestaria.viewFields();
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
 * Route to delete Planilla_Presupuestaria record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /planilla_presupuestaria/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Planilla_Presupuestaria.getQuery();
		query.where({'idplanillapres': In(recid)});
		 
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
 * Route to insert Planilla_Presupuestaria record
 * @route {POST} /planilla_presupuestaria/add
 */
router.post('/agregar/' , 
	[
		body('fuente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cantidad_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haber_basico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('denominacion_cargo').optional({nullable: true, checkFalsy: true}),
		body('descrip_puesto').optional({nullable: true, checkFalsy: true}),
		body('unidad_organiz').optional({nullable: true, checkFalsy: true}),
		body('clasificacion').optional({nullable: true, checkFalsy: true}),
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
		
		//save Planilla_Presupuestaria record
		let record = await Planilla_Presupuestaria.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Planilla_Presupuestaria record for edit
 * @route {GET} /planilla_presupuestaria/edit/{recid}
 */
router.get('/editar/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Planilla_Presupuestaria.getQuery();
		const editFields = Planilla_Presupuestaria.editarFields(); // get fields to edit
		query.where("idplanillapres=:recid", { recid });
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
 * Route to update  Planilla_Presupuestaria record
 * @route {POST} /planilla_presupuestaria/edit/{recid}
 */
router.post('/editar/:recid' , 
	[
		body('idplanillapres').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('fuente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cantidad_items').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haber_basico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('denominacion_cargo').optional({nullable: true, checkFalsy: true}),
		body('descrip_puesto').optional({nullable: true, checkFalsy: true}),
		body('unidad_organiz').optional({nullable: true, checkFalsy: true}),
		body('clasificacion').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Planilla_Presupuestaria.editarFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Planilla_Presupuestaria.getQuery();
		query.where("idplanillapres=:recid", { recid });
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
