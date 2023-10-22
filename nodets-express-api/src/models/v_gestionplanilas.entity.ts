
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_gestionplanilas', schema: 'public' })
export default class V_Gestionplanilas extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_gestionplanilas");
	}
	
	@PrimaryColumn({name: 'habilitado'})
	habilitado: string

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'idgestion' })
	idgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"habilitado", 
			"cantidad", 
			"idgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"habilitado", 
			"cantidad", 
			"idgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


