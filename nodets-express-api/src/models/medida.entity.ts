
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'medida', schema: 'public' })
export default class Medida extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("medida");
	}
	
	@PrimaryGeneratedColumn({name: 'idmedida'})
	idmedida: number

	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"idmedida", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"idmedida", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"idmedida", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idmedida", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"idmedida", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


