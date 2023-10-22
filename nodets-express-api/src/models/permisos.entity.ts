
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'permisos', schema: 'public' })
export default class Permisos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("permisos");
	}
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'gestion' })
	gestion: number
	
	@Column({name: 'sqlid' })
	sqlid: number
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'codboleta' })
	codboleta: number
	
	@Column({name: 'ffin' })
	ffin: string
	
	@Column({name: 'fechacreacion' })
	fechacreacion: string
	
	@Column({name: 'fechamodificacion' })
	fechamodificacion: string
	
	@Column({name: 'tiempo' })
	tiempo: number
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'hds' })
	hds: string
	
	@Column({name: 'lugar' })
	lugar: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@PrimaryColumn({name: 'idpermiso'})
	idpermiso: string

	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'ciaprover' })
	ciaprover: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"fecha", 
			"gestion", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ffin", 
			"fechacreacion", 
			"fechamodificacion", 
			"tiempo", 
			"glosa", 
			"hds", 
			"lugar", 
			"motivo", 
			"idpermiso", 
			"estado", 
			"ciaprover", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"fecha", 
			"gestion", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ffin", 
			"fechacreacion", 
			"fechamodificacion", 
			"tiempo", 
			"glosa", 
			"hds", 
			"lugar", 
			"motivo", 
			"idpermiso", 
			"estado", 
			"ciaprover", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"fecha", 
			"gestion", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ffin", 
			"fechacreacion", 
			"fechamodificacion", 
			"tiempo", 
			"glosa", 
			"hds", 
			"lugar", 
			"motivo", 
			"idpermiso", 
			"estado", 
			"ciaprover", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fecha", 
			"gestion", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ffin", 
			"fechacreacion", 
			"fechamodificacion", 
			"tiempo", 
			"glosa", 
			"hds", 
			"lugar", 
			"motivo", 
			"idpermiso", 
			"estado", 
			"ciaprover", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"fecha", 
			"gestion", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ffin", 
			"fechacreacion", 
			"fechamodificacion", 
			"tiempo", 
			"glosa", 
			"hds", 
			"lugar", 
			"motivo", 
			"idpermiso", 
			"estado", 
			"ciaprover", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"glosa iLIKE :search", 
			"hds iLIKE :search", 
			"lugar iLIKE :search", 
			"motivo iLIKE :search", 
			"idpermiso iLIKE :search", 
			"estado iLIKE :search", 
			"ciaprover iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


