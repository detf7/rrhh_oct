
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detvacacion', schema: 'public' })
export default class Detvacacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detvacacion");
	}
	
	@PrimaryGeneratedColumn({name: 'iddetvac'})
	iddetvac: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'codregvacacion' })
	codregvacacion: number
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'codvacacion' })
	codvacacion: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	
	
	static listFields(): string[]{
		return [
			"iddetvac", 
			"cantidad", 
			"codregvacacion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_eliminacion", 
			"codvacacion", 
			"usuario_creacion", 
			"usuario_modificacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddetvac", 
			"cantidad", 
			"codregvacacion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_eliminacion", 
			"codvacacion", 
			"usuario_creacion", 
			"usuario_modificacion"
		];
	}

	static viewFields(): string[]{
		return [
			"iddetvac", 
			"cantidad", 
			"codregvacacion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_eliminacion", 
			"codvacacion", 
			"usuario_creacion", 
			"usuario_modificacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddetvac", 
			"cantidad", 
			"codregvacacion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_eliminacion", 
			"codvacacion", 
			"usuario_creacion", 
			"usuario_modificacion"
		];
	}

	static editFields(): string[]{
		return [
			"iddetvac", 
			"cantidad", 
			"codregvacacion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_eliminacion", 
			"codvacacion", 
			"usuario_creacion", 
			"usuario_modificacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_eliminacion iLIKE :search", 
			"codvacacion iLIKE :search", 
			"usuario_creacion iLIKE :search", 
			"usuario_modificacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


