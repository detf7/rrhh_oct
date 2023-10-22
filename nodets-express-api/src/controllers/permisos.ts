/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Permisos = DB.Permisos;
const router = express.Router();




/**
 * Route to list permisos records
 * @route {GET} /permisos/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Permisos.getQuery();
		
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
			let searchFields = Permisos.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Permisos.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idpermiso', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Permisos.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Permisos record
 * @route {GET} /permisos/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Permisos.getQuery();
		query.where("idpermiso=:recid", { recid });
		let selectFields = Permisos.viewFields();
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
 * Route to insert Permisos record
 * @route {POST} /permisos/add
 */
router.post('/add/' , 
	[
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('gestion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sqlid').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fini').optional({nullable: true, checkFalsy: true}),
		body('codboleta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ffin').optional({nullable: true, checkFalsy: true}),
		body('fechacreacion').optional({nullable: true, checkFalsy: true}),
		body('fechamodificacion').optional({nullable: true, checkFalsy: true}),
		body('tiempo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('hds').optional({nullable: true, checkFalsy: true}),
		body('lugar').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('idpermiso').not().isEmpty(),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('ciaprover').optional({nullable: true, checkFalsy: true}),
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
		
		//save Permisos record
		let record = await Permisos.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Permisos record for edit
 * @route {GET} /permisos/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Permisos.getQuery();
		const editFields = Permisos.editFields(); // get fields to edit
		query.where("idpermiso=:recid", { recid });
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
 * Route to update  Permisos record
 * @route {POST} /permisos/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('gestion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('sqlid').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fini').optional({nullable: true, checkFalsy: true}),
		body('codboleta').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('ffin').optional({nullable: true, checkFalsy: true}),
		body('fechacreacion').optional({nullable: true, checkFalsy: true}),
		body('fechamodificacion').optional({nullable: true, checkFalsy: true}),
		body('tiempo').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('hds').optional({nullable: true, checkFalsy: true}),
		body('lugar').optional({nullable: true, checkFalsy: true}),
		body('motivo').optional({nullable: true, checkFalsy: true}),
		body('idpermiso').optional({nullable: true}).not().isEmpty(),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('ciaprover').optional({nullable: true, checkFalsy: true}),
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
		
		const editFields = Permisos.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Permisos.getQuery();
		query.where("idpermiso=:recid", { recid });
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
 * Route to delete Permisos record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /permisos/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Permisos.getQuery();
		query.where({'idpermiso': In(recid)});
		 
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
