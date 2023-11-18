
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'estadocivil', schema: 'public' })
export default class Estadocivil extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("estadocivil");
	}
	
	@PrimaryColumn({name: 'idestcivil'})
	idestcivil: number

	@Column({name: 'nombrestciv' })
	nombrestciv: string
	
	@Column({name: 'abrevciv' })
	abrevciv: string
	
	
	
	static listFields(): string[]{
		return [
			"idestcivil", 
			"nombrestciv", 
			"abrevciv"
		];
	}

	static exportListFields(): string[]{
		return [
			"idestcivil", 
			"nombrestciv", 
			"abrevciv"
		];
	}

	static viewFields(): string[]{
		return [
			"idestcivil", 
			"nombrestciv", 
			"abrevciv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idestcivil", 
			"nombrestciv", 
			"abrevciv"
		];
	}

	static editFields(): string[]{
		return [
			"idestcivil", 
			"nombrestciv", 
			"abrevciv"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombrestciv iLIKE :search", 
			"abrevciv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


