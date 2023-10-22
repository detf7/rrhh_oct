
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_cargopersonal', schema: 'public' })
export default class V_Cargopersonal extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_cargopersonal");
	}
	
	@PrimaryColumn({name: 'fechabaja'})
	fechabaja: string

	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"fechabaja", 
			"codunidad", 
			"fechaini", 
			"fechafin", 
			"apmaterno", 
			"tipo", 
			"unidad", 
			"idcarnet", 
			"cargopla", 
			"denominacion", 
			"estado", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"fechabaja", 
			"codunidad", 
			"fechaini", 
			"fechafin", 
			"apmaterno", 
			"tipo", 
			"unidad", 
			"idcarnet", 
			"cargopla", 
			"denominacion", 
			"estado", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"apmaterno iLIKE :search", 
			"tipo iLIKE :search", 
			"unidad iLIKE :search", 
			"idcarnet iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"estado iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


