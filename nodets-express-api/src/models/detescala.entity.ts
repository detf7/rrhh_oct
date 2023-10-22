
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detescala', schema: 'public' })
export default class Detescala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detescala");
	}
	
	@PrimaryGeneratedColumn({name: 'iddetesc'})
	iddetesc: number

	@Column({name: 'coditem' })
	coditem: number
	
	@Column({name: 'codescala' })
	codescala: number
	
	
	
	static listFields(): string[]{
		return [
			"iddetesc", 
			"coditem", 
			"codescala"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddetesc", 
			"coditem", 
			"codescala"
		];
	}

	static viewFields(): string[]{
		return [
			"iddetesc", 
			"coditem", 
			"codescala"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddetesc", 
			"coditem", 
			"codescala"
		];
	}

	static editFields(): string[]{
		return [
			"iddetesc", 
			"coditem", 
			"codescala"
		];
	}

	
	
	
}


