
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'temp_permanente1', schema: 'public' })
export default class Temp_Permanente1 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("temp_permanente1");
	}
	
	@PrimaryColumn({name: 'id_permanente'})
	id_permanente: number

	@Column({name: 'saldo_cas' })
	saldo_cas: number
	
	@Column({name: 'nombres' })
	nombres: string
	
	
	
	static listFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres"
		];
	}

	static viewFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres"
		];
	}

	static editFields(): string[]{
		return [
			"id_permanente", 
			"saldo_cas", 
			"nombres"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombres iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


