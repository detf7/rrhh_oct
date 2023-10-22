/**
 * Express router providing  related routes
*/
import express from 'express';
import utils from '../helpers/utils';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
import { body, validationResult, matchedData }  from 'express-validator';
import { In } from 'typeorm';
const Antiguedad = DB.Antiguedad;
const router = express.Router();




/**
 * Route to list antiguedad records
 * @route {GET} /antiguedad/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Antiguedad.getQuery();
		
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
			let searchFields = Antiguedad.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Antiguedad.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idantiguedad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Antiguedad.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});


/**
 * Route to view Antiguedad record
 * @route {GET} /antiguedad/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Antiguedad.getQuery();
		query.where("idantiguedad=:recid", { recid });
		let selectFields = Antiguedad.viewFields();
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
 * Route to insert Antiguedad record
 * @route {POST} /antiguedad/add
 */
router.post('/add/' , 
	[
		body('anios').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('porcentaje').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('numero_informe_cas').not().isEmpty(),
		body('usuario_creacion').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Antiguedad record
		let record = await Antiguedad.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Antiguedad record for edit
 * @route {GET} /antiguedad/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Antiguedad.getQuery();
		const editFields = Antiguedad.editFields(); // get fields to edit
		query.where("idantiguedad=:recid", { recid });
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
 * Route to update  Antiguedad record
 * @route {POST} /antiguedad/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('anios').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('porcentaje').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('vigente').optional({nullable: true, checkFalsy: true}),
		body('fecha_creacion').optional({nullable: true}).not().isEmpty(),
		body('fecha_modificacion').optional({nullable: true, checkFalsy: true}),
		body('fecha_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_modificacion').optional({nullable: true, checkFalsy: true}),
		body('usuario_eliminacion').optional({nullable: true, checkFalsy: true}),
		body('codusuario').optional({nullable: true, checkFalsy: true}),
		body('numero_informe_cas').optional({nullable: true}).not().isEmpty(),
		body('usuario_creacion').optional({nullable: true}).not().isEmpty(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Antiguedad.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Antiguedad.getQuery();
		query.where("idantiguedad=:recid", { recid });
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
 * Route to delete Antiguedad record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /antiguedad/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Antiguedad.getQuery();
		query.where({'idantiguedad': In(recid)});
		 
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
