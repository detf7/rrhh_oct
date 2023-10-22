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
 * Route to get codcompra_option_list records
 * @route {GET} /components_data/codcompra_option_list
 */
router.get('/codcompra_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idcompra as value, idcompra as label FROM compra` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codpedido_option_list records
 * @route {GET} /components_data/codpedido_option_list
 */
router.get('/codpedido_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idpedido as value, idpedido as label FROM pedido` ;
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
 * Route to get codregvacacion_option_list records
 * @route {GET} /components_data/codregvacacion_option_list
 */
router.get('/codregvacacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idregvacacion as value, idregvacacion as label FROM regvacacion` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get codvacacion_option_list records
 * @route {GET} /components_data/codvacacion_option_list
 */
router.get('/codvacacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idvacacion as value, idvacacion as label FROM vacaciones` ;
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
 * Route to get financiero_option_list records
 * @route {GET} /components_data/financiero_option_list
 */
router.get('/financiero_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT fuente_desc AS value,fuente_desc AS label FROM fuente ORDER BY idfuente ASC` ;
		let records = await rawQuery(sqltext );
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
 * Route to get denominacion_option_list records
 * @route {GET} /components_data/denominacion_option_list
 */
router.get('/denominacion_option_list', async (req:HttpRequest, res:HttpResponse) => {
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
		let sqltext = `SELECT idgestion AS value,idgestion AS label FROM gestion ORDER BY idgestion ASC` ;
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
 * Route to check if field value already exist in a Estructura_Org table
 * @route {GET} /components_data/estructura_org_soa_exist/{fieldvalue}
 */
router.get('/estructura_org_soa_exist/:fieldvalue', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let val = req.params.fieldvalue;
		if(val){
			let recordExists = await DB.Estructura_Org.getQuery().where({'soa': val}).exists();
			return res.send(recordExists);
		}
		return res.send("false");
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
 * Route to get escala_codgestion_option_list records
 * @route {GET} /components_data/escala_codgestion_option_list
 */
router.get('/escala_codgestion_option_list', async (req:HttpRequest, res:HttpResponse) => {
	try{
		let sqltext = `SELECT idgestion AS value,idgestion AS label FROM gestion ORDER BY idgestion DESC` ;
		let records = await rawQuery(sqltext );
		return res.send(records);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;
