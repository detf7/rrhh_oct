
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
	
	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'numero_item' })
	numero_item: number
	
	@Column({name: 'vayx' })
	vayx: number
	
	
	
	static listFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static exportListFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static viewFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"idplanillapres"
		];
	}

	static editFields(): string[]{
		return [
			"fuente", 
			"haber_basico", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"denominacion_cargo", 
			"nivel", 
			"numero_item", 
			"vayx", 
			"idplanillapres"
		];
	}

	static editarFields(): string[]{
		return [
			"fuente", 
			"nivel", 
			"numero_item", 
			"haber_basico", 
			"denominacion_cargo", 
			"descrip_puesto", 
			"unidad_organiz", 
			"clasificacion", 
			"codgestion", 
			"idplanillapres"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descrip_puesto iLIKE :search", 
			"unidad_organiz iLIKE :search", 
			"clasificacion iLIKE :search", 
			"denominacion_cargo iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


