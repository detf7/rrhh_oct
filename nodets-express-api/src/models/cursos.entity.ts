
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cursos', schema: 'public' })
export default class Cursos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cursos");
	}
	
	@PrimaryGeneratedColumn({name: 'idcurso'})
	idcurso: number

	@Column({name: 'horas' })
	horas: number
	
	@Column({name: 'codhoja' })
	codhoja: number
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'institucion' })
	institucion: string
	
	@Column({name: 'detperiodo' })
	detperiodo: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idcurso", 
			"horas", 
			"codhoja", 
			"detalle", 
			"institucion", 
			"detperiodo", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcurso", 
			"horas", 
			"codhoja", 
			"detalle", 
			"institucion", 
			"detperiodo", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idcurso", 
			"horas", 
			"codhoja", 
			"detalle", 
			"institucion", 
			"detperiodo", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcurso", 
			"horas", 
			"codhoja", 
			"detalle", 
			"institucion", 
			"detperiodo", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idcurso", 
			"horas", 
			"codhoja", 
			"detalle", 
			"institucion", 
			"detperiodo", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search", 
			"institucion iLIKE :search", 
			"detperiodo iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


