
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_unidadboleta', schema: 'public' })
export default class V_Unidadboleta extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_unidadboleta");
	}
	
	@PrimaryColumn({name: 'codunidad'})
	codunidad: number

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
	
	
	
	static listFields(): string[]{
		return [
			"codunidad", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"tipo", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"idcarnet", 
			"estado"
		];
	}

	static exportListFields(): string[]{
		return [
			"codunidad", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"tipo", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"idcarnet", 
			"estado"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"tipo iLIKE :search", 
			"unidad iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"idcarnet iLIKE :search", 
			"estado iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


