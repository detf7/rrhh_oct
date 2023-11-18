/**
 * Express router providing related routes to page component data
*/
import express from 'express';
import { rawQuery } from '../datasource';
import DB from '../datasource';
import { HttpRequest, HttpResponse } from '../helpers/http';
const router = express.Router();




 /**
 * Route to get codusuario_option_list records
 * @route {GET} /components_data/codusuario_option_list
 */
router.get('/codusuario_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idcarnet as value, idcarnet as label FROM usuarios` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get idpermanente_option_list records
 * @route {GET} /components_data/idpermanente_option_list
 */
router.get('/idpermanente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente AS value,nombre_completo AS label FROM v_permanente2 ORDER BY nombre_completo ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get cas_idpermanente_autofill records
 * @route {GET} /components_data/cas_idpermanente_autofill
 */
router.get('/cas_idpermanente_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `
SELECT 
  permanente.idpermanente,
  permanente.codusuario,
  usuarios.idcarnet,
  usuarios.expedido,
  usuarios.nombres,
  usuarios.appaterno,
  usuarios.apmaterno,
  usuarios.usuario,
  usuarios.estado
FROM
  usuarios
  RIGHT OUTER JOIN permanente ON (usuarios.idcarnet = permanente.codusuario)
  WHERE 
  permanente.idpermanente = $1
  " , array(queryParams.push(req.query.value))` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get cas_anios_serv_autofill records
 * @route {GET} /components_data/cas_anios_serv_autofill
 */
router.get('/cas_anios_serv_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente FROM v_permanente2 WHERE nombre_completo=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codhoja_option_list records
 * @route {GET} /components_data/codhoja_option_list
 */
router.get('/codhoja_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idhoja as value, idhoja as label FROM hojavida` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get iddeclaracion_option_list records
 * @route {GET} /components_data/iddeclaracion_option_list
 */
router.get('/iddeclaracion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iddeclaracion as value, iddeclaracion as label FROM declaraciones` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get coditem_option_list records
 * @route {GET} /components_data/coditem_option_list
 */
router.get('/coditem_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iditem as value, iditem as label FROM detitem` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codescala_option_list records
 * @route {GET} /components_data/codescala_option_list
 */
router.get('/codescala_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idescala as value, idescala as label FROM escala` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codunidad_option_list records
 * @route {GET} /components_data/codunidad_option_list
 */
router.get('/codunidad_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idunidad as value, idunidad as label FROM unidad` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codgestion_option_list records
 * @route {GET} /components_data/codgestion_option_list
 */
router.get('/codgestion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idgestion as value, idgestion as label FROM gestion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get dependencia_option_list records
 * @route {GET} /components_data/dependencia_option_list
 */
router.get('/dependencia_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT identidad as value, identidad as label FROM entidad` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_option_list records
 * @route {GET} /components_data/denominacion_option_list
 */
router.get('/denominacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT desc_denominacion AS value,desc_denominacion AS label FROM denominacion where codgestion  in (select codgestion_activa())` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get normativa_codigo_option_list records
 * @route {GET} /components_data/normativa_codigo_option_list
 */
router.get('/normativa_codigo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct normativa_codigo AS value,normativa_codigo AS label FROM escala where codgestion = codgestion_activa()` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get financiero_option_list records
 * @route {GET} /components_data/financiero_option_list
 */
router.get('/financiero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_desc AS value,fuente_desc AS label FROM fuente where codgestion  in (select codgestion_activa()) ORDER BY idfuente` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get escala_denominacion_autofill records
 * @route {GET} /components_data/escala_denominacion_autofill
 */
router.get('/escala_denominacion_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haber_basico FROM denominacion WHERE desc_denominacion=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get categoria_option_list records
 * @route {GET} /components_data/categoria_option_list
 */
router.get('/categoria_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT desc_catescala AS value,desc_catescala AS label FROM categoria_escala ORDER BY id_catescala ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivel_option_list records
 * @route {GET} /components_data/nivel_option_list
 */
router.get('/nivel_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct nivel_denom AS value,nivel_denom AS label FROM denominacion ORDER BY nivel_denom ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_option_list_2 records
 * @route {GET} /components_data/denominacion_option_list_2
 */
router.get('/denominacion_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT desc_denominacion AS value,desc_denominacion AS label FROM denominacion ORDER BY desc_denominacion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get descripcion_option_list records
 * @route {GET} /components_data/descripcion_option_list
 */
router.get('/descripcion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT descripcion AS value,descripcion AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get dependencia_option_list_2 records
 * @route {GET} /components_data/dependencia_option_list_2
 */
router.get('/dependencia_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT detalle AS value,detalle AS label FROM unidad ORDER BY detalle ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get sigla_option_list records
 * @route {GET} /components_data/sigla_option_list
 */
router.get('/sigla_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT sigla AS value,sigla AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get soa_option_list records
 * @route {GET} /components_data/soa_option_list
 */
router.get('/soa_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT soa AS value,soa AS label FROM estructura_org` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codevaluacion_option_list records
 * @route {GET} /components_data/codevaluacion_option_list
 */
router.get('/codevaluacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idevaluacion as value, idevaluacion as label FROM evaluacion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get coddetesc_option_list records
 * @route {GET} /components_data/coddetesc_option_list
 */
router.get('/coddetesc_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT iddetesc as value, iddetesc as label FROM detescala` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codpermanente_option_list records
 * @route {GET} /components_data/codpermanente_option_list
 */
router.get('/codpermanente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpermanente as value, idpermanente as label FROM permanente` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codboleta_option_list records
 * @route {GET} /components_data/codboleta_option_list
 */
router.get('/codboleta_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idboleta as value, idboleta as label FROM detboleta` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get role_id_option_list records
 * @route {GET} /components_data/role_id_option_list
 */
router.get('/role_id_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT role_id as value, role_name as label FROM roles` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get fuente_option_list records
 * @route {GET} /components_data/fuente_option_list
 */
router.get('/fuente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_resumen AS value,fuente_resumen AS label FROM fuente  where codgestion  in (select codgestion_activa()) ORDER BY fuente_resumen` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_cargo_option_list records
 * @route {GET} /components_data/denominacion_cargo_option_list
 */
router.get('/denominacion_cargo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT desc_denominacion AS value,desc_denominacion AS label FROM denominacion WHERE nivel_denom=$1 ORDER BY desc_denominacion ASC` ;
		let queryParams = [];
		queryParams.push(req.query.lookup_nivel);
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codgestion_option_list_2 records
 * @route {GET} /components_data/codgestion_option_list_2
 */
router.get('/codgestion_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `select idgestion from gestion
where habilitado ='True'` ;
		let queryParams = [];
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get planilla_presupuestaria_fuente_autofill records
 * @route {GET} /components_data/planilla_presupuestaria_fuente_autofill
 */
router.get('/planilla_presupuestaria_fuente_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT codgestion FROM fuente WHERE fuente_resumen=$1 and codgestion_activa()=codgestion` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get planilla_presupuestaria_nivel_autofill records
 * @route {GET} /components_data/planilla_presupuestaria_nivel_autofill
 */
router.get('/planilla_presupuestaria_nivel_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haber_basico, desc_denominacion FROM denominacion WHERE nivel_denom=$1` ;
		let queryParams = [];
		queryParams.push(req.query.value)
		let records = await rawQuery(sqltext , queryParams);
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get fuente_option_list_2 records
 * @route {GET} /components_data/fuente_option_list_2
 */
router.get('/fuente_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_resumen AS value,fuente_resumen AS label FROM fuente ORDER BY fuente_resumen ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nivel_option_list_2 records
 * @route {GET} /components_data/nivel_option_list_2
 */
router.get('/nivel_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT DISTINCT nivel AS value,nivel AS label FROM unidad ORDER BY nivel ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get haber_basico_option_list records
 * @route {GET} /components_data/haber_basico_option_list
 */
router.get('/haber_basico_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT haber_basico AS value,haber_basico AS label FROM denominacion ORDER BY haber_basico ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_cargo_option_list_2 records
 * @route {GET} /components_data/denominacion_cargo_option_list_2
 */
router.get('/denominacion_cargo_option_list_2', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT desc_denominacion AS value,desc_denominacion AS label FROM denominacion ORDER BY desc_denominacion ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get nombreuo_option_list records
 * @route {GET} /components_data/nombreuo_option_list
 */
router.get('/nombreuo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT DISTINCT detalle AS value,detalle AS label FROM unidad ORDER BY detalle ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get dependenciauo_option_list records
 * @route {GET} /components_data/dependenciauo_option_list
 */
router.get('/dependenciauo_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT distinct sigla AS value,sigla AS label FROM unidad ORDER BY sigla ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get plantillauo_nombreuo_autofill records
 * @route {GET} /components_data/plantillauo_nombreuo_autofill
 */
router.get('/plantillauo_nombreuo_autofill', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idgestion FROM gestion WHERE habilitado=true` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codpla_option_list records
 * @route {GET} /components_data/codpla_option_list
 */
router.get('/codpla_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpla as value, idpla as label FROM planillas` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codalmacen_option_list records
 * @route {GET} /components_data/codalmacen_option_list
 */
router.get('/codalmacen_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idalmacen as value, idalmacen as label FROM almacen` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codmaterial_option_list records
 * @route {GET} /components_data/codmaterial_option_list
 */
router.get('/codmaterial_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idmaterial as value, idmaterial as label FROM material` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Users table
 * @route {GET} /components_data/users_usuario_exist/{fieldvalue}
 */
router.get('/users_usuario_exist/:fieldvalue', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let val = req.params.fieldvalue;
		if(val){
			let recordExists = await DB.Users.getQuery().where({'usuario': val}).exists();
			return res.send(recordExists);
		}
		return res.send("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Users table
 * @route {GET} /components_data/users_email_exist/{fieldvalue}
 */
router.get('/users_email_exist/:fieldvalue', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let val = req.params.fieldvalue;
		if(val){
			let recordExists = await DB.Users.getQuery().where({'email': val}).exists();
			return res.send(recordExists);
		}
		return res.send("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get denominacion_fuente_option_list records
 * @route {GET} /components_data/denominacion_fuente_option_list
 */
router.get('/denominacion_fuente_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT  distinct denominacion.fuente AS value, fuente.fuente_desc AS label  FROM denominacion JOIN fuente ON denominacion.fuente=fuente.fuente_resumen` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get escala_financiero_option_list records
 * @route {GET} /components_data/escala_financiero_option_list
 */
router.get('/escala_financiero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_desc AS value,fuente_desc AS label FROM fuente ORDER BY idfuente ASC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
