/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Experiencia = DB.Experiencia;
const router = express.Router();




/**
 * Route to list experiencia records
 * @route {GET} /experiencia/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Experiencia.getQuery();
		
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
			let searchFields = Experiencia.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		
		const selectFields = Experiencia.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idexp', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Experiencia.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Experiencia record
 * @route {GET} /experiencia/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Experiencia.getQuery();
		query.where("idexp=:recid", { recid });
		let selectFields = Experiencia.viewFields();
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
 * Route to insert Experiencia record
 * @route {POST} /experiencia/add
 */
router.post('/add/' , 
	[
		body('codhoja').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('f_fin').optional({nullable: true, checkFalsy: true}),
		body('especifica').optional({nullable: true, checkFalsy: true}),
		body('f_inicio').optional({nullable: true, checkFalsy: true}),
		body('entidad').optional({nullable: true, checkFalsy: true}),
		body('cargo').optional({nullable: true, checkFalsy: true}),
		body('funciones').optional({nullable: true, checkFalsy: true}),
		body('codgestion').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Experiencia record
		let record = await Experiencia.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Experiencia record for edit
 * @route {GET} /experiencia/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Experiencia.getQuery();
		const editFields = Experiencia.editFields(); // get fields to edit
		query.where("idexp=:recid", { recid });
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
 * Route to update  Experiencia record
 * @route {POST} /experiencia/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('codhoja').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('f_fin').optional({nullable: true, checkFalsy: true}),
		body('especifica').optional({nullable: true, checkFalsy: true}),
		body('f_inicio').optional({nullable: true, checkFalsy: true}),
		body('entidad').optional({nullable: true, checkFalsy: true}),
		body('cargo').optional({nullable: true, checkFalsy: true}),
		body('funciones').optional({nullable: true, checkFalsy: true}),
		body('codgestion').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Experiencia.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Experiencia.getQuery();
		query.where("idexp=:recid", { recid });
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
 * Route to delete Experiencia record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /experiencia/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Experiencia.getQuery();
		query.where({'idexp': In(recid)});
		 
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
