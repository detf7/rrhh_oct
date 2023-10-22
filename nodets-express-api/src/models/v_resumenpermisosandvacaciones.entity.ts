
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_resumenpermisosandvacaciones', schema: 'public' })
export default class V_Resumenpermisosandvacaciones extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_resumenpermisosandvacaciones");
	}
	
	@PrimaryColumn({name: 'ffin'})
	ffin: string

	@Column({name: 'tiempo' })
	tiempo: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'sqlid' })
	sqlid: number
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'codboleta' })
	codboleta: number
	
	@Column({name: 'ciaprover' })
	ciaprover: string
	
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
	
	@Column({name: 'idpermiso' })
	idpermiso: string
	
	@Column({name: 'unidad' })
	unidad: string
	
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
	
	
	
	static listFields(): string[]{
		return [
			"ffin", 
			"tiempo", 
			"fecha", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ciaprover", 
			"codusuario", 
			"detalle", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"idpermiso", 
			"unidad", 
			"hds", 
			"lugar", 
			"motivo", 
			"glosa", 
			"estado"
		];
	}

	static exportListFields(): string[]{
		return [
			"ffin", 
			"tiempo", 
			"fecha", 
			"sqlid", 
			"fini", 
			"codboleta", 
			"ciaprover", 
			"codusuario", 
			"detalle", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"idpermiso", 
			"unidad", 
			"hds", 
			"lugar", 
			"motivo", 
			"glosa", 
			"estado"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"ciaprover iLIKE :search", 
			"codusuario iLIKE :search", 
			"detalle iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"idpermiso iLIKE :search", 
			"unidad iLIKE :search", 
			"hds iLIKE :search", 
			"lugar iLIKE :search", 
			"motivo iLIKE :search", 
			"glosa iLIKE :search", 
			"estado iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


