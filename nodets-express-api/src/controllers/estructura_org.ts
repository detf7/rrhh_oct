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
import Denominacion from '../models/denominacion.entity';
const Estructura_Org = DB.Estructura_Org;
const router = express.Router();


export class MyClass {
    private obj: any;

    constructor(obj: any) {
        this.obj = obj
    }
}

class Employee {
    id: string;
    name: string;
    title: string;
    children: Employee[];

    constructor(id: string, name: string, title: string) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.children = [];
    }
}

/**
 * Route to list estructura_org records
 * @route {GET} /estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Estructura_Org.getQuery();
		
		const fieldName = req.params.fieldname;
		const fieldValue = req.params.fieldvalue;
		const search = req.query.search;
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 10;
		
		if (fieldName){
			 //filter by a single column values
			query.where(`${fieldName}=:fieldValue`, {fieldValue});
		}
		
		if(req.query.estructura_org_nivel){
			let paramValue = req.query.estructura_org_nivel;
			query.andWhere("estructura_org.nivel=:paramValue", { paramValue });
		}
		
		if(search){
			let searchFields = Estructura_Org.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Estructura_Org.listFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idunidad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});

/**
 * Route to list estructura_org records
 * @route {GET} /estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/indexview/'], async (req:HttpRequest, res:HttpResponse) => {  
	try {
	/*
	try{
		const query = Estructura_Org.getQuery();

		//return records and pager info
		const pageData = await Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
	*/


	// Creating the type for the object
type objType = {
	obj_id: number;
	obj_value: string;
 };
 // creating the array of objects
 let objArray: Array<objType> = [
	{ obj_id: 1, obj_value: "TutorialsPoint" },
	{ obj_id: 2, obj_value: "TypeScript" },
	{ obj_id: 3, obj_value: "Shubham" },
	{ obj_id: 4, obj_value: "TutorialsPoint" },
	{ obj_id: 5, obj_value: "TypeScript" },
 ];



 const querySpec = {
	text: 'SELECT * FROM public.escala'
}

let sqltext = `SELECT * FROM public.escala`;
let result = await rawQuery(sqltext);

/*
const momentoComida = result.map(function(comida) {
    return comida.Denominacion;
});
*/
const deliveries = [];
//const rowsArray = Array.from(result.rows);

/*for (const row of rowsArray) {
	// Acceder a las columnas de cada fila por nombre
	const obj = {
	
		obj_value: row.Denominacion
	};
	deliveries.push(obj);
}
*/

for (let i = 0; i < result.length; i++) {
    const item = result[i];
    console.log(`Resultado ${i + 1}:`);
    console.log(`ID de Escala: ${item.idescala}`);
    console.log(`Entidad: ${item.entidad}`);
    console.log(`Categoría: ${item.categoria}`);

}
 return res.send(result);
} catch (err) {
	console.error("Ha ocurrido un error", req.path, err);
	return res.serverError(err);
}
});


/**
 * Route to view Estructura_Org record
 * @route {GET} /estructura_org/view/{recid}
 */
router.get(['/view/:recid'], async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		query.where("idunidad=:recid", { recid });
		let selectFields = Estructura_Org.viewFields();
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
 * Route to insert Estructura_Org record
 * @route {POST} /estructura_org/add
 */
router.post('/add/' , 
	[
		body('codgestion').optional({nullable: true, checkFalsy: true}),
		body('ley').not().isEmpty(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//save Estructura_Org record
		let record = await Estructura_Org.save(modeldata);
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
    let queryParams = [  record.ley , record.codgestion];
    let sqltext = `CALL generarestructura($1, $2)`;
    let result = await rawQuery(sqltext, queryParams);
    // Procesar el resultado aquí
}


/**
 * Route to get  Estructura_Org record for edit
 * @route {GET} /estructura_org/edit/{recid}
 */
router.get('/edit/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		const editFields = Estructura_Org.editFields(); // get fields to edit
		query.where("idunidad=:recid", { recid });
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
 * Route to update  Estructura_Org record
 * @route {POST} /estructura_org/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Estructura_Org.editFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Estructura_Org.getQuery();
		query.where("idunidad=:recid", { recid });
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
 * Route to delete Estructura_Org record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /estructura_org/delete/{recid}
 */
router.get('/delete/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = Estructura_Org.getQuery();
		query.where({'idunidad': In(recid)});
		 
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


/**
 * Route to insert Estructura_Org record
 * @route {POST} /estructura_org/add
 */
router.post('/agregarorg/' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion').not().isEmpty(),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('soa').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req:HttpRequest, res:HttpResponse) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get the validated data
		
		//check if soa already exists
		let soaExists = await Estructura_Org.getQuery().where({'soa': modeldata.soa}).exists();
		if(soaExists){
			return res.badRequest(`${modeldata.soa} already exist.`);
		}
		
		//save Estructura_Org record
		let record = await Estructura_Org.save(modeldata);
		
		return res.send(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Estructura_Org record for edit
 * @route {GET} /estructura_org/edit/{recid}
 */
router.get('/edicionorg/:recid', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let recid = req.params.recid;
		let query = Estructura_Org.getQuery();
		const editFields = Estructura_Org.edicionorgFields(); // get fields to edit
		query.where("idunidad=:recid", { recid });
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
 * Route to update  Estructura_Org record
 * @route {POST} /estructura_org/edit/{recid}
 */
router.post('/edicionorg/:recid' , 
	[
		body('nivel').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('sigla').optional({nullable: true, checkFalsy: true}),
		body('soa').optional({nullable: true, checkFalsy: true}),
		body('glosa').optional({nullable: true, checkFalsy: true}),
		body('dependencia').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req:HttpRequest, res:HttpResponse) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		
		const editFields = Estructura_Org.edicionorgFields();  // get fields to edit
		
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = Estructura_Org.getQuery();
		query.where("idunidad=:recid", { recid });
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
 * Route to list estructura_org records
 * @route {GET} /estructura_org/index/{fieldname}/{fieldvalue}
 */
router.get(['/vista/:fieldname?/:fieldvalue?'], async (req:HttpRequest, res:HttpResponse) => {  
	try{
		const query = Estructura_Org.getQuery();
		
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
			let searchFields = Estructura_Org.searchFields(); // get columns to search
			query.andWhere(searchFields, {search: `%${search}%`});
		}
		
		const selectFields = Estructura_Org.vistaFields(); //get columns to select
		query.select(selectFields);
		
		// order by field
		const orderBy = req.getOrderBy('idunidad', 'DESC');
		if(orderBy){
			query.orderBy(orderBy.column, orderBy.orderType);
		}
		
		//return records and pager info
		const pageData = await Estructura_Org.paginate(query, page, limit);
		
		return res.send(pageData);
	}
	catch(err) {
		console.error("has crached", req.path, err);
		return res.serverError(err);
	}
});
export default router;
