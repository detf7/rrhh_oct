
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'salario_minimo', schema: 'public' })
export default class Salario_Minimo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("salario_minimo");
	}
	
	@PrimaryColumn({name: 'id_salarioMin'})
	id_salariomin: number

	@Column({name: 'Gestion' })
	gestion: number
	
	@Column({name: 'Mes' })
	mes: number
	
	@Column({name: 'Importe' })
	importe: string
	
	@Column({name: 'Fecha' })
	fecha: string
	
	@Column({name: 'respaldo_leg' })
	respaldo_leg: string
	
	
	
	static listFields(): string[]{
		return [
			"Gestion AS gestion", 
			"Mes AS mes", 
			"Importe AS importe", 
			"Fecha AS fecha", 
			"respaldo_leg", 
			"id_salarioMin AS id_salariomin"
		];
	}

	static exportListFields(): string[]{
		return [
			"Gestion AS gestion", 
			"Mes AS mes", 
			"Importe AS importe", 
			"Fecha AS fecha", 
			"respaldo_leg", 
			"id_salarioMin AS id_salariomin"
		];
	}

	static viewFields(): string[]{
		return [
			"id_salarioMin AS id_salariomin", 
			"Gestion AS gestion", 
			"Mes AS mes", 
			"Importe AS importe", 
			"Fecha AS fecha", 
			"respaldo_leg"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_salarioMin AS id_salariomin", 
			"Gestion AS gestion", 
			"Mes AS mes", 
			"Importe AS importe", 
			"Fecha AS fecha", 
			"respaldo_leg"
		];
	}

	static editFields(): string[]{
		return [
			"id_salarioMin AS id_salariomin", 
			"Gestion AS gestion", 
			"Mes AS mes", 
			"Importe AS importe", 
			"Fecha AS fecha", 
			"respaldo_leg"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"respaldo_leg iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


