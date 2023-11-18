
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'nivel_escala', schema: 'public' })
export default class Nivel_Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("nivel_escala");
	}
	
	@PrimaryColumn({name: 'id_nivel_esc'})
	id_nivel_esc: number

	@Column({name: 'valor_nivel' })
	valor_nivel: number
	
	@Column({name: 'id_fk_denom' })
	id_fk_denom: number
	
	@Column({name: 'descripcion_niv' })
	descripcion_niv: string
	
	
	
	static listFields(): string[]{
		return [
			"id_nivel_esc", 
			"valor_nivel", 
			"descripcion_niv"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_nivel_esc", 
			"valor_nivel", 
			"descripcion_niv"
		];
	}

	static viewFields(): string[]{
		return [
			"id_nivel_esc", 
			"valor_nivel", 
			"id_fk_denom", 
			"descripcion_niv"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_nivel_esc", 
			"valor_nivel", 
			"id_fk_denom", 
			"descripcion_niv"
		];
	}

	static editFields(): string[]{
		return [
			"id_nivel_esc", 
			"valor_nivel"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripcion_niv iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


