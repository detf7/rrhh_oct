
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'temp_permanente', schema: 'public' })
export default class Temp_Permanente extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("temp_permanente");
	}
	
	@PrimaryColumn({name: 'id_permanente'})
	id_permanente: number

	@Column({name: 'saldo_cas' })
	saldo_cas: number
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'id_cas' })
	id_cas: number
	
	
	
	static listFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres", 
			"id_cas"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres", 
			"id_cas"
		];
	}

	static viewFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres", 
			"id_cas"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres", 
			"id_cas"
		];
	}

	static editFields(): string[]{
		return [
			"saldo_cas", 
			"nombres", 
			"id_permanente"
		];
	}

	
	
	
}


