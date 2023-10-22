
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_externo', schema: 'public' })
export default class V_Externo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_externo");
	}
	
	@PrimaryColumn({name: 'fechafin'})
	fechafin: string

	@Column({name: 'idpexterno' })
	idpexterno: number
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'cargo' })
	cargo: string
	
	@Column({name: 'dependencia' })
	dependencia: string
	
	@Column({name: 'departamento' })
	departamento: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"fechafin", 
			"idpexterno", 
			"vigente", 
			"fechaini", 
			"apmaterno", 
			"cargo", 
			"dependencia", 
			"departamento", 
			"tipo", 
			"codusuario", 
			"glosa", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"fechafin", 
			"idpexterno", 
			"vigente", 
			"fechaini", 
			"apmaterno", 
			"cargo", 
			"dependencia", 
			"departamento", 
			"tipo", 
			"codusuario", 
			"glosa", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"apmaterno iLIKE :search", 
			"cargo iLIKE :search", 
			"dependencia iLIKE :search", 
			"departamento iLIKE :search", 
			"tipo iLIKE :search", 
			"codusuario iLIKE :search", 
			"glosa iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


