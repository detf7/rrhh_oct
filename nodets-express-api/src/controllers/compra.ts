/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Compra = DB.Compra;
const router = express.Router();




/**
 * Route to list compra records
 * @route {GET} /compra/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Compra.getQuery();
		
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
			let searchFields = Compra.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Compra.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idcompra', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Compra.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Compra record
 * @route {GET} /compra/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Compra.getQuery();
		query.where("idcompra=:recid", { recid });
		let selectFields = Compra.viewFields();
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
 * Route to insert Compra record
 * @route {POST} /compra/add
 */
router.post('/add/' , 
	[
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codproveedor').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('codalmacen').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('derivado').optional({nullable: true, checkFalsy: true}),
		body('hruta').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('recepcion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('idcompra').not().isEmpty(),
		body('codcompra').optional({nullable: true, checkFalsy: true}),
		body('factura').optional({nullable: true, checkFalsy: true}),
		body('modalidad').optional({nullable: true, checkFalsy: true}),
		body('ordencompra').optional({nullable: true, checkFalsy: true}),
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
		
		//save Compra record
		let record = await Compra.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Compra record for edit
 * @route {GET} /compra/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Compra.getQuery();
		const editFields = Compra.editFields(); // get fields to edit
		query.where("idcompra=:recid", { recid });
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
 * Route to update  Compra record
 * @route {POST} /compra/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('codunidad').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codproveedor').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('codalmacen').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('derivado').optional({nullable: true, checkFalsy: true}),
		body('hruta').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('recepcion').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('idcompra').optional({nullable: true}).not().isEmpty(),
		body('codcompra').optional({nullable: true, checkFalsy: true}),
		body('factura').optional({nullable: true, checkFalsy: true}),
		body('modalidad').optional({nullable: true, checkFalsy: true}),
		body('ordencompra').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Compra.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Compra.getQuery();
		query.where("idcompra=:recid", { recid });
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
 * Route to delete Compra record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /compra/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Compra.getQuery();
		query.where({'idcompra': In(recid)});
		 
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
