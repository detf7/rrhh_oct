
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'estructura_org', schema: 'public' })
export default class Estructura_Org extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("estructura_org");
	}
	
	@PrimaryGeneratedColumn({name: 'idunidad'})
	idunidad: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'dependencia' })
	dependencia: number
	
	@Column({name: 'codentidad' })
	codentidad: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'soa' })
	soa: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'ley' })
	ley: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"idunidad", 
			"ley", 
			"nivel", 
			"descripcion", 
			"sigla", 
			"soa", 
			"dependencia"
		];
	}

	static exportListFields(): string[]{
		return [
			"idunidad", 
			"ley", 
			"nivel", 
			"descripcion", 
			"sigla", 
			"soa", 
			"dependencia"
		];
	}

	static viewFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"codgestion", 
			"descripcion", 
			"soa", 
			"sigla", 
			"ley", 
			"glosa"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"codgestion", 
			"descripcion", 
			"soa", 
			"sigla", 
			"ley", 
			"glosa"
		];
	}

	static editFields(): string[]{
		return [
			"idunidad"
		];
	}

	static edicionorgFields(): string[]{
		return [
			"nivel", 
			"descripcion", 
			"sigla", 
			"soa", 
			"glosa", 
			"dependencia", 
			"idunidad"
		];
	}

	static vistaFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"codgestion", 
			"descripcion", 
			"soa", 
			"sigla", 
			"ley", 
			"glosa"
		];
	}

	static exportVistaFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"codgestion", 
			"descripcion", 
			"soa", 
			"sigla", 
			"ley", 
			"glosa"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"ley iLIKE :search", 
			"CAST(nivel AS TEXT) iLIKE :search", 
			"descripcion iLIKE :search", 
			"sigla iLIKE :search", 
			"soa iLIKE :search", 
			"glosa iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


