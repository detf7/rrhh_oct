
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'preguntas', schema: 'public' })
export default class Preguntas extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("preguntas");
	}
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'iddeclaracion' })
	iddeclaracion: number
	
	@Column({name: 'opciones' })
	opciones: string
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@PrimaryGeneratedColumn({name: 'idpregunta'})
	idpregunta: number

	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	@Column({name: 'codpregunta' })
	codpregunta: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'tipopregunta' })
	tipopregunta: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	
	
	static listFields(): string[]{
		return [
			"fecha_eliminacion", 
			"iddeclaracion", 
			"opciones", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"idpregunta", 
			"usuario_creacion", 
			"codpregunta", 
			"descripcion", 
			"tipopregunta", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"fecha_eliminacion", 
			"iddeclaracion", 
			"opciones", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"idpregunta", 
			"usuario_creacion", 
			"codpregunta", 
			"descripcion", 
			"tipopregunta", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static viewFields(): string[]{
		return [
			"fecha_eliminacion", 
			"iddeclaracion", 
			"opciones", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"idpregunta", 
			"usuario_creacion", 
			"codpregunta", 
			"descripcion", 
			"tipopregunta", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fecha_eliminacion", 
			"iddeclaracion", 
			"opciones", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"idpregunta", 
			"usuario_creacion", 
			"codpregunta", 
			"descripcion", 
			"tipopregunta", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	static editFields(): string[]{
		return [
			"fecha_eliminacion", 
			"iddeclaracion", 
			"opciones", 
			"habilitado", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"idpregunta", 
			"usuario_creacion", 
			"codpregunta", 
			"descripcion", 
			"tipopregunta", 
			"usuario_modificacion", 
			"usuario_eliminacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_creacion iLIKE :search", 
			"codpregunta iLIKE :search", 
			"descripcion iLIKE :search", 
			"tipopregunta iLIKE :search", 
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


