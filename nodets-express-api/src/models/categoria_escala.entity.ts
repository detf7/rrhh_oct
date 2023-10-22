
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'categoria_escala', schema: 'public' })
export default class Categoria_Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("categoria_escala");
	}
	
	@PrimaryColumn({name: 'id_catescala'})
	id_catescala: number

	@Column({name: 'desc_catescala' })
	desc_catescala: string
	
	@Column({name: 'id_fk_nivel' })
	id_fk_nivel: number
	
	
	
	static listFields(): string[]{
		return [
			"id_catescala", 
			"desc_catescala", 
			"id_fk_nivel"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_catescala", 
			"desc_catescala", 
			"id_fk_nivel"
		];
	}

	static viewFields(): string[]{
		return [
			"id_catescala", 
			"desc_catescala", 
			"id_fk_nivel"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_catescala", 
			"desc_catescala", 
			"id_fk_nivel"
		];
	}

	static editFields(): string[]{
		return [
			"id_catescala", 
			"desc_catescala", 
			"id_fk_nivel"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"desc_catescala iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


