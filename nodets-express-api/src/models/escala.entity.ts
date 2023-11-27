
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
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denominacion", 
			"haberbasico", 
			"numero_items"
		];
	}

	static exportListFields(): string[]{
		return [
			"idescala", 
			"financiero", 
			"categoria", 
			"normativa_codigo", 
			"nivel", 
			"denominacion", 
			"haberbasico", 
			"numero_items"
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
			"numero_items"
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
			"numero_items"
		];
	}

	static editFields(): string[]{
		return [
			"financiero", 
			"nivel", 
			"categoria", 
			"denominacion", 
			"numero_items", 
			"idescala"
		];
	}

	static edicionFields(): string[]{
		return [
			"normativa_codigo", 
			"financiero", 
			"categoria", 
			"nivel", 
			"denominacion", 
			"numero_items", 
			"haberbasico", 
			"idescala"
		];
	}

	static listadoFields(): string[]{
		return [
			"idescala", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"codgestion", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"denominacion", 
			"normativa_codigo", 
			"numero_items", 
			"costo_mensual", 
			"academico", 
			"detalle", 
			"normativa_anyo"
		];
	}

	static exportListadoFields(): string[]{
		return [
			"idescala", 
			"nivel", 
			"haberbasico", 
			"habilitado", 
			"ageneral", 
			"mgeneral", 
			"aespecifica", 
			"mespecifica", 
			"codgestion", 
			"entidad", 
			"financiero", 
			"organizacion", 
			"categoria", 
			"denominacion", 
			"normativa_codigo", 
			"numero_items", 
			"costo_mensual", 
			"academico", 
			"detalle", 
			"normativa_anyo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"categoria iLIKE :search", 
			"CAST(nivel AS TEXT) iLIKE :search", 
			"denominacion iLIKE :search", 
			"CAST(haberbasico AS TEXT) iLIKE :search", 
			"CAST(numero_items AS TEXT) iLIKE :search", 
			"habilitado iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


