
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'eo_maestra', schema: 'public' })
export default class Eo_Maestra extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("eo_maestra");
	}
	
	@PrimaryGeneratedColumn({name: 'id_eo'})
	id_eo: number

	@Column({name: 'nro_eo' })
	nro_eo: number
	
	@Column({name: 'fecha_reg_eo' })
	fecha_reg_eo: string
	
	@Column({name: 'soa_eo' })
	soa_eo: string
	
	@Column({name: 'sigla_eo' })
	sigla_eo: string
	
	@Column({name: 'dependencia_eo' })
	dependencia_eo: string
	
	@Column({name: 'cod_gestion_eo' })
	cod_gestion_eo: string
	
	@Column({name: 'rm_eo' })
	rm_eo: string
	
	@Column({name: 'nivel_eo' })
	nivel_eo: string
	
	@Column({name: 'denominacion_eo' })
	denominacion_eo: string
	
	
	
	static listFields(): string[]{
		return [
			"id_eo", 
			"nro_eo", 
			"fecha_reg_eo", 
			"soa_eo", 
			"sigla_eo", 
			"dependencia_eo", 
			"cod_gestion_eo", 
			"rm_eo", 
			"nivel_eo", 
			"denominacion_eo"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_eo", 
			"nro_eo", 
			"fecha_reg_eo", 
			"soa_eo", 
			"sigla_eo", 
			"dependencia_eo", 
			"cod_gestion_eo", 
			"rm_eo", 
			"nivel_eo", 
			"denominacion_eo"
		];
	}

	static viewFields(): string[]{
		return [
			"id_eo", 
			"nro_eo", 
			"fecha_reg_eo", 
			"soa_eo", 
			"sigla_eo", 
			"dependencia_eo", 
			"cod_gestion_eo", 
			"rm_eo", 
			"nivel_eo", 
			"denominacion_eo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_eo", 
			"nro_eo", 
			"fecha_reg_eo", 
			"soa_eo", 
			"sigla_eo", 
			"dependencia_eo", 
			"cod_gestion_eo", 
			"rm_eo", 
			"nivel_eo", 
			"denominacion_eo"
		];
	}

	static editFields(): string[]{
		return [
			"id_eo", 
			"nro_eo", 
			"fecha_reg_eo", 
			"soa_eo", 
			"sigla_eo", 
			"dependencia_eo", 
			"cod_gestion_eo", 
			"rm_eo", 
			"nivel_eo", 
			"denominacion_eo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"soa_eo iLIKE :search", 
			"sigla_eo iLIKE :search", 
			"dependencia_eo iLIKE :search", 
			"cod_gestion_eo iLIKE :search", 
			"rm_eo iLIKE :search", 
			"nivel_eo iLIKE :search", 
			"denominacion_eo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


