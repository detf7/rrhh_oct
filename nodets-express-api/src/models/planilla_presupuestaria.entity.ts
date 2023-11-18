
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'planilla_presupuestaria', schema: 'public' })
export default class Planilla_Presupuestaria extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("planilla_presupuestaria");
	}
	
	@Column({name: 'fuente' })
	fuente: number
	
	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'cantidad_items' })
	cantidad_items: number
	
	@Column({name: 'haber_basico' })
	haber_basico: number
	
	@PrimaryColumn({name: 'idplanillapres'})
	idplanillapres: number

	@Column({name: 'descrip_puesto' })
	descrip_puesto: string
	
	@Column({name: 'unidad_organiz' })
	unidad_organiz: string
	
	@Column({name: 'clasificacion' })
	clasificacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'denominacion_cargo' })
	denominacion_cargo: string
	
	
	
	static listFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo"
		];
	}

	static exportListFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo"
		];
	}

	static viewFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo"
		];
	}

	static editFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"idplanillapres", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo"
		];
	}

	static editarFields(): string[]{
		return [
			"idplanillapres", 
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descrip_puesto iLIKE :search", 
			"unidad_organiz iLIKE :search", 
			"clasificacion iLIKE :search", 
			"codgestion iLIKE :search", 
			"denominacion_cargo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


