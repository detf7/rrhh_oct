
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'planillas', schema: 'public' })
export default class Planillas extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("planillas");
	}
	
	@PrimaryGeneratedColumn({name: 'idpla'})
	idpla: number

	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"idpla", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"detalle", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idpla", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"detalle", 
			"tipo"
		];
	}

	static viewFields(): string[]{
		return [
			"idpla", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"detalle", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idpla", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"detalle", 
			"tipo"
		];
	}

	static editFields(): string[]{
		return [
			"idpla", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"detalle", 
			"tipo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


