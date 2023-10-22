/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Declaraciones = DB.Declaraciones;
const router = express.Router();




/**
 * Route to list declaraciones records
 * @route {GET} /declaraciones/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Declaraciones.getQuery();
		
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
			let searchFields = Declaraciones.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Declaraciones.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('iddeclaracion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Declaraciones.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Declaraciones record
 * @route {GET} /declaraciones/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Declaraciones.getQuery();
		query.where("iddeclaracion=:recid", { recid });
		let selectFields = Declaraciones.viewFields();
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
 * Route to insert Declaraciones record
 * @route {POST} /declaraciones/add
 */
router.post('/add/' , 
	[
		body('gestion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('habilitado').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('coddeclaracion').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Declaraciones record
		let record = await Declaraciones.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Declaraciones record for edit
 * @route {GET} /declaraciones/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Declaraciones.getQuery();
		const editFields = Declaraciones.editFields(); // get fields to edit
		query.where("iddeclaracion=:recid", { recid });
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
 * Route to update  Declaraciones record
 * @route {POST} /declaraciones/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('gestion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('habilitado').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').optional({nullable: true}).not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('coddeclaracion').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Declaraciones.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Declaraciones.getQuery();
		query.where("iddeclaracion=:recid", { recid });
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
 * Route to delete Declaraciones record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /declaraciones/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Declaraciones.getQuery();
		query.where({'iddeclaracion': In(recid)});
		 
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
