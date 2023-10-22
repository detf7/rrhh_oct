
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_escala', schema: 'public' })
export default class V_Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_escala");
	}
	
	@PrimaryColumn({name: 'idescala'})
	idescala: number

	@Column({name: 'mgeneral' })
	mgeneral: number
	
	@Column({name: 'aespecifica' })
	aespecifica: number
	
	@Column({name: 'mespecifica' })
	mespecifica: number
	
	@Column({name: 'ageneral' })
	ageneral: number
	
	@Column({name: 'academico' })
	academico: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idescala", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"ageneral", 
			"academico", 
			"detalle", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idescala", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"ageneral", 
			"academico", 
			"detalle", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"academico iLIKE :search", 
			"detalle iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


