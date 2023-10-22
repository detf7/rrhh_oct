
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'denominacion_eo', schema: 'public' })
export default class Denominacion_Eo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("denominacion_eo");
	}
	
	@PrimaryGeneratedColumn({name: 'id_den_eo'})
	id_den_eo: number

	@Column({name: 'fecha_reg' })
	fecha_reg: string
	
	@Column({name: 'nombre_denom' })
	nombre_denom: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'cod_gestion' })
	cod_gestion: string
	
	
	
	static listFields(): string[]{
		return [
			"id_den_eo", 
			"fecha_reg", 
			"nombre_denom", 
			"sigla", 
			"cod_gestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_den_eo", 
			"fecha_reg", 
			"nombre_denom", 
			"sigla", 
			"cod_gestion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_den_eo", 
			"fecha_reg", 
			"nombre_denom", 
			"sigla", 
			"cod_gestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_den_eo", 
			"fecha_reg", 
			"nombre_denom", 
			"sigla", 
			"cod_gestion"
		];
	}

	static editFields(): string[]{
		return [
			"id_den_eo", 
			"fecha_reg", 
			"nombre_denom", 
			"sigla", 
			"cod_gestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_denom iLIKE :search", 
			"sigla iLIKE :search", 
			"cod_gestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


