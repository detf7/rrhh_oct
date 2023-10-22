
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'item_escala', schema: 'public' })
export default class Item_Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("item_escala");
	}
	
	@Column({name: 'id_item' })
	id_item: number
	
	@Column({name: 'h_b_item' })
	h_b_item: number
	
	@PrimaryColumn({name: 'id_item_denom'})
	id_item_denom: number

	@Column({name: 'nro_items' })
	nro_items: number
	
	@Column({name: 'descripcion_item' })
	descripcion_item: string
	
	
	
	static listFields(): string[]{
		return [
			"id_item", 
			"h_b_item", 
			"id_item_denom", 
			"nro_items", 
			"descripcion_item"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_item", 
			"h_b_item", 
			"id_item_denom", 
			"nro_items", 
			"descripcion_item"
		];
	}

	static viewFields(): string[]{
		return [
			"id_item", 
			"h_b_item", 
			"id_item_denom", 
			"nro_items", 
			"descripcion_item"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_item", 
			"h_b_item", 
			"id_item_denom", 
			"nro_items", 
			"descripcion_item"
		];
	}

	static editFields(): string[]{
		return [
			"id_item", 
			"h_b_item", 
			"id_item_denom", 
			"nro_items", 
			"descripcion_item"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripcion_item iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


