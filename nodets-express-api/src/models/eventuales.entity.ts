
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'eventuales', schema: 'public' })
export default class Eventuales extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("eventuales");
	}
	
	@PrimaryGeneratedColumn({name: 'ideventual'})
	ideventual: number

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
	
	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'codescala' })
	codescala: number
	
	@Column({name: 'codcontrol' })
	codcontrol: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'codevaluacion' })
	codevaluacion: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'resolucion' })
	resolucion: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"ideventual", 
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"dias", 
			"codunidad", 
			"codescala", 
			"codcontrol", 
			"glosa", 
			"codevaluacion", 
			"cargopla", 
			"tipo", 
			"resolucion", 
			"motivo", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"ideventual", 
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"dias", 
			"codunidad", 
			"codescala", 
			"codcontrol", 
			"glosa", 
			"codevaluacion", 
			"cargopla", 
			"tipo", 
			"resolucion", 
			"motivo", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"ideventual", 
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"dias", 
			"codunidad", 
			"codescala", 
			"codcontrol", 
			"glosa", 
			"codevaluacion", 
			"cargopla", 
			"tipo", 
			"resolucion", 
			"motivo", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"ideventual", 
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"dias", 
			"codunidad", 
			"codescala", 
			"codcontrol", 
			"glosa", 
			"codevaluacion", 
			"cargopla", 
			"tipo", 
			"resolucion", 
			"motivo", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"ideventual", 
			"fechaini", 
			"fechafin", 
			"fechabaja", 
			"vigente", 
			"fecha", 
			"dias", 
			"codunidad", 
			"codescala", 
			"codcontrol", 
			"glosa", 
			"codevaluacion", 
			"cargopla", 
			"tipo", 
			"resolucion", 
			"motivo", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codcontrol iLIKE :search", 
			"glosa iLIKE :search", 
			"codevaluacion iLIKE :search", 
			"cargopla iLIKE :search", 
			"tipo iLIKE :search", 
			"resolucion iLIKE :search", 
			"motivo iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


