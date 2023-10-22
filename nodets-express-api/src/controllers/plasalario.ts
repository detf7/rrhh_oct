/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plasalario = DB.Plasalario;
const router = express.Router();




/**
 * Route to list plasalario records
 * @route {GET} /plasalario/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plasalario.getQuery();
		
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
			let searchFields = Plasalario.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Plasalario.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idplasalario', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plasalario.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Plasalario record
 * @route {GET} /plasalario/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plasalario.getQuery();
		query.where("idplasalario=:recid", { recid });
		let selectFields = Plasalario.viewFields();
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
 * Route to insert Plasalario record
 * @route {POST} /plasalario/add
 */
router.post('/add/' , 
	[
		body('codpla').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('salarios').optional({nullable: true, checkFalsy: true}),
		body('ausencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('atraso').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sminimo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tsalario').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tdescuento').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mantiguedad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('frontera').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('abandono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('falta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
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
		
		//save Plasalario record
		let record = await Plasalario.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plasalario record for edit
 * @route {GET} /plasalario/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plasalario.getQuery();
		const editFields = Plasalario.editFields(); // get fields to edit
		query.where("idplasalario=:recid", { recid });
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
 * Route to update  Plasalario record
 * @route {POST} /plasalario/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('codpla').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cargos').optional({nullable: true, checkFalsy: true}),
		body('salarios').optional({nullable: true, checkFalsy: true}),
		body('ausencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('atraso').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sminimo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('haberbasico').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tsalario').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tdescuento').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dias').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('cas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('mantiguedad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('frontera').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('abandono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('falta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('unidad').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('cargopla').optional({nullable: true, checkFalsy: true}),
		body('denominacion').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Plasalario.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plasalario.getQuery();
		query.where("idplasalario=:recid", { recid });
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
 * Route to delete Plasalario record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plasalario/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plasalario.getQuery();
		query.where({'idplasalario': In(recid)});
		 
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
