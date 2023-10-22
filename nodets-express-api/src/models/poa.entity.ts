
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'poa', schema: 'public' })
export default class Poa extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("poa");
	}
	
	@PrimaryGeneratedColumn({name: 'idpoa'})
	idpoa: number

	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idpoa", 
			"detalle", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idpoa", 
			"detalle", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idpoa", 
			"detalle", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idpoa", 
			"detalle", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idpoa", 
			"detalle", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


