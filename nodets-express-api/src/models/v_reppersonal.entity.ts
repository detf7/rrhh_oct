
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_reppersonal', schema: 'public' })
export default class V_Reppersonal extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_reppersonal");
	}
	
	@PrimaryColumn({name: 'resultado'})
	resultado: string

	@Column({name: 'item' })
	item: number
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'idunidad' })
	idunidad: number
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'oficina' })
	oficina: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'memores' })
	memores: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	
	
	static listFields(): string[]{
		return [
			"resultado", 
			"item", 
			"fechaini", 
			"vigente", 
			"fechafin", 
			"haberbasico", 
			"fecha", 
			"idunidad", 
			"codalmacen", 
			"cargopla", 
			"financiero", 
			"denominacion", 
			"oficina", 
			"glosa", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"tipo", 
			"memores", 
			"motivo", 
			"idcarnet"
		];
	}

	static exportListFields(): string[]{
		return [
			"resultado", 
			"item", 
			"fechaini", 
			"vigente", 
			"fechafin", 
			"haberbasico", 
			"fecha", 
			"idunidad", 
			"codalmacen", 
			"cargopla", 
			"financiero", 
			"denominacion", 
			"oficina", 
			"glosa", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"tipo", 
			"memores", 
			"motivo", 
			"idcarnet"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"cargopla iLIKE :search", 
			"financiero iLIKE :search", 
			"denominacion iLIKE :search", 
			"oficina iLIKE :search", 
			"glosa iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"tipo iLIKE :search", 
			"memores iLIKE :search", 
			"motivo iLIKE :search", 
			"idcarnet iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


