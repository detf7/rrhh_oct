/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Planillatemporal = DB.Planillatemporal;
const router = express.Router();




/**
 * Route to list planillatemporal records
 * @route {GET} /planillatemporal/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Planillatemporal.getQuery();
		
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
			let searchFields = Planillatemporal.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Planillatemporal.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idplatmp', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Planillatemporal.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Planillatemporal record
 * @route {GET} /planillatemporal/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Planillatemporal.getQuery();
		query.where("idplatmp=:recid", { recid });
		let selectFields = Planillatemporal.viewFields();
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
 * Route to insert Planillatemporal record
 * @route {POST} /planillatemporal/add
 */
router.post('/add/' , 
	[
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('finicio').optional({nullable: true, checkFalsy: true}),
		body('ffinal').optional({nullable: true, checkFalsy: true}),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('monto').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('salario').optional({nullable: true, checkFalsy: true}),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Planillatemporal record
		let record = await Planillatemporal.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Planillatemporal record for edit
 * @route {GET} /planillatemporal/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Planillatemporal.getQuery();
		const editFields = Planillatemporal.editFields(); // get fields to edit
		query.where("idplatmp=:recid", { recid });
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
 * Route to update  Planillatemporal record
 * @route {POST} /planillatemporal/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('finicio').optional({nullable: true, checkFalsy: true}),
		body('ffinal').optional({nullable: true, checkFalsy: true}),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('monto').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('salario').optional({nullable: true, checkFalsy: true}),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('financiero').optional({nullable: true, checkFalsy: true}),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Planillatemporal.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Planillatemporal.getQuery();
		query.where("idplatmp=:recid", { recid });
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
 * Route to delete Planillatemporal record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /planillatemporal/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Planillatemporal.getQuery();
		query.where({'idplatmp': In(recid)});
		 
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
