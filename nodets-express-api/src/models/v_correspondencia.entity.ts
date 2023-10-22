
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_correspondencia', schema: 'public' })
export default class V_Correspondencia extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_correspondencia");
	}
	
	@PrimaryColumn({name: 'vigente'})
	vigente: string

	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'unidaddep1' })
	unidaddep1: string
	
	@Column({name: 'unidaddep2' })
	unidaddep2: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'entidaddep' })
	entidaddep: string
	
	
	
	static listFields(): string[]{
		return [
			"vigente", 
			"tipo", 
			"cargopla", 
			"denominacion", 
			"unidad", 
			"unidaddep1", 
			"unidaddep2", 
			"idcarnet", 
			"entidaddep"
		];
	}

	static exportListFields(): string[]{
		return [
			"vigente", 
			"tipo", 
			"cargopla", 
			"denominacion", 
			"unidad", 
			"unidaddep1", 
			"unidaddep2", 
			"idcarnet", 
			"entidaddep"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"tipo iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"unidad iLIKE :search", 
			"unidaddep1 iLIKE :search", 
			"unidaddep2 iLIKE :search", 
			"idcarnet iLIKE :search", 
			"entidaddep iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


