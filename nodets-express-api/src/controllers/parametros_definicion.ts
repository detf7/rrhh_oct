/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Parametros_Definicion = DB.Parametros_Definicion;
const router = express.Router();




/**
 * Route to list parametros_definicion records
 * @route {GET} /parametros_definicion/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Parametros_Definicion.getQuery();
		
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
			let searchFields = Parametros_Definicion.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Parametros_Definicion.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_parametro', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Parametros_Definicion.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Parametros_Definicion record
 * @route {GET} /parametros_definicion/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Parametros_Definicion.getQuery();
		query.where("id_parametro=:recid", { recid });
		let selectFields = Parametros_Definicion.viewFields();
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
 * Route to insert Parametros_Definicion record
 * @route {POST} /parametros_definicion/add
 */
router.post('/add/' , 
	[
		body('valor_numerico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('valor_fecha').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').not().isEmpty(),
		body('codigo_grupo').not().isEmpty(),
		body('codigo_parametro').not().isEmpty(),
		body('valor_caracter').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Parametros_Definicion record
		let record = await Parametros_Definicion.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Parametros_Definicion record for edit
 * @route {GET} /parametros_definicion/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Parametros_Definicion.getQuery();
		const editFields = Parametros_Definicion.editFields(); // get fields to edit
		query.where("id_parametro=:recid", { recid });
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
 * Route to update  Parametros_Definicion record
 * @route {POST} /parametros_definicion/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('valor_numerico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('valor_fecha').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').optional({nullable: true}).not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').optional({nullable: true}).not().isEmpty(),
		body('codigo_grupo').optional({nullable: true}).not().isEmpty(),
		body('codigo_parametro').optional({nullable: true}).not().isEmpty(),
		body('valor_caracter').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Parametros_Definicion.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Parametros_Definicion.getQuery();
		query.where("id_parametro=:recid", { recid });
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
 * Route to delete Parametros_Definicion record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /parametros_definicion/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Parametros_Definicion.getQuery();
		query.where({'id_parametro': In(recid)});
		 
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
