/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Cas = DB.Cas;
const router = express.Router();




/**
 * Route to list cas records
 * @route {GET} /cas/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Cas.getQuery();
		
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
			let searchFields = Cas.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Cas.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_cas', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Cas.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Cas record
 * @route {GET} /cas/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Cas.getQuery();
		query.where("id_cas=:recid", { recid });
		let selectFields = Cas.viewFields();
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
 * Route to insert Cas record
 * @route {POST} /cas/add
 */
router.post('/add/' , 
	[
		body('idpermanente').not().isEmpty().isNumeric(),
		body('dato_cas').optional({nullable: true, checkFalsy: true}),
		body('fecha_recepcion').optional({nullable: true, checkFalsy: true}),
		body('anios_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('meses_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dias_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion_cas').optional({nullable: true, checkFalsy: true}),
		body('monto_cas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('incremento').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Cas record
		let record = await Cas.save(modeldata);
		await afterAdd(record, req);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});
/**
    * After new record created
    * @param {object} record // newly created record
    */
async function afterAdd(record, req:HttpRequest){
    //enter statement here
    let queryParams = [ record.anios_serv, record.idpermanente];
    let sqltext = `CALL calculo_cas($1, $2)`;
    let result = await rawQuery(sqltext, queryParams);
    // Procesar el resultado aquí
}


/**
 * Route to get  Cas record for edit
 * @route {GET} /cas/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Cas.getQuery();
		const editFields = Cas.editFields(); // get fields to edit
		query.where("id_cas=:recid", { recid });
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
 * Route to update  Cas record
 * @route {POST} /cas/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('idpermanente').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('dato_cas').optional({nullable: true, checkFalsy: true}),
		body('fecha_recepcion').optional({nullable: true, checkFalsy: true}),
		body('anios_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('meses_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('dias_serv').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion_cas').optional({nullable: true, checkFalsy: true}),
		body('monto_cas').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('incremento').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Cas.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Cas.getQuery();
		query.where("id_cas=:recid", { recid });
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
 * Route to delete Cas record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /cas/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Cas.getQuery();
		query.where({'id_cas': In(recid)});
		 
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
