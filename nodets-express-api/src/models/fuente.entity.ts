
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'fuente', schema: 'public' })
export default class Fuente extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("fuente");
	}
	
	@PrimaryColumn({name: 'idfuente'})
	idfuente: number

	@Column({name: 'fuente_desc' })
	fuente_desc: string
	
	@Column({name: 'fuente_resumen' })
	fuente_resumen: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idfuente", 
			"codgestion", 
			"fuente_desc", 
			"fuente_resumen"
		];
	}

	static exportListFields(): string[]{
		return [
			"idfuente", 
			"codgestion", 
			"fuente_desc", 
			"fuente_resumen"
		];
	}

	static viewFields(): string[]{
		return [
			"idfuente", 
			"fuente_desc", 
			"fuente_resumen", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idfuente", 
			"fuente_desc", 
			"fuente_resumen", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"fuente_desc", 
			"fuente_resumen", 
			"idfuente"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codgestion iLIKE :search", 
			"fuente_desc iLIKE :search", 
			"fuente_resumen iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


