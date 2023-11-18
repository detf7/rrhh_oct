
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'unidad', schema: 'public' })
export default class Unidad extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("unidad");
	}
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'dependencia' })
	dependencia: number
	
	@Column({name: 'codentidad' })
	codentidad: number
	
	@PrimaryGeneratedColumn({name: 'idunidad'})
	idunidad: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'soa' })
	soa: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"codalmacen", 
			"dependencia", 
			"codentidad", 
			"idunidad", 
			"nivel", 
			"detalle", 
			"soa", 
			"sigla", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"codalmacen", 
			"dependencia", 
			"codentidad", 
			"idunidad", 
			"nivel", 
			"detalle", 
			"soa", 
			"sigla", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"codalmacen", 
			"dependencia", 
			"codentidad", 
			"idunidad", 
			"nivel", 
			"detalle", 
			"soa", 
			"sigla", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codalmacen", 
			"dependencia", 
			"codentidad", 
			"idunidad", 
			"nivel", 
			"detalle", 
			"soa", 
			"sigla", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"codalmacen", 
			"dependencia", 
			"codentidad", 
			"idunidad", 
			"nivel", 
			"detalle", 
			"soa", 
			"sigla", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"soa iLIKE :search", 
			"sigla iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


