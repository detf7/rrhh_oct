
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_boletassindatos', schema: 'public' })
export default class V_Boletassindatos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_boletassindatos");
	}
	
	@PrimaryColumn({name: 'fecha'})
	fecha: string

	@Column({name: 'sqlid' })
	sqlid: number
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'codboleta' })
	codboleta: number
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'ffin' })
	ffin: string
	
	@Column({name: 'tiempo' })
	tiempo: number
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'idpermiso' })
	idpermiso: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'hds' })
	hds: string
	
	@Column({name: 'lugar' })
	lugar: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'ciaprover' })
	ciaprover: string
	
	
	
	static listFields(): string[]{
		return [
			"fecha", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"codunidad", 
			"ffin", 
			"tiempo", 
			"codusuario", 
			"detalle", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"unidad", 
			"expedido", 
			"idpermiso", 
			"cargopla", 
			"hds", 
			"lugar", 
			"motivo", 
			"glosa", 
			"estado", 
			"ciaprover"
		];
	}

	static exportListFields(): string[]{
		return [
			"fecha", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"codunidad", 
			"ffin", 
			"tiempo", 
			"codusuario", 
			"detalle", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"unidad", 
			"expedido", 
			"idpermiso", 
			"cargopla", 
			"hds", 
			"lugar", 
			"motivo", 
			"glosa", 
			"estado", 
			"ciaprover"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"detalle iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"unidad iLIKE :search", 
			"expedido iLIKE :search", 
			"idpermiso iLIKE :search", 
			"cargopla iLIKE :search", 
			"hds iLIKE :search", 
			"lugar iLIKE :search", 
			"motivo iLIKE :search", 
			"glosa iLIKE :search", 
			"estado iLIKE :search", 
			"ciaprover iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


