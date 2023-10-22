
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'salario_min', schema: 'public' })
export default class Salario_Min extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("salario_min");
	}
	
	@PrimaryColumn({name: 'id_salariomin'})
	id_salariomin: number

	@Column({name: 'mes' })
	mes: number
	
	@Column({name: 'importe' })
	importe: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'respaldo_leg' })
	respaldo_leg: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"id_salariomin", 
			"mes", 
			"importe", 
			"fecha", 
			"respaldo_leg", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_salariomin", 
			"mes", 
			"importe", 
			"fecha", 
			"respaldo_leg", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_salariomin", 
			"mes", 
			"importe", 
			"fecha", 
			"respaldo_leg", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_salariomin", 
			"mes", 
			"importe", 
			"fecha", 
			"respaldo_leg", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"mes", 
			"importe", 
			"fecha", 
			"respaldo_leg", 
			"id_salariomin"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"respaldo_leg iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


