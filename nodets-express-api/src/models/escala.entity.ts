
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'escala', schema: 'public' })
export default class Escala extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("escala");
	}
	
	@PrimaryGeneratedColumn({name: 'idescala'})
	idescala: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'ageneral' })
	ageneral: number
	
	@Column({name: 'mgeneral' })
	mgeneral: number
	
	@Column({name: 'aespecifica' })
	aespecifica: number
	
	@Column({name: 'mespecifica' })
	mespecifica: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'entidad' })
	entidad: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'organizacion' })
	organizacion: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'academico' })
	academico: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'normativa_codigo' })
	normativa_codigo: number
	
	@Column({name: 'normativa_anyo' })
	normativa_anyo: number
	
	@Column({name: 'numero_items' })
	numero_items: number
	
	@Column({name: 'costo_mensual' })
	costo_mensual: number
	
	
	
	static listFields(): string[]{
		return [
			"idescala", 
			"habilitado", 
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denominacion", 
			"haberbasico", 
			"numero_items", 
			"costo_mensual"
		];
	}

	static exportListFields(): string[]{
		return [
			"idescala", 
			"habilitado", 
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denominacion", 
			"haberbasico", 
			"numero_items", 
			"costo_mensual"
		];
	}

	static viewFields(): string[]{
		return [
			"idescala", 
			"codgestion", 
			"financiero", 
			"normativa_codigo", 
			"normativa_anyo", 
			"denominacion", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"academico", 
			"detalle", 
			"numero_items", 
			"costo_mensual"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idescala", 
			"codgestion", 
			"financiero", 
			"normativa_codigo", 
			"normativa_anyo", 
			"denominacion", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"academico", 
			"detalle", 
			"numero_items", 
			"costo_mensual"
		];
	}

	static editFields(): string[]{
		return [
			"idescala"
		];
	}

	static edicionFields(): string[]{
		return [
			"habilitado", 
			"normativa_codigo", 
			"normativa_anyo", 
			"financiero", 
			"categoria", 
			"nivel", 
			"denominacion", 
			"numero_items", 
			"haberbasico", 
			"costo_mensual", 
			"idescala"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"habilitado iLIKE :search", 
			"financiero iLIKE :search", 
			"categoria iLIKE :search", 
			"denominacion iLIKE :search", 
			"CAST(haberbasico AS TEXT) iLIKE :search", 
			"codgestion iLIKE :search", 
			"academico iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


