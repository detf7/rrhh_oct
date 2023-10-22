
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'vacaciones', schema: 'public' })
export default class Vacaciones extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("vacaciones");
	}
	
	@Column({name: 'fecha_eliminacion' })
	fecha_eliminacion: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'ffin' })
	ffin: string
	
	@Column({name: 'fres' })
	fres: string
	
	@Column({name: 'medio' })
	medio: string
	
	@Column({name: 'sqlid' })
	sqlid: number
	
	@Column({name: 'fecha_creacion' })
	fecha_creacion: string
	
	@Column({name: 'fecha_modificacion' })
	fecha_modificacion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'usuario_creacion' })
	usuario_creacion: string
	
	@Column({name: 'usuario_modificacion' })
	usuario_modificacion: string
	
	@Column({name: 'usuario_eliminacion' })
	usuario_eliminacion: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'estado' })
	estado: string
	
	@PrimaryColumn({name: 'idvacacion'})
	idvacacion: string

	
	
	static listFields(): string[]{
		return [
			"fecha_eliminacion", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"medio", 
			"sqlid", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"codusuario", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"glosa", 
			"estado", 
			"idvacacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"fecha_eliminacion", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"medio", 
			"sqlid", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"codusuario", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"glosa", 
			"estado", 
			"idvacacion"
		];
	}

	static viewFields(): string[]{
		return [
			"fecha_eliminacion", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"medio", 
			"sqlid", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"codusuario", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"glosa", 
			"estado", 
			"idvacacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fecha_eliminacion", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"medio", 
			"sqlid", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"codusuario", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"glosa", 
			"estado", 
			"idvacacion"
		];
	}

	static editFields(): string[]{
		return [
			"fecha_eliminacion", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"medio", 
			"sqlid", 
			"fecha_creacion", 
			"fecha_modificacion", 
			"codusuario", 
			"usuario_creacion", 
			"usuario_modificacion", 
			"usuario_eliminacion", 
			"glosa", 
			"estado", 
			"idvacacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"usuario_creacion iLIKE :search", 
			"usuario_modificacion iLIKE :search", 
			"usuario_eliminacion iLIKE :search", 
			"glosa iLIKE :search", 
			"estado iLIKE :search", 
			"idvacacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


