
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_permanente2', schema: 'public' })
export default class V_Permanente2 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_permanente2");
	}
	
	@PrimaryColumn({name: 'resultado'})
	resultado: string

	@Column({name: 'iditem' })
	iditem: number
	
	@Column({name: 'item' })
	item: number
	
	@Column({name: 'fnacimiento' })
	fnacimiento: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'pagovac' })
	pagovac: string
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'fechabaja' })
	fechabaja: string
	
	@Column({name: 'iddetesc' })
	iddetesc: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'idpermanente' })
	idpermanente: number
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'codevaluacion' })
	codevaluacion: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'nombre_completo' })
	nombre_completo: string
	
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
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'memorandum' })
	memorandum: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	
	
	static listFields(): string[]{
		return [
			"resultado", 
			"iditem", 
			"item", 
			"fnacimiento", 
			"codunidad", 
			"pagovac", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"haberbasico", 
			"fechabaja", 
			"iddetesc", 
			"fecha", 
			"idpermanente", 
			"denominacion", 
			"codevaluacion", 
			"estado", 
			"nombre_completo", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"fotografia", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"unidad", 
			"cargopla", 
			"financiero"
		];
	}

	static exportListFields(): string[]{
		return [
			"resultado", 
			"iditem", 
			"item", 
			"fnacimiento", 
			"codunidad", 
			"pagovac", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"haberbasico", 
			"fechabaja", 
			"iddetesc", 
			"fecha", 
			"idpermanente", 
			"denominacion", 
			"codevaluacion", 
			"estado", 
			"nombre_completo", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"fotografia", 
			"tipo", 
			"memorandum", 
			"motivo", 
			"glosa", 
			"unidad", 
			"cargopla", 
			"financiero"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"denominacion iLIKE :search", 
			"codevaluacion iLIKE :search", 
			"estado iLIKE :search", 
			"nombre_completo iLIKE :search", 
			"idcarnet iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"fotografia iLIKE :search", 
			"tipo iLIKE :search", 
			"memorandum iLIKE :search", 
			"motivo iLIKE :search", 
			"glosa iLIKE :search", 
			"unidad iLIKE :search", 
			"cargopla iLIKE :search", 
			"financiero iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


