
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'antiguedad', schema: 'public' })
export default class Antiguedad extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("antiguedad");
	}
	
	@PrimaryGeneratedColumn({name: 'idantiguedad'})
	idantiguedad: number

	@Column({name: 'anios' })
	anios: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'porcentaje' })
	porcentaje: number
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'numero_informe_cas' })
	numero_informe_cas: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	
	
	static listFields(): string[]{
		return [
			"idantiguedad", 
			"anios", 
			"fecha", 
			"porcentaje", 
			"vigente", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"codusuario", 
			"numero_informe_cas", 
			"usuario_creacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idantiguedad", 
			"anios", 
			"fecha", 
			"porcentaje", 
			"vigente", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"codusuario", 
			"numero_informe_cas", 
			"usuario_creacion"
		];
	}

	static viewFields(): string[]{
		return [
			"idantiguedad", 
			"anios", 
			"fecha", 
			"porcentaje", 
			"vigente", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"codusuario", 
			"numero_informe_cas", 
			"usuario_creacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idantiguedad", 
			"anios", 
			"fecha", 
			"porcentaje", 
			"vigente", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"codusuario", 
			"numero_informe_cas", 
			"usuario_creacion"
		];
	}

	static editFields(): string[]{
		return [
			"idantiguedad", 
			"anios", 
			"fecha", 
			"porcentaje", 
			"vigente", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"codusuario", 
			"numero_informe_cas", 
			"usuario_creacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search", 
			"codusuario iLIKE :search", 
			"numero_informe_cas iLIKE :search", 
			"usuario_creacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


