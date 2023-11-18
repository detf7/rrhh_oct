
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plantilla_uo', schema: 'public' })
export default class Plantilla_Uo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plantilla_uo");
	}
	
	@PrimaryColumn({name: 'id_puo'})
	id_puo: number

	@Column({name: 'codigo_soa' })
	codigo_soa: number
	
	@Column({name: 'clasificacion_uo' })
	clasificacion_uo: string
	
	@Column({name: 'nombre_uo' })
	nombre_uo: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'dependencia_uo' })
	dependencia_uo: string
	
	@Column({name: 'prefijo_soa' })
	prefijo_soa: string
	
	@Column({name: 'nivel_uo' })
	nivel_uo: string
	
	
	
	static listFields(): string[]{
		return [
			"id_puo", 
			"codigo_soa", 
			"clasificacion_uo", 
			"nombre_uo", 
			"codgestion", 
			"dependencia_uo", 
			"prefijo_soa", 
			"nivel_uo"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_puo", 
			"codigo_soa", 
			"clasificacion_uo", 
			"nombre_uo", 
			"codgestion", 
			"dependencia_uo", 
			"prefijo_soa", 
			"nivel_uo"
		];
	}

	static viewFields(): string[]{
		return [
			"id_puo", 
			"codigo_soa", 
			"clasificacion_uo", 
			"nombre_uo", 
			"codgestion", 
			"dependencia_uo", 
			"prefijo_soa", 
			"nivel_uo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_puo", 
			"codigo_soa", 
			"clasificacion_uo", 
			"nombre_uo", 
			"codgestion", 
			"dependencia_uo", 
			"prefijo_soa", 
			"nivel_uo"
		];
	}

	static editFields(): string[]{
		return [
			"id_puo", 
			"codigo_soa", 
			"clasificacion_uo", 
			"nombre_uo", 
			"codgestion", 
			"dependencia_uo", 
			"prefijo_soa", 
			"nivel_uo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombre_uo iLIKE :search", 
			"codgestion iLIKE :search", 
			"dependencia_uo iLIKE :search", 
			"prefijo_soa iLIKE :search", 
			"nivel_uo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


