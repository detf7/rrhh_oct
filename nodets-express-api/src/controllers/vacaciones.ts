/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Vacaciones = DB.Vacaciones;
const router = express.Router();




/**
 * Route to list vacaciones records
 * @route {GET} /vacaciones/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Vacaciones.getQuery();
		
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
			let searchFields = Vacaciones.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Vacaciones.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idvacacion', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Vacaciones.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Vacaciones record
 * @route {GET} /vacaciones/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Vacaciones.getQuery();
		query.where("idvacacion=:recid", { recid });
		let selectFields = Vacaciones.viewFields();
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
 * Route to insert Vacaciones record
 * @route {POST} /vacaciones/add
 */
router.post('/add/' , 
	[
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('fini').optional({nullable: true, checkFalsy: true}),
		body('ffin').optional({nullable: true, checkFalsy: true}),
		body('fres').optional({nullable: true, checkFalsy: true}),
		body('medio').optional({nullable: true, checkFalsy: true}),
		body('sqlid').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha_creacion').not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').not().isEmpty(),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('idvacacion').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Vacaciones record
		let record = await Vacaciones.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Vacaciones record for edit
 * @route {GET} /vacaciones/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Vacaciones.getQuery();
		const editFields = Vacaciones.editFields(); // get fields to edit
		query.where("idvacacion=:recid", { recid });
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
 * Route to update  Vacaciones record
 * @route {POST} /vacaciones/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('fini').optional({nullable: true, checkFalsy: true}),
		body('ffin').optional({nullable: true, checkFalsy: true}),
		body('fres').optional({nullable: true, checkFalsy: true}),
		body('medio').optional({nullable: true, checkFalsy: true}),
		body('sqlid').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha_creacion').optional({nullable: true}).not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('usuario_creacion').optional({nullable: true}).not().isEmpty(),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('idvacacion').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Vacaciones.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Vacaciones.getQuery();
		query.where("idvacacion=:recid", { recid });
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
 * Route to delete Vacaciones record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /vacaciones/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Vacaciones.getQuery();
		query.where({'idvacacion': In(recid)});
		 
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
