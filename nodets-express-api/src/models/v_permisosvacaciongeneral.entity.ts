
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_permisosvacaciongeneral', schema: 'public' })
export default class V_Permisosvacaciongeneral extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_permisosvacaciongeneral");
	}
	
	@PrimaryColumn({name: 'ffin'})
	ffin: string

	@Column({name: 'fres' })
	fres: string
	
	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'medio' })
	medio: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'sqlid' })
	sqlid: number
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'idvacacion' })
	idvacacion: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	
	
	static listFields(): string[]{
		return [
			"ffin", 
			"fres", 
			"dias", 
			"medio", 
			"fecha", 
			"codunidad", 
			"fini", 
			"sqlid", 
			"expedido", 
			"idvacacion", 
			"cargopla", 
			"glosa", 
			"estado", 
			"codusuario", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"unidad"
		];
	}

	static exportListFields(): string[]{
		return [
			"ffin", 
			"fres", 
			"dias", 
			"medio", 
			"fecha", 
			"codunidad", 
			"fini", 
			"sqlid", 
			"expedido", 
			"idvacacion", 
			"cargopla", 
			"glosa", 
			"estado", 
			"codusuario", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"unidad"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"expedido iLIKE :search", 
			"idvacacion iLIKE :search", 
			"cargopla iLIKE :search", 
			"glosa iLIKE :search", 
			"estado iLIKE :search", 
			"codusuario iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"unidad iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


