
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'nivel_eo', schema: 'public' })
export default class Nivel_Eo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("nivel_eo");
	}
	
	@PrimaryGeneratedColumn({name: 'id_niv_eo'})
	id_niv_eo: number

	@Column({name: 'nombre_nivel' })
	nombre_nivel: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'cod_gestion' })
	cod_gestion: string
	
	
	
	static listFields(): string[]{
		return [
			"id_niv_eo", 
			"nombre_nivel", 
			"descripcion", 
			"cod_gestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_niv_eo", 
			"nombre_nivel", 
			"descripcion", 
			"cod_gestion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_niv_eo", 
			"nombre_nivel", 
			"descripcion", 
			"cod_gestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_niv_eo", 
			"nombre_nivel", 
			"descripcion", 
			"cod_gestion"
		];
	}

	static editFields(): string[]{
		return [
			"id_niv_eo", 
			"nombre_nivel", 
			"descripcion", 
			"cod_gestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_nivel iLIKE :search", 
			"descripcion iLIKE :search", 
			"cod_gestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


