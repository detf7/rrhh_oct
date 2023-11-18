
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'genero', schema: 'public' })
export default class Genero extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("genero");
	}
	
	@PrimaryColumn({name: 'idgenero'})
	idgenero: number

	@Column({name: 'nomgenero' })
	nomgenero: string
	
	@Column({name: 'abrevgenero' })
	abrevgenero: string
	
	
	
	static listFields(): string[]{
		return [
			"idgenero", 
			"nomgenero", 
			"abrevgenero"
		];
	}

	static exportListFields(): string[]{
		return [
			"idgenero", 
			"nomgenero", 
			"abrevgenero"
		];
	}

	static viewFields(): string[]{
		return [
			"idgenero", 
			"nomgenero", 
			"abrevgenero"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idgenero", 
			"nomgenero", 
			"abrevgenero"
		];
	}

	static editFields(): string[]{
		return [
			"idgenero", 
			"nomgenero", 
			"abrevgenero"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nomgenero iLIKE :search", 
			"abrevgenero iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


