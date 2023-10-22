/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Infouser = DB.Infouser;
const router = express.Router();




/**
 * Route to list infouser records
 * @route {GET} /infouser/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Infouser.getQuery();
		
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
			let searchFields = Infouser.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Infouser.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idinfo', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Infouser.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Infouser record
 * @route {GET} /infouser/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Infouser.getQuery();
		query.where("idinfo=:recid", { recid });
		let selectFields = Infouser.viewFields();
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
 * Route to insert Infouser record
 * @route {POST} /infouser/add
 */
router.post('/add/' , 
	[
		body('frontera').optional({nullable: true, checkFalsy: true}),
		body('fingreso').optional({nullable: true, checkFalsy: true}),
		body('autovac').optional({nullable: true, checkFalsy: true}),
		body('cbancaria').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nativo').optional({nullable: true, checkFalsy: true}),
		body('visible').optional({nullable: true, checkFalsy: true}),
		body('ley1178').optional({nullable: true, checkFalsy: true}),
		body('ppublicas').optional({nullable: true, checkFalsy: true}),
		body('rpfpublica').optional({nullable: true, checkFalsy: true}),
		body('rejap').optional({nullable: true, checkFalsy: true}),
		body('frejap').optional({nullable: true, checkFalsy: true}),
		body('sipasse').optional({nullable: true, checkFalsy: true}),
		body('fsipasse').optional({nullable: true, checkFalsy: true}),
		body('hojavida').optional({nullable: true, checkFalsy: true}),
		body('incompatibilidad').optional({nullable: true, checkFalsy: true}),
		body('cnacimiento').optional({nullable: true, checkFalsy: true}),
		body('nua').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('afp').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
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
		
		//save Infouser record
		let record = await Infouser.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Infouser record for edit
 * @route {GET} /infouser/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Infouser.getQuery();
		const editFields = Infouser.editFields(); // get fields to edit
		query.where("idinfo=:recid", { recid });
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
 * Route to update  Infouser record
 * @route {POST} /infouser/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('frontera').optional({nullable: true, checkFalsy: true}),
		body('fingreso').optional({nullable: true, checkFalsy: true}),
		body('autovac').optional({nullable: true, checkFalsy: true}),
		body('cbancaria').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('nativo').optional({nullable: true, checkFalsy: true}),
		body('visible').optional({nullable: true, checkFalsy: true}),
		body('ley1178').optional({nullable: true, checkFalsy: true}),
		body('ppublicas').optional({nullable: true, checkFalsy: true}),
		body('rpfpublica').optional({nullable: true, checkFalsy: true}),
		body('rejap').optional({nullable: true, checkFalsy: true}),
		body('frejap').optional({nullable: true, checkFalsy: true}),
		body('sipasse').optional({nullable: true, checkFalsy: true}),
		body('fsipasse').optional({nullable: true, checkFalsy: true}),
		body('hojavida').optional({nullable: true, checkFalsy: true}),
		body('incompatibilidad').optional({nullable: true, checkFalsy: true}),
		body('cnacimiento').optional({nullable: true, checkFalsy: true}),
		body('nua').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('afp').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Infouser.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Infouser.getQuery();
		query.where("idinfo=:recid", { recid });
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
 * Route to delete Infouser record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /infouser/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Infouser.getQuery();
		query.where({'idinfo': In(recid)});
		 
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
