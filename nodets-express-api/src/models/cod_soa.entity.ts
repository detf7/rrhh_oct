
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cod_soa', schema: 'public' })
export default class Cod_Soa extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cod_soa");
	}
	
	@PrimaryGeneratedColumn({name: 'id_soa'})
	id_soa: number

	@Column({name: 'nro_soa' })
	nro_soa: number
	
	@Column({name: 'fecha_reg' })
	fecha_reg: string
	
	@Column({name: 'nombre_soa' })
	nombre_soa: string
	
	@Column({name: 'cod_gestion_soa' })
	cod_gestion_soa: string
	
	
	
	static listFields(): string[]{
		return [
			"id_soa", 
			"nro_soa", 
			"fecha_reg", 
			"nombre_soa", 
			"cod_gestion_soa"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_soa", 
			"nro_soa", 
			"fecha_reg", 
			"nombre_soa", 
			"cod_gestion_soa"
		];
	}

	static viewFields(): string[]{
		return [
			"id_soa", 
			"nro_soa", 
			"fecha_reg", 
			"nombre_soa", 
			"cod_gestion_soa"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_soa", 
			"nro_soa", 
			"fecha_reg", 
			"nombre_soa", 
			"cod_gestion_soa"
		];
	}

	static editFields(): string[]{
		return [
			"id_soa", 
			"nro_soa", 
			"fecha_reg", 
			"nombre_soa", 
			"cod_gestion_soa"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_soa iLIKE :search", 
			"cod_gestion_soa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


