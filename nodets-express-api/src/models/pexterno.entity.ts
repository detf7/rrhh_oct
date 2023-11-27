
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'pexterno', schema: 'public' })
export default class Pexterno extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("pexterno");
	}
	
	@PrimaryGeneratedColumn({name: 'idpexterno'})
	idpexterno: number

	@Column({name: 'fechaini' })
	fechaini: string
	
	@Column({name: 'fechafin' })
	fechafin: string
	
	@Column({name: 'vigente' })
	vigente: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'cargo' })
	cargo: string
	
	@Column({name: 'dependencia' })
	dependencia: string
	
	@Column({name: 'departamento' })
	departamento: string
	
	
	
	static listFields(): string[]{
		return [
			"idpexterno", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"codusuario", 
			"glosa", 
			"tipo", 
			"cargo", 
			"dependencia", 
			"departamento"
		];
	}

	static exportListFields(): string[]{
		return [
			"idpexterno", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"codusuario", 
			"glosa", 
			"tipo", 
			"cargo", 
			"dependencia", 
			"departamento"
		];
	}

	static viewFields(): string[]{
		return [
			"idpexterno", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"codusuario", 
			"glosa", 
			"tipo", 
			"cargo", 
			"dependencia", 
			"departamento"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idpexterno", 
			"fechaini", 
			"fechafin", 
			"vigente", 
			"codusuario", 
			"glosa", 
			"tipo", 
			"cargo", 
			"dependencia", 
			"departamento"
		];
	}

	static editFields(): string[]{
		return [
			"fechaini", 
			"fechafin", 
			"vigente", 
			"codusuario", 
			"glosa", 
			"tipo", 
			"cargo", 
			"dependencia", 
			"departamento", 
			"idpexterno"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"glosa iLIKE :search", 
			"tipo iLIKE :search", 
			"cargo iLIKE :search", 
			"dependencia iLIKE :search", 
			"departamento iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


