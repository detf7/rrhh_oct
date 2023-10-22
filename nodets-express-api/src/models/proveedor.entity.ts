
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'proveedor', schema: 'public' })
export default class Proveedor extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("proveedor");
	}
	
	@PrimaryGeneratedColumn({name: 'idproveedor'})
	idproveedor: number

	@Column({name: 'telefono' })
	telefono: number
	
	@Column({name: 'nit' })
	nit: number
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'direccion' })
	direccion: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"idproveedor", 
			"telefono", 
			"nit", 
			"detalle", 
			"direccion", 
			"glosa"
		];
	}

	static exportListFields(): string[]{
		return [
			"idproveedor", 
			"telefono", 
			"nit", 
			"detalle", 
			"direccion", 
			"glosa"
		];
	}

	static viewFields(): string[]{
		return [
			"idproveedor", 
			"telefono", 
			"nit", 
			"detalle", 
			"direccion", 
			"glosa"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idproveedor", 
			"telefono", 
			"nit", 
			"detalle", 
			"direccion", 
			"glosa"
		];
	}

	static editFields(): string[]{
		return [
			"idproveedor", 
			"telefono", 
			"nit", 
			"detalle", 
			"direccion", 
			"glosa"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"direccion iLIKE :search", 
			"glosa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


