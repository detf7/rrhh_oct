
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'tab_esc', schema: 'public' })
export default class Tab_Esc extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("tab_esc");
	}
	
	@PrimaryColumn({name: 'id_t_e'})
	id_t_e: number

	@Column({name: 'nivel_te' })
	nivel_te: number
	
	@Column({name: 'nro_item_te' })
	nro_item_te: number
	
	@Column({name: 'haber_b_te' })
	haber_b_te: number
	
	@Column({name: 'categoria_te' })
	categoria_te: string
	
	@Column({name: 'denom_te' })
	denom_te: string
	
	
	
	static listFields(): string[]{
		return [
			"id_t_e", 
			"nivel_te", 
			"nro_item_te", 
			"haber_b_te", 
			"categoria_te", 
			"denom_te"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_t_e", 
			"nivel_te", 
			"nro_item_te", 
			"haber_b_te", 
			"categoria_te", 
			"denom_te"
		];
	}

	static viewFields(): string[]{
		return [
			"id_t_e", 
			"nivel_te", 
			"nro_item_te", 
			"haber_b_te", 
			"categoria_te", 
			"denom_te"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_t_e", 
			"nivel_te", 
			"nro_item_te", 
			"haber_b_te", 
			"categoria_te", 
			"denom_te"
		];
	}

	static editFields(): string[]{
		return [
			"id_t_e", 
			"nivel_te", 
			"nro_item_te", 
			"haber_b_te", 
			"categoria_te", 
			"denom_te"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"categoria_te iLIKE :search", 
			"denom_te iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


