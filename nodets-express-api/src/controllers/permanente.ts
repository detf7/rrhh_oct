/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Permanente = DB.Permanente;
const router = express.Router();




/**
 * Route to list permanente records
 * @route {GET} /permanente/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Permanente.getQuery();
		
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
			let searchFields = Permanente.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		// join Usuarios table 
		query.leftJoin("Usuarios", "usuarios", "permanente.codusuario = usuarios.idcarnet");
		
		const selectFields = Permanente.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idpermanente', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Permanente.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Permanente record
 * @route {GET} /permanente/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Permanente.getQuery();
		query.where("permanente.idpermanente=:recid", { recid });
		let selectFields = Permanente.viewFields();
		
		// join Usuarios table 
		query.leftJoin("Usuarios", "usuarios", "permanente.codusuario = usuarios.idcarnet");
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
 * Route to insert Permanente record
 * @route {POST} /permanente/add
 */
router.post('/add/' , 
	[
		body('fechaini').optional({nullable: true, checkFalsy: true}),
		body('fechafin').optional({nullable: true, checkFalsy: true}),
		body('fechabaja').optional({nullable: true, checkFalsy: true}),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('pagovac').optional({nullable: true, checkFalsy: true}),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('coddetesc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codpermanente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('memorandum').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('codevaluacion').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Permanente record
		let record = await Permanente.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Permanente record for edit
 * @route {GET} /permanente/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Permanente.getQuery();
		const editFields = Permanente.editFields(); // get fields to edit
		query.where("idpermanente=:recid", { recid });
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
 * Route to update  Permanente record
 * @route {POST} /permanente/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('fechaini').optional({nullable: true, checkFalsy: true}),
		body('fechafin').optional({nullable: true, checkFalsy: true}),
		body('fechabaja').optional({nullable: true, checkFalsy: true}),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('pagovac').optional({nullable: true, checkFalsy: true}),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('coddetesc').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codpermanente').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('memorandum').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('codevaluacion').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Permanente.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Permanente.getQuery();
		query.where("idpermanente=:recid", { recid });
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
 * Route to delete Permanente record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /permanente/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Permanente.getQuery();
		query.where({'idpermanente': In(recid)});
		 
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
