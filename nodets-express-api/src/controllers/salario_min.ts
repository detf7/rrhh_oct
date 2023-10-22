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
const Salario_Min = DB.Salario_Min;
const router = express.Router();




/**
 * Route to list salario_min records
 * @route {GET} /salario_min/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Salario_Min.getQuery();
		
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
			let searchFields = Salario_Min.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Salario_Min.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('id_salariomin', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Salario_Min.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Salario_Min record
 * @route {GET} /salario_min/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Salario_Min.getQuery();
		query.where("id_salariomin=:recid", { recid });
		let selectFields = Salario_Min.viewFields();
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
 * Route to insert Salario_Min record
 * @route {POST} /salario_min/add
 */
router.post('/add/' , 
	[
		body('mes').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('importe').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('respaldo_leg').optional({nullable: true, checkFalsy: true}),
		body('id_salariomin').optional({nullable: true, checkFalsy: true}),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Salario_Min record
		let record = await Salario_Min.save(modeldata);
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
    let queryParams = [record.mes, record.fecha];
    let sqltext = `CALL actualiza_gestion_salariomin($1,$2)`;
    let result = await rawQuery(sqltext, queryParams);
}


/**
 * Route to get  Salario_Min record for edit
 * @route {GET} /salario_min/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Salario_Min.getQuery();
		const editFields = Salario_Min.editFields(); // get fields to edit
		query.where("id_salariomin=:recid", { recid });
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
 * Route to update  Salario_Min record
 * @route {POST} /salario_min/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('mes').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('importe').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('respaldo_leg').optional({nullable: true, checkFalsy: true}),
		body('id_salariomin').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Salario_Min.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Salario_Min.getQuery();
		query.where("id_salariomin=:recid", { recid });
		query.select(editFields);
		const record = await query.getRawOne();
		if(!record){
			return res.recordNotFound();
		}
		Object.assign(record, modeldata); // update record with form input
		await query.update().set(modeldata).execute();
		await afterEdit(recid, record, req);
		return res.send(record);
	}
	catch(err){
		return res.serverError(err);
	}
});
/**
    * After page record updated
    * @param {string} recid // updated record id
    * @param {object} record // updated page record
    */
async function afterEdit(recid, record, req:HttpRequest){
    //enter statement here
        let queryParams = [record.mes, record.fecha];
    let sqltext = `CALL actualiza_gestion_salariomin($1,$2)`;
    let result = await rawQuery(sqltext, queryParams);
}


/**
 * Route to delete Salario_Min record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /salario_min/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Salario_Min.getQuery();
		query.where({'id_salariomin': In(recid)});
		 
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
