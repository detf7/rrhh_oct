
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'parametros_definicion', schema: 'public' })
export default class Parametros_Definicion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("parametros_definicion");
	}
	
	@PrimaryGeneratedColumn({name: 'id_parametro'})
	id_parametro: number

	@Column({name: 'valor_numerico' })
	valor_numerico: number
	
	@Column({name: 'valor_fecha' })
	valor_fecha: string
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	@Column({name: 'codigo_grupo' })
	codigo_grupo: string
	
	@Column({name: 'codigo_parametro' })
	codigo_parametro: string
	
	@Column({name: 'valor_caracter' })
	valor_caracter: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	
	
	static listFields(): string[]{
		return [
			"id_parametro", 
			"valor_numerico", 
			"valor_fecha", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"codigo_grupo", 
			"codigo_parametro", 
			"valor_caracter", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_parametro", 
			"valor_numerico", 
			"valor_fecha", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"codigo_grupo", 
			"codigo_parametro", 
			"valor_caracter", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static viewFields(): string[]{
		return [
			"id_parametro", 
			"valor_numerico", 
			"valor_fecha", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"codigo_grupo", 
			"codigo_parametro", 
			"valor_caracter", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_parametro", 
			"valor_numerico", 
			"valor_fecha", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"codigo_grupo", 
			"codigo_parametro", 
			"valor_caracter", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static editFields(): string[]{
		return [
			"id_parametro", 
			"valor_numerico", 
			"valor_fecha", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_creacion", 
			"codigo_grupo", 
			"codigo_parametro", 
			"valor_caracter", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_creacion iLIKE :search", 
			"codigo_grupo iLIKE :search", 
			"codigo_parametro iLIKE :search", 
			"valor_caracter iLIKE :search", 
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


