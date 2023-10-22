
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_unidadorg', schema: 'public' })
export default class V_Unidadorg extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_unidadorg");
	}
	
	@PrimaryColumn({name: 'idunidad'})
	idunidad: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'dependencia' })
	dependencia: number
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'codentidad' })
	codentidad: number
	
	@Column({name: 'unidaddep2' })
	unidaddep2: string
	
	@Column({name: 'entidaddep' })
	entidaddep: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'soa' })
	soa: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'unidaddep1' })
	unidaddep1: string
	
	
	
	static listFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codalmacen", 
			"codentidad", 
			"unidaddep2", 
			"entidaddep", 
			"detalle", 
			"soa", 
			"sigla", 
			"unidaddep1"
		];
	}

	static exportListFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codalmacen", 
			"codentidad", 
			"unidaddep2", 
			"entidaddep", 
			"detalle", 
			"soa", 
			"sigla", 
			"unidaddep1"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"unidaddep2 iLIKE :search", 
			"entidaddep iLIKE :search", 
			"detalle iLIKE :search", 
			"soa iLIKE :search", 
			"sigla iLIKE :search", 
			"unidaddep1 iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


