
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detboleta', schema: 'public' })
export default class Detboleta extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detboleta");
	}
	
	@PrimaryGeneratedColumn({name: 'idboleta'})
	idboleta: number

	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'haber' })
	haber: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"idboleta", 
			"estado", 
			"tipo", 
			"glosa", 
			"sigla", 
			"haber", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"idboleta", 
			"estado", 
			"tipo", 
			"glosa", 
			"sigla", 
			"haber", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"idboleta", 
			"estado", 
			"tipo", 
			"glosa", 
			"sigla", 
			"haber", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idboleta", 
			"estado", 
			"tipo", 
			"glosa", 
			"sigla", 
			"haber", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"idboleta", 
			"estado", 
			"tipo", 
			"glosa", 
			"sigla", 
			"haber", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"tipo iLIKE :search", 
			"glosa iLIKE :search", 
			"sigla iLIKE :search", 
			"haber iLIKE :search", 
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


