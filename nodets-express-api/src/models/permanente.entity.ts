
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'permanente', schema: 'public' })
export default class Permanente extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("permanente");
	}
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'fechabaja' })
	fechabaja: string
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'pagovac' })
	pagovac: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'coddetesc' })
	coddetesc: number
	
	@Column({name: 'codpermanente' })
	codpermanente: number
	
	@PrimaryGeneratedColumn({name: 'idpermanente'})
	idpermanente: number

	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'memorandum' })
	memorandum: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'codevaluacion' })
	codevaluacion: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	
	
	static listFields(): string[]{
		return [
			"permanente.idpermanente AS idpermanente", 
			"usuarios.appaterno AS usuarios_appaterno", 
			"usuarios.apmaterno AS usuarios_apmaterno", 
			"usuarios.nombres AS usuarios_nombres", 
			"usuarios.idcarnet AS usuarios_idcarnet", 
			"usuarios.expedido AS usuarios_expedido", 
			"permanente.fechaini AS fechaini", 
			"permanente.fechafin AS fechafin", 
			"permanente.fechabaja AS fechabaja", 
			"permanente.vigente AS vigente", 
			"permanente.fecha AS fecha", 
			"permanente.pagovac AS pagovac", 
			"permanente.codunidad AS codunidad", 
			"permanente.coddetesc AS coddetesc", 
			"permanente.codpermanente AS codpermanente", 
			"permanente.tipo AS tipo", 
			"permanente.memorandum AS memorandum", 
			"permanente.motivo AS motivo", 
			"permanente.codevaluacion AS codevaluacion", 
			"permanente.glosa AS glosa", 
			"permanente.codusuario AS codusuario", 
			"permanente.cargopla AS cargopla"
		];
	}

	static exportListFields(): string[]{
		return [
			"permanente.idpermanente AS idpermanente", 
			"usuarios.appaterno AS usuarios_appaterno", 
			"usuarios.apmaterno AS usuarios_apmaterno", 
			"usuarios.nombres AS usuarios_nombres", 
			"usuarios.idcarnet AS usuarios_idcarnet", 
			"usuarios.expedido AS usuarios_expedido", 
			"permanente.fechaini AS fechaini", 
			"permanente.fechafin AS fechafin", 
			"permanente.fechabaja AS fechabaja", 
			"permanente.vigente AS vigente", 
			"permanente.fecha AS fecha", 
			"permanente.pagovac AS pagovac", 
			"permanente.codunidad AS codunidad", 
			"permanente.coddetesc AS coddetesc", 
			"permanente.codpermanente AS codpermanente", 
			"permanente.tipo AS tipo", 
			"permanente.memorandum AS memorandum", 
			"permanente.motivo AS motivo", 
			"permanente.codevaluacion AS codevaluacion", 
			"permanente.glosa AS glosa", 
			"permanente.codusuario AS codusuario", 
			"permanente.cargopla AS cargopla"
		];
	}

	static viewFields(): string[]{
		return [
			"permanente.fechaini AS fechaini", 
			"permanente.fechafin AS fechafin", 
			"permanente.fechabaja AS fechabaja", 
			"permanente.vigente AS vigente", 
			"permanente.fecha AS fecha", 
			"permanente.pagovac AS pagovac", 
			"permanente.codunidad AS codunidad", 
			"permanente.coddetesc AS coddetesc", 
			"permanente.codpermanente AS codpermanente", 
			"permanente.idpermanente AS idpermanente", 
			"permanente.tipo AS tipo", 
			"permanente.memorandum AS memorandum", 
			"permanente.motivo AS motivo", 
			"permanente.codevaluacion AS codevaluacion", 
			"permanente.glosa AS glosa", 
			"permanente.codusuario AS codusuario", 
			"permanente.cargopla AS cargopla", 
			"usuarios.user_role_id AS usuarios_user_role_id", 
			"usuarios.permisos AS usuarios_permisos", 
			"usuarios.editar AS usuarios_editar", 
			"usuarios.jsonunidad AS usuarios_jsonunidad", 
			"usuarios.apmaterno AS usuarios_apmaterno", 
			"usuarios.usuario AS usuarios_usuario", 
			"usuarios.clave AS usuarios_clave", 
			"usuarios.foto AS usuarios_foto", 
			"usuarios.theme AS usuarios_theme", 
			"usuarios.estado AS usuarios_estado", 
			"usuarios.account_status AS usuarios_account_status", 
			"usuarios.idcarnet AS usuarios_idcarnet", 
			"usuarios.expedido AS usuarios_expedido", 
			"usuarios.nombres AS usuarios_nombres", 
			"usuarios.appaterno AS usuarios_appaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			"permanente.fechaini AS fechaini", 
			"permanente.fechafin AS fechafin", 
			"permanente.fechabaja AS fechabaja", 
			"permanente.vigente AS vigente", 
			"permanente.fecha AS fecha", 
			"permanente.pagovac AS pagovac", 
			"permanente.codunidad AS codunidad", 
			"permanente.coddetesc AS coddetesc", 
			"permanente.codpermanente AS codpermanente", 
			"permanente.idpermanente AS idpermanente", 
			"permanente.tipo AS tipo", 
			"permanente.memorandum AS memorandum", 
			"permanente.motivo AS motivo", 
			"permanente.codevaluacion AS codevaluacion", 
			"permanente.glosa AS glosa", 
			"permanente.codusuario AS codusuario", 
			"permanente.cargopla AS cargopla", 
			"usuarios.user_role_id AS usuarios_user_role_id", 
			"usuarios.permisos AS usuarios_permisos", 
			"usuarios.editar AS usuarios_editar", 
			"usuarios.jsonunidad AS usuarios_jsonunidad", 
			"usuarios.apmaterno AS usuarios_apmaterno", 
			"usuarios.usuario AS usuarios_usuario", 
			"usuarios.clave AS usuarios_clave", 
			"usuarios.foto AS usuarios_foto", 
			"usuarios.theme AS usuarios_theme", 
			"usuarios.estado AS usuarios_estado", 
			"usuarios.account_status AS usuarios_account_status", 
			"usuarios.idcarnet AS usuarios_idcarnet", 
			"usuarios.expedido AS usuarios_expedido", 
			"usuarios.nombres AS usuarios_nombres", 
			"usuarios.appaterno AS usuarios_appaterno"
		];
	}

	static editFields(): string[]{
		return [
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"pagovac", 
			"codunidad", 
			"coddetesc", 
			"codpermanente", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"codevaluacion", 
			"glosa", 
			"codusuario", 
			"cargopla", 
			"idpermanente"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"Usuarios.appaterno iLIKE :search", 
			"Usuarios.apmaterno iLIKE :search", 
			"Usuarios.nombres iLIKE :search", 
			"Usuarios.idcarnet iLIKE :search", 
			"Usuarios.expedido iLIKE :search", 
			"Permanente.tipo iLIKE :search", 
			"Permanente.memorandum iLIKE :search", 
			"Permanente.motivo iLIKE :search", 
			"Permanente.codevaluacion iLIKE :search", 
			"Permanente.glosa iLIKE :search", 
			"Permanente.codusuario iLIKE :search", 
			"Permanente.cargopla iLIKE :search", 
			"Usuarios.usuario iLIKE :search", 
			"Usuarios.clave iLIKE :search", 
			"Usuarios.foto iLIKE :search", 
			"Usuarios.theme iLIKE :search", 
			"Usuarios.estado iLIKE :search", 
			"Usuarios.account_status iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


