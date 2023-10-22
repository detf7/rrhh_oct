
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'regvacacion', schema: 'public' })
export default class Regvacacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("regvacacion");
	}
	
	@PrimaryGeneratedColumn({name: 'idregvacacion'})
	idregvacacion: number

	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'disponible' })
	disponible: number
	
	@Column({name: 'gestion' })
	gestion: number
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'duodecima' })
	duodecima: string
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	
	
	static listFields(): string[]{
		return [
			"idregvacacion", 
			"dias", 
			"disponible", 
			"gestion", 
			"vigente", 
			"duodecima", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"codusuario", 
			"usuario_eliminacion", 
			"glosa", 
			"usuario_creacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idregvacacion", 
			"dias", 
			"disponible", 
			"gestion", 
			"vigente", 
			"duodecima", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"codusuario", 
			"usuario_eliminacion", 
			"glosa", 
			"usuario_creacion"
		];
	}

	static viewFields(): string[]{
		return [
			"idregvacacion", 
			"dias", 
			"disponible", 
			"gestion", 
			"vigente", 
			"duodecima", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"codusuario", 
			"usuario_eliminacion", 
			"glosa", 
			"usuario_creacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idregvacacion", 
			"dias", 
			"disponible", 
			"gestion", 
			"vigente", 
			"duodecima", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"codusuario", 
			"usuario_eliminacion", 
			"glosa", 
			"usuario_creacion"
		];
	}

	static editFields(): string[]{
		return [
			"idregvacacion", 
			"dias", 
			"disponible", 
			"gestion", 
			"vigente", 
			"duodecima", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"fecha_eliminacion", 
			"usuario_modificacion", 
			"codusuario", 
			"usuario_eliminacion", 
			"glosa", 
			"usuario_creacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario_modificacion iLIKE :search", 
			"codusuario iLIKE :search", 
			"usuario_eliminacion iLIKE :search", 
			"glosa iLIKE :search", 
			"usuario_creacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


