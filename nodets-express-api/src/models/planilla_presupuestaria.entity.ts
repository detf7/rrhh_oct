
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
	
	@Column({name: 'denominacion_cargo' })
	denominacion_cargo: string
	
	@Column({name: 'descrip_puesto' })
	descrip_puesto: string
	
	@Column({name: 'unidad_organiz' })
	unidad_organiz: string
	
	@Column({name: 'clasificacion' })
	clasificacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@PrimaryColumn({name: 'idplanillapres'})
	idplanillapres: number

	
	
	static listFields(): string[]{
		return [
			"idplanillapres", 
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"unidad_organiz", 
			"clasificacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idplanillapres", 
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"unidad_organiz", 
			"clasificacion"
		];
	}

	static viewFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"idplanillapres"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"idplanillapres"
		];
	}

	static editFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"cantidad_items", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"idplanillapres"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"CAST(fuente AS TEXT) iLIKE :search", 
			"CAST(nivel AS TEXT) iLIKE :search", 
			"denominacion_cargo iLIKE :search", 
			"unidad_organiz iLIKE :search", 
			"clasificacion iLIKE :search", 
			"descrip_puesto iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


