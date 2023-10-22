
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'temp_cas1', schema: 'public' })
export default class Temp_Cas1 extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("temp_cas1");
	}
	
	@PrimaryColumn({name: 'id_cas'})
	id_cas: number

	@Column({name: 'anyos' })
	anyos: number
	
	@Column({name: 'mes' })
	mes: number
	
	@Column({name: 'id_permanente' })
	id_permanente: number
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	
	
	static listFields(): string[]{
		return [
			"id_cas", 
			"anyos", 
			"mes", 
			"id_permanente", 
			"descripcion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_cas", 
			"anyos", 
			"mes", 
			"id_permanente", 
			"descripcion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_cas", 
			"anyos", 
			"mes", 
			"id_permanente", 
			"descripcion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_cas", 
			"anyos", 
			"mes", 
			"id_permanente", 
			"descripcion"
		];
	}

	static editFields(): string[]{
		return [
			"id_cas", 
			"anyos", 
			"mes", 
			"id_permanente", 
			"descripcion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripcion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


