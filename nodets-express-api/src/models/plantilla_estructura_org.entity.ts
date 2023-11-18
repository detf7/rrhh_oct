
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plantilla_estructura_org', schema: 'public' })
export default class Plantilla_Estructura_Org extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plantilla_estructura_org");
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
	
	@Column({name: 'ley' })
	ley: string
	
	@Column({name: 'soa' })
	soa: string
	
	@Column({name: 'sigla' })
	sigla: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"descripcion", 
			"ley", 
			"soa", 
			"sigla"
		];
	}

	static exportListFields(): string[]{
		return [
			"idunidad", 
			"nivel", 
			"dependencia", 
			"codentidad", 
			"descripcion", 
			"ley", 
			"soa", 
			"sigla"
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
			"ley", 
			"soa", 
			"sigla", 
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
			"ley", 
			"soa", 
			"sigla", 
			"glosa"
		];
	}

	static editFields(): string[]{
		return [
			"nivel", 
			"dependencia", 
			"codentidad", 
			"codgestion", 
			"descripcion", 
			"ley", 
			"soa", 
			"sigla", 
			"glosa", 
			"idunidad"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripcion iLIKE :search", 
			"ley iLIKE :search", 
			"soa iLIKE :search", 
			"sigla iLIKE :search", 
			"codgestion iLIKE :search", 
			"glosa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


