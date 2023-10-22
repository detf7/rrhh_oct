
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_escalaasignada', schema: 'public' })
export default class V_Escalaasignada extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_escalaasignada");
	}
	
	@PrimaryColumn({name: 'cantidad'})
	cantidad: number

	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"cantidad", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"cantidad", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


