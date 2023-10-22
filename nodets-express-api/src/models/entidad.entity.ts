
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'entidad', schema: 'public' })
export default class Entidad extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("entidad");
	}
	
	@PrimaryGeneratedColumn({name: 'identidad'})
	identidad: number

	@Column({name: 'dependencia' })
	dependencia: number
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	
	
	static listFields(): string[]{
		return [
			"identidad", 
			"dependencia", 
			"detalle", 
			"sigla"
		];
	}

	static exportListFields(): string[]{
		return [
			"identidad", 
			"dependencia", 
			"detalle", 
			"sigla"
		];
	}

	static viewFields(): string[]{
		return [
			"identidad", 
			"dependencia", 
			"detalle", 
			"sigla"
		];
	}

	static exportViewFields(): string[]{
		return [
			"identidad", 
			"dependencia", 
			"detalle", 
			"sigla"
		];
	}

	static editFields(): string[]{
		return [
			"identidad", 
			"dependencia", 
			"detalle", 
			"sigla"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"sigla iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


