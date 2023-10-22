/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Tmpsaldos = DB.Tmpsaldos;
const router = express.Router();




/**
 * Route to list tmpsaldos records
 * @route {GET} /tmpsaldos/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Tmpsaldos.getQuery();
		
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
			let searchFields = Tmpsaldos.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Tmpsaldos.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idtmpsal', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Tmpsaldos.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Tmpsaldos record
 * @route {GET} /tmpsaldos/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Tmpsaldos.getQuery();
		query.where("idtmpsal=:recid", { recid });
		let selectFields = Tmpsaldos.viewFields();
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
 * Route to insert Tmpsaldos record
 * @route {POST} /tmpsaldos/add
 */
router.post('/add/' , 
	[
		body('precio').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('inicial').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tinicial').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('compras').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tcompras').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('pedidos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tpedidos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('final').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tfinal').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codalmacen').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codmaterial').optional({nullable: true, checkFalsy: true}),
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
		
		//save Tmpsaldos record
		let record = await Tmpsaldos.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Tmpsaldos record for edit
 * @route {GET} /tmpsaldos/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Tmpsaldos.getQuery();
		const editFields = Tmpsaldos.editFields(); // get fields to edit
		query.where("idtmpsal=:recid", { recid });
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
 * Route to update  Tmpsaldos record
 * @route {POST} /tmpsaldos/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('precio').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('inicial').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tinicial').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('compras').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tcompras').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('pedidos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tpedidos').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('final').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tfinal').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codalmacen').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('codmaterial').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Tmpsaldos.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Tmpsaldos.getQuery();
		query.where("idtmpsal=:recid", { recid });
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
 * Route to delete Tmpsaldos record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /tmpsaldos/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Tmpsaldos.getQuery();
		query.where({'idtmpsal': In(recid)});
		 
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
