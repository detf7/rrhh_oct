
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'escala_t', schema: 'public' })
export default class Escala_T extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("escala_t");
	}
	
	@Column({name: 'costo_mensual' })
	costo_mensual: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'ageneral' })
	ageneral: number
	
	@Column({name: 'mgeneral' })
	mgeneral: number
	
	@Column({name: 'aespecifica' })
	aespecifica: number
	
	@Column({name: 'mespecifica' })
	mespecifica: number
	
	@Column({name: 'normativa_codigo' })
	normativa_codigo: number
	
	@Column({name: 'normativa_anyo' })
	normativa_anyo: number
	
	@Column({name: 'numero_items' })
	numero_items: number
	
	@PrimaryGeneratedColumn({name: 'idescala'})
	idescala: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'entidad' })
	entidad: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'organizacion' })
	organizacion: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'academico' })
	academico: string
	
	
	
	static listFields(): string[]{
		return [
			"costo_mensual", 
			"haberbasico", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"normativa_codigo", 
			"normativa_anyo", 
			"numero_items", 
			"idescala", 
			"nivel", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"detalle", 
			"denominacion", 
			"codgestion", 
			"habilitado", 
			"academico"
		];
	}

	static exportListFields(): string[]{
		return [
			"costo_mensual", 
			"haberbasico", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"normativa_codigo", 
			"normativa_anyo", 
			"numero_items", 
			"idescala", 
			"nivel", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"detalle", 
			"denominacion", 
			"codgestion", 
			"habilitado", 
			"academico"
		];
	}

	static viewFields(): string[]{
		return [
			"costo_mensual", 
			"haberbasico", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"normativa_codigo", 
			"normativa_anyo", 
			"numero_items", 
			"idescala", 
			"nivel", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"detalle", 
			"denominacion", 
			"codgestion", 
			"habilitado", 
			"academico"
		];
	}

	static exportViewFields(): string[]{
		return [
			"costo_mensual", 
			"haberbasico", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"normativa_codigo", 
			"normativa_anyo", 
			"numero_items", 
			"idescala", 
			"nivel", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"detalle", 
			"denominacion", 
			"codgestion", 
			"habilitado", 
			"academico"
		];
	}

	static editFields(): string[]{
		return [
			"costo_mensual", 
			"haberbasico", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"normativa_codigo", 
			"normativa_anyo", 
			"numero_items", 
			"idescala", 
			"nivel", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"detalle", 
			"denominacion", 
			"codgestion", 
			"habilitado", 
			"academico"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"entidad iLIKE :search", 
			"financiero iLIKE :search", 
			"organizacion iLIKE :search", 
			"categoria iLIKE :search", 
			"detalle iLIKE :search", 
			"denominacion iLIKE :search", 
			"codgestion iLIKE :search", 
			"habilitado iLIKE :search", 
			"academico iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


