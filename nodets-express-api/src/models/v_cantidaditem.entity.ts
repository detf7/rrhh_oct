
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_cantidaditem', schema: 'public' })
export default class V_Cantidaditem extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_cantidaditem");
	}
	
	@PrimaryColumn({name: 'cantidad'})
	cantidad: number

	@Column({name: 'codescala' })
	codescala: number
	
	
	
	static listFields(): string[]{
		return [
			"cantidad", 
			"codescala"
		];
	}

	static exportListFields(): string[]{
		return [
			"cantidad", 
			"codescala"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	
	
}


