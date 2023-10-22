
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'denominacion', schema: 'public' })
export default class Denominacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("denominacion");
	}
	
	@PrimaryColumn({name: 'id_denominacion'})
	id_denominacion: number

	@Column({name: 'nivel_denom' })
	nivel_denom: number
	
	@Column({name: 'desc_denominacion' })
	desc_denominacion: string
	
	@Column({name: 'haber_basico' })
	haber_basico: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'nro_items' })
	nro_items: number
	
	@Column({name: 'costo_mensual' })
	costo_mensual: number
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'fuente' })
	fuente: string
	
	
	
	static listFields(): string[]{
		return [
			"fuente", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"id_denominacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"fuente", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"id_denominacion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static editFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static vistaFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static exportVistaFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static vistainteFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	static exportVistainteFields(): string[]{
		return [
			"id_denominacion", 
			"nivel_denom", 
			"desc_denominacion", 
			"haber_basico", 
			"codgestion", 
			"nro_items", 
			"costo_mensual", 
			"estado", 
			"categoria", 
			"fuente"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"fuente iLIKE :search", 
			"desc_denominacion iLIKE :search", 
			"categoria iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


