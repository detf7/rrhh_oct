/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Eventuales = DB.Eventuales;
const router = express.Router();




/**
 * Route to list eventuales records
 * @route {GET} /eventuales/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Eventuales.getQuery();
		
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
			let searchFields = Eventuales.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Eventuales.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('ideventual', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Eventuales.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Eventuales record
 * @route {GET} /eventuales/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eventuales.getQuery();
		query.where("ideventual=:recid", { recid });
		let selectFields = Eventuales.viewFields();
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
 * Route to insert Eventuales record
 * @route {POST} /eventuales/add
 */
router.post('/add/' , 
	[
		body('fechaini').optional({nullable: true, checkFalsy: true}),
		body('fechafin').optional({nullable: true, checkFalsy: true}),
		body('fechabaja').optional({nullable: true, checkFalsy: true}),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codescala').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codcontrol').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('codevaluacion').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('resolucion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Eventuales record
		let record = await Eventuales.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Eventuales record for edit
 * @route {GET} /eventuales/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Eventuales.getQuery();
		const editFields = Eventuales.editFields(); // get fields to edit
		query.where("ideventual=:recid", { recid });
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
 * Route to update  Eventuales record
 * @route {POST} /eventuales/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('fechaini').optional({nullable: true, checkFalsy: true}),
		body('fechafin').optional({nullable: true, checkFalsy: true}),
		body('fechabaja').optional({nullable: true, checkFalsy: true}),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codescala').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codcontrol').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('codevaluacion').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('resolucion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Eventuales.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Eventuales.getQuery();
		query.where("ideventual=:recid", { recid });
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
 * Route to delete Eventuales record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /eventuales/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Eventuales.getQuery();
		query.where({'ideventual': In(recid)});
		 
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
