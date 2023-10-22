
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: '_idpermiso', schema: 'public' })
export default class _Idpermiso extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("_idpermiso");
	}
	
	@PrimaryColumn({name: 'codboleta'})
	codboleta: string

	
	
	static listFields(): string[]{
		return [
			"codboleta"
		];
	}

	static exportListFields(): string[]{
		return [
			"codboleta"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codboleta iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


