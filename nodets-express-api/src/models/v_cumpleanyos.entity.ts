
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_cumpleanyos', schema: 'public' })
export default class V_Cumpleanyos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_cumpleanyos");
	}
	
	@PrimaryColumn({name: 'idcarnet'})
	idcarnet: string

	@Column({name: 'cargopla' })
	cargopla: string
	
	
	
	static listFields(): string[]{
		return [
			"idcarnet", 
			"cargopla"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcarnet", 
			"cargopla"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idcarnet iLIKE :search", 
			"cargopla iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


