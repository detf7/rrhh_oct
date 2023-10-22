
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'declaraciones', schema: 'public' })
export default class Declaraciones extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("declaraciones");
	}
	
	@PrimaryGeneratedColumn({name: 'iddeclaracion'})
	iddeclaracion: number

	@Column({name: 'gestion' })
	gestion: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'coddeclaracion' })
	coddeclaracion: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	
	
	static listFields(): string[]{
		return [
			"iddeclaracion", 
			"gestion", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"coddeclaracion", 
			"descripcion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"usuario_creacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddeclaracion", 
			"gestion", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"coddeclaracion", 
			"descripcion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"usuario_creacion"
		];
	}

	static viewFields(): string[]{
		return [
			"iddeclaracion", 
			"gestion", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"coddeclaracion", 
			"descripcion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"usuario_creacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddeclaracion", 
			"gestion", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"coddeclaracion", 
			"descripcion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"usuario_creacion"
		];
	}

	static editFields(): string[]{
		return [
			"iddeclaracion", 
			"gestion", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"coddeclaracion", 
			"descripcion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"usuario_creacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"coddeclaracion iLIKE :search", 
			"descripcion iLIKE :search", 
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search", 
			"usuario_creacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


