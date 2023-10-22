
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'archivos', schema: 'public' })
export default class Archivos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("archivos");
	}
	
	@Column({name: 'fecha' })
	fecha: string
	
	@PrimaryGeneratedColumn({name: 'idarchivo'})
	idarchivo: number

	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'archivo' })
	archivo: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"fecha", 
			"idarchivo", 
			"vigente", 
			"codusuario", 
			"archivo", 
			"tipo", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"fecha", 
			"idarchivo", 
			"vigente", 
			"codusuario", 
			"archivo", 
			"tipo", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"fecha", 
			"idarchivo", 
			"vigente", 
			"codusuario", 
			"archivo", 
			"tipo", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fecha", 
			"idarchivo", 
			"vigente", 
			"codusuario", 
			"archivo", 
			"tipo", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"fecha", 
			"idarchivo", 
			"vigente", 
			"codusuario", 
			"archivo", 
			"tipo", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"archivo iLIKE :search", 
			"tipo iLIKE :search", 
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


