
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'permanentes', schema: 'public' })
export default class Permanentes extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("permanentes");
	}
	
	@Column({name: 'pagovac' })
	pagovac: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'coddetesc' })
	coddetesc: number
	
	@Column({name: 'fechabaja' })
	fechabaja: string
	
	@Column({name: 'codpermanente' })
	codpermanente: number
	
	@PrimaryGeneratedColumn({name: 'idpermanente'})
	idpermanente: number

	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'memorandum' })
	memorandum: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'codevaluacion' })
	codevaluacion: string
	
	@Column({name: 'id_cas' })
	id_cas: number
	
	
	
	static listFields(): string[]{
		return [
			"pagovac", 
			"codunidad", 
			"fechafin", 
			"coddetesc", 
			"fechabaja", 
			"codpermanente", 
			"idpermanente", 
			"vigente", 
			"fechaini", 
			"fecha", 
			"cargopla", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"codusuario", 
			"codevaluacion", 
			"id_cas"
		];
	}

	static exportListFields(): string[]{
		return [
			"pagovac", 
			"codunidad", 
			"fechafin", 
			"coddetesc", 
			"fechabaja", 
			"codpermanente", 
			"idpermanente", 
			"vigente", 
			"fechaini", 
			"fecha", 
			"cargopla", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"codusuario", 
			"codevaluacion", 
			"id_cas"
		];
	}

	static viewFields(): string[]{
		return [
			"pagovac", 
			"codunidad", 
			"fechafin", 
			"coddetesc", 
			"fechabaja", 
			"codpermanente", 
			"idpermanente", 
			"vigente", 
			"fechaini", 
			"fecha", 
			"cargopla", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"codusuario", 
			"codevaluacion", 
			"id_cas"
		];
	}

	static exportViewFields(): string[]{
		return [
			"pagovac", 
			"codunidad", 
			"fechafin", 
			"coddetesc", 
			"fechabaja", 
			"codpermanente", 
			"idpermanente", 
			"vigente", 
			"fechaini", 
			"fecha", 
			"cargopla", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"codusuario", 
			"codevaluacion", 
			"id_cas"
		];
	}

	static editFields(): string[]{
		return [
			"pagovac", 
			"codunidad", 
			"fechafin", 
			"coddetesc", 
			"fechabaja", 
			"codpermanente", 
			"vigente", 
			"fechaini", 
			"fecha", 
			"cargopla", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"codusuario", 
			"codevaluacion", 
			"id_cas", 
			"idpermanente"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"cargopla iLIKE :search", 
			"tipo iLIKE :search", 
			"memorandum iLIKE :search", 
			"motivo iLIKE :search", 
			"glosa iLIKE :search", 
			"codusuario iLIKE :search", 
			"codevaluacion iLIKE :search", 
			"CAST(id_cas AS TEXT) iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


