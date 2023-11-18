/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import importUploader from '../helpers/importuploader';
import DB from '../datasource';
import csv from 'fast-csv';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Plantillauo = DB.Plantillauo;
const router = express.Router();




/**
 * Route to list plantillauo records
 * @route {GET} /plantillauo/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Plantillauo.getQuery();
		
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
			let searchFields = Plantillauo.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		query.andWhere("codgestion in (select idgestion from gestion where habilitado=true)");
		
		const selectFields = Plantillauo.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idpuo', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Plantillauo.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to import Plantillauo records
 * support multi import of csv data files
 * csv file must contain table header on the first line.
 * @route {GET} /plantillauo/importdata
 */
router.post('/importdata', importUploader.array('file'), async (req:HttpRequest, res:HttpResponse) => {
	const uploadedFiles = req.files as any[];
	if(uploadedFiles){	// files uploaded
		var uploadedPaths = uploadedFiles.map((file) =>{
			return file.path;
		});
		if(uploadedPaths.length){
			uploadedPaths.forEach(function (fpath){
				let modeldata = [];
				csv.fromPath(fpath, {headers: true, ignoreEmpty: true}).on("data", function(data){
					if(data){
						modeldata.push(data);
					}
				}).on("end", async() => {
					try{
						const query = Plantillauo.getQuery();
						const result = await query.insert().values(modeldata).execute();
						return res.send(`${result.raw.affectedRows} Records Imported`);
					}
					catch(err){
						return res.serverError(err);
					}
				});
			});
		}
	}
	else{
		return res.badRequest("Error uploading file")
	}
});


/**
 * Route to view Plantillauo record
 * @route {GET} /plantillauo/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantillauo.getQuery();
		query.where("idpuo=:recid", { recid });
		let selectFields = Plantillauo.viewFields();
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
 * Route to insert Plantillauo record
 * @route {POST} /plantillauo/add
 */
router.post('/add/' , 
	[
		body('nombreuo').not().isEmpty(),
		body('prefijosoa').optional({nullable: true, checkFalsy: true}),
		body('codn1').optional({nullable: true, checkFalsy: true}),
		body('codn2').optional({nullable: true, checkFalsy: true}),
		body('codn3').optional({nullable: true, checkFalsy: true}),
		body('codn4').optional({nullable: true, checkFalsy: true}),
		body('codn5').optional({nullable: true, checkFalsy: true}),
		body('codn6').optional({nullable: true, checkFalsy: true}),
		body('clasificacionuo').optional({nullable: true, checkFalsy: true}),
		body('dependenciauo').optional({nullable: true, checkFalsy: true}),
		body('niveluo').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
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
		
		//save Plantillauo record
		let record = await Plantillauo.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Plantillauo record for edit
 * @route {GET} /plantillauo/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Plantillauo.getQuery();
		const editFields = Plantillauo.editFields(); // get fields to edit
		query.where("idpuo=:recid", { recid });
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
 * Route to update  Plantillauo record
 * @route {POST} /plantillauo/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nombreuo').optional({nullable: true}).not().isEmpty(),
		body('prefijosoa').optional({nullable: true, checkFalsy: true}),
		body('codn1').optional({nullable: true, checkFalsy: true}),
		body('codn2').optional({nullable: true, checkFalsy: true}),
		body('codn3').optional({nullable: true, checkFalsy: true}),
		body('codn4').optional({nullable: true, checkFalsy: true}),
		body('codn5').optional({nullable: true, checkFalsy: true}),
		body('codn6').optional({nullable: true, checkFalsy: true}),
		body('clasificacionuo').optional({nullable: true, checkFalsy: true}),
		body('dependenciauo').optional({nullable: true, checkFalsy: true}),
		body('niveluo').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Plantillauo.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Plantillauo.getQuery();
		query.where("idpuo=:recid", { recid });
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
 * Route to delete Plantillauo record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /plantillauo/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Plantillauo.getQuery();
		query.where({'idpuo': In(recid)});
		 
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
