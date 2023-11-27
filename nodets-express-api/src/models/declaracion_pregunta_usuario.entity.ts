
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'declaracion_pregunta_usuario', schema: 'public' })
export default class Declaracion_Pregunta_Usuario extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("declaracion_pregunta_usuario");
	}
	
	@PrimaryGeneratedColumn({name: 'iddeclaracion_pregunta_usuario'})
	iddeclaracion_pregunta_usuario: number

	@Column({name: 'iddeclaracion' })
	iddeclaracion: number
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'coddeclaracion' })
	coddeclaracion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'respuesta' })
	respuesta: string
	
	
	
	static listFields(): string[]{
		return [
			"iddeclaracion_pregunta_usuario", 
			"iddeclaracion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"coddeclaracion", 
			"codusuario", 
			"respuesta"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddeclaracion_pregunta_usuario", 
			"iddeclaracion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"coddeclaracion", 
			"codusuario", 
			"respuesta"
		];
	}

	static viewFields(): string[]{
		return [
			"iddeclaracion_pregunta_usuario", 
			"iddeclaracion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"coddeclaracion", 
			"codusuario", 
			"respuesta"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddeclaracion_pregunta_usuario", 
			"iddeclaracion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"coddeclaracion", 
			"codusuario", 
			"respuesta"
		];
	}

	static editFields(): string[]{
		return [
			"iddeclaracion", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"coddeclaracion", 
			"codusuario", 
			"respuesta", 
			"iddeclaracion_pregunta_usuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_creacion iLIKE :search", 
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search", 
			"coddeclaracion iLIKE :search", 
			"codusuario iLIKE :search", 
			"respuesta iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


