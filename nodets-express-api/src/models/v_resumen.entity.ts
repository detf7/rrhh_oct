
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_resumen', schema: 'public' })
export default class V_Resumen extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_resumen");
	}
	
	@PrimaryColumn({name: 'fnacimiento'})
	fnacimiento: string

	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'mes' })
	mes: number
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'dia' })
	dia: number
	
	@Column({name: 'literal' })
	literal: string
	
	@Column({name: 'fotografia' })
	fotografia: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"fnacimiento", 
			"codunidad", 
			"mes", 
			"fechaini", 
			"dia", 
			"literal", 
			"fotografia", 
			"tipo", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"idcarnet", 
			"estado", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"fnacimiento", 
			"codunidad", 
			"mes", 
			"fechaini", 
			"dia", 
			"literal", 
			"fotografia", 
			"tipo", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"idcarnet", 
			"estado", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"literal iLIKE :search", 
			"fotografia iLIKE :search", 
			"tipo iLIKE :search", 
			"unidad iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"idcarnet iLIKE :search", 
			"estado iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


