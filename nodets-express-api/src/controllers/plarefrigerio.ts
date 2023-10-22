/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plarefrigerio = DB.Plarefrigerio;
const router = express.Router();




/**
 * Route to list plarefrigerio records
 * @route {GET} /plarefrigerio/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plarefrigerio.getQuery();
		
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
			let searchFields = Plarefrigerio.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Plarefrigerio.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idplarefri', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plarefrigerio.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Plarefrigerio record
 * @route {GET} /plarefrigerio/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plarefrigerio.getQuery();
		query.where("idplarefri=:recid", { recid });
		let selectFields = Plarefrigerio.viewFields();
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
 * Route to insert Plarefrigerio record
 * @route {POST} /plarefrigerio/add
 */
router.post('/add/' , 
	[
		body('codpla').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('montodia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('falta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('abandono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ausencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('boleta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('total').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('diastrabajo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
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
		
		//save Plarefrigerio record
		let record = await Plarefrigerio.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plarefrigerio record for edit
 * @route {GET} /plarefrigerio/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plarefrigerio.getQuery();
		const editFields = Plarefrigerio.editFields(); // get fields to edit
		query.where("idplarefri=:recid", { recid });
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
 * Route to update  Plarefrigerio record
 * @route {POST} /plarefrigerio/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('codpla').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('montodia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('falta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('abandono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ausencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('boleta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('total').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('diastrabajo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Plarefrigerio.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plarefrigerio.getQuery();
		query.where("idplarefri=:recid", { recid });
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
 * Route to delete Plarefrigerio record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plarefrigerio/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plarefrigerio.getQuery();
		query.where({'idplarefri': In(recid)});
		 
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
