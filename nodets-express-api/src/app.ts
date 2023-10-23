import express, { Application } from 'express';
import passport from './helpers/passport-auth';
import cors from 'cors';
import ejs from 'ejs';
import config from './config';
import { HttpRequest, HttpResponse, HttpMiddleWare } from './helpers/http';
import { AppDataSource } from './datasource';
import HomeController from './controllers/home';
import ComponentsDataController from './controllers/components_data';
import FileUploaderController from './controllers/fileuploader';
import S3UploaderController from './controllers/s3uploader';
import AuthController from './controllers/auth';
import AccountController from './controllers/account';
import IdpermisoController from './controllers/_idpermiso';
import AntiguedadController from './controllers/antiguedad';
import ArchivosController from './controllers/archivos';
import CasController from './controllers/cas';
import CategoriaController from './controllers/categoria';
import CategoriaEscalaController from './controllers/categoria_escala';
import CodSoaController from './controllers/cod_soa';
import ComunicadosController from './controllers/comunicados';
import ConfiguracionController from './controllers/configuracion';
import CursosController from './controllers/cursos';
import DecjuradaController from './controllers/decjurada';
import DeclaracionPreguntaUsuarioController from './controllers/declaracion_pregunta_usuario';
import DeclaracionesController from './controllers/declaraciones';
import DenominacionController from './controllers/denominacion';
import DenominacionEoController from './controllers/denominacion_eo';
import DetboletaController from './controllers/detboleta';
import DetescalaController from './controllers/detescala';
import DetitemController from './controllers/detitem';
import EntidadController from './controllers/entidad';
import EscalaController from './controllers/escala';
import EscalaTController from './controllers/escala_t';
import EstructuraOrgController from './controllers/estructura_org';
import EstudiosController from './controllers/estudios';
import EvaluacionController from './controllers/evaluacion';
import EventualesController from './controllers/eventuales';
import ExperienciaController from './controllers/experiencia';
import FuenteController from './controllers/fuente';
import GestionController from './controllers/gestion';
import HojavidaController from './controllers/hojavida';
import InfouserController from './controllers/infouser';
import ItemEscalaController from './controllers/item_escala';
import LogReportesController from './controllers/log_reportes';
import MedidaController from './controllers/medida';
import NivelEscalaController from './controllers/nivel_escala';
import ParametrosDefinicionController from './controllers/parametros_definicion';
import ParentescoController from './controllers/parentesco';
import PermanenteController from './controllers/permanente';
import PermisosController from './controllers/permisos';
import PermissionsController from './controllers/permissions';
import PexternoController from './controllers/pexterno';
import PlanillaPresupuestariaController from './controllers/planilla_presupuestaria';
import PlanillasController from './controllers/planillas';
import PlanillatemporalController from './controllers/planillatemporal';
import PlantillaEstructuraOrgController from './controllers/plantilla_estructura_org';
import PlarefrigerioController from './controllers/plarefrigerio';
import PlasalarioController from './controllers/plasalario';
import PoaController from './controllers/poa';
import PreguntasController from './controllers/preguntas';
import ProveedorController from './controllers/proveedor';
import RegvacacionController from './controllers/regvacacion';
import RolesController from './controllers/roles';
import SalarioMinController from './controllers/salario_min';
import StockController from './controllers/stock';
import TabEscController from './controllers/tab_esc';
import UnidadController from './controllers/unidad';
import UsersController from './controllers/users';
import UsuariosController from './controllers/usuarios';
import VEscalaimprController from './controllers/v_escalaimpr';
import VNpermanenteController from './controllers/v_npermanente';
import VacacionesController from './controllers/vacaciones';
AppDataSource.initialize().then(() => {
    console.log("Database initialized!")
}).catch((err) => {
    console.error("Database initialization Error", err)
});


const app: Application = express();

//set view engine use to return Html
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(HttpMiddleWare);

app.use(cors());

app.use(express.static(config.app.publicDir));

app.use(express.json()) // Parses json, multi-part (file), url-encoded
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//authenticate user and set current user data
app.use('/api',
	async (req:HttpRequest, res:HttpResponse, next) => {
		passport.authenticate('jwt', async (err, user, info) => {
			req.login(user, { session: false }, async (error) => {});
			return next();
		}
		)(req, res);
	}
);

//bind page route to the controllers
app.use('/api/components_data', ComponentsDataController);
app.use('/api/fileuploader', FileUploaderController);
app.use('/api/s3uploader', S3UploaderController);

app.use('/api/auth', AuthController);

//protect all /api endpoints
app.use('/api', async (req:HttpRequest, res:HttpResponse, next) => {
	if(req.user){
		return next();//user is authenticated
	}
	return res.unauthorized();
});
app.use('/api/account', AccountController);

app.use('/api/', HomeController);
app.use('/api/_idpermiso', IdpermisoController)
app.use('/api/antiguedad', AntiguedadController)
app.use('/api/archivos', ArchivosController)
app.use('/api/cas', CasController)
app.use('/api/categoria', CategoriaController)
app.use('/api/categoria_escala', CategoriaEscalaController)
app.use('/api/cod_soa', CodSoaController)
app.use('/api/comunicados', ComunicadosController)
app.use('/api/configuracion', ConfiguracionController)
app.use('/api/cursos', CursosController)
app.use('/api/decjurada', DecjuradaController)
app.use('/api/declaracion_pregunta_usuario', DeclaracionPreguntaUsuarioController)
app.use('/api/declaraciones', DeclaracionesController)
app.use('/api/denominacion', DenominacionController)
app.use('/api/denominacion_eo', DenominacionEoController)
app.use('/api/detboleta', DetboletaController)
app.use('/api/detescala', DetescalaController)
app.use('/api/detitem', DetitemController)
app.use('/api/entidad', EntidadController)
app.use('/api/escala', EscalaController)
app.use('/api/escala_t', EscalaTController)
app.use('/api/estructura_org', EstructuraOrgController)
app.use('/api/estudios', EstudiosController)
app.use('/api/evaluacion', EvaluacionController)
app.use('/api/eventuales', EventualesController)
app.use('/api/experiencia', ExperienciaController)
app.use('/api/fuente', FuenteController)
app.use('/api/gestion', GestionController)
app.use('/api/hojavida', HojavidaController)
app.use('/api/infouser', InfouserController)
app.use('/api/item_escala', ItemEscalaController)
app.use('/api/log_reportes', LogReportesController)
app.use('/api/medida', MedidaController)
app.use('/api/nivel_escala', NivelEscalaController)
app.use('/api/parametros_definicion', ParametrosDefinicionController)
app.use('/api/parentesco', ParentescoController)
app.use('/api/permanente', PermanenteController)
app.use('/api/permisos', PermisosController)
app.use('/api/permissions', PermissionsController)
app.use('/api/pexterno', PexternoController)
app.use('/api/planilla_presupuestaria', PlanillaPresupuestariaController)
app.use('/api/planillas', PlanillasController)
app.use('/api/planillatemporal', PlanillatemporalController)
app.use('/api/plantilla_estructura_org', PlantillaEstructuraOrgController)
app.use('/api/plarefrigerio', PlarefrigerioController)
app.use('/api/plasalario', PlasalarioController)
app.use('/api/poa', PoaController)
app.use('/api/preguntas', PreguntasController)
app.use('/api/proveedor', ProveedorController)
app.use('/api/regvacacion', RegvacacionController)
app.use('/api/roles', RolesController)
app.use('/api/salario_min', SalarioMinController)
app.use('/api/stock', StockController)
app.use('/api/tab_esc', TabEscController)
app.use('/api/unidad', UnidadController)
app.use('/api/users', UsersController)
app.use('/api/usuarios', UsuariosController)
app.use('/api/v_escalaimpr', VEscalaimprController)
app.use('/api/v_npermanente', VNpermanenteController)
app.use('/api/vacaciones', VacacionesController)

app.get('*', function (req, res) {
    res.status(404).json("Page not found");
});

let port = 8060;
//start app
app.listen(port, () => {
    console.log('Server is up and running on port: ' + port);
});