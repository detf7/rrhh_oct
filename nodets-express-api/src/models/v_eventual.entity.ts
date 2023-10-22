
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_eventual', schema: 'public' })
export default class V_Eventual extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_eventual");
	}
	
	@PrimaryColumn({name: 'vigente'})
	vigente: string

	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'resultado' })
	resultado: string
	
	@Column({name: 'idunidad' })
	idunidad: number
	
	@Column({name: 'fnacimiento' })
	fnacimiento: string
	
	@Column({name: 'idescala' })
	idescala: number
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'fechabaja' })
	fechabaja: string
	
	@Column({name: 'ideventual' })
	ideventual: number
	
	@Column({name: 'oficina' })
	oficina: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'codevaluacion' })
	codevaluacion: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'fotografia' })
	fotografia: string
	
	@Column({name: 'codcontrol' })
	codcontrol: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'resolucion' })
	resolucion: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"vigente", 
			"dias", 
			"fecha", 
			"resultado", 
			"idunidad", 
			"fnacimiento", 
			"idescala", 
			"fechaini", 
			"nivel", 
			"fechafin", 
			"haberbasico", 
			"fechabaja", 
			"ideventual", 
			"oficina", 
			"financiero", 
			"denominacion", 
			"codevaluacion", 
			"estado", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"fotografia", 
			"codcontrol", 
			"tipo", 
			"cargopla", 
			"resolucion", 
			"motivo", 
			"glosa"
		];
	}

	static exportListFields(): string[]{
		return [
			"vigente", 
			"dias", 
			"fecha", 
			"resultado", 
			"idunidad", 
			"fnacimiento", 
			"idescala", 
			"fechaini", 
			"nivel", 
			"fechafin", 
			"haberbasico", 
			"fechabaja", 
			"ideventual", 
			"oficina", 
			"financiero", 
			"denominacion", 
			"codevaluacion", 
			"estado", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"fotografia", 
			"codcontrol", 
			"tipo", 
			"cargopla", 
			"resolucion", 
			"motivo", 
			"glosa"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"oficina iLIKE :search", 
			"financiero iLIKE :search", 
			"denominacion iLIKE :search", 
			"codevaluacion iLIKE :search", 
			"estado iLIKE :search", 
			"idcarnet iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"fotografia iLIKE :search", 
			"codcontrol iLIKE :search", 
			"tipo iLIKE :search", 
			"cargopla iLIKE :search", 
			"resolucion iLIKE :search", 
			"motivo iLIKE :search", 
			"glosa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


