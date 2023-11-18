
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'maxid', schema: 'public' })
export default class Maxid extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("maxid");
	}
	
	@PrimaryColumn({name: 'max'})
	max: number

	
	
	static listFields(): string[]{
		return [
			"max"
		];
	}

	static exportListFields(): string[]{
		return [
			"max"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	
	
}


