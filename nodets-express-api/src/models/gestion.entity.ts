
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'gestion', schema: 'public' })
export default class Gestion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("gestion");
	}
	
	@Column({name: 'ufv_actual' })
	ufv_actual: number
	
	@Column({name: 'mes_num' })
	mes_num: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'ufv_anterior' })
	ufv_anterior: number
	
	@Column({name: 'mes_desc' })
	mes_desc: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@PrimaryColumn({name: 'idgestion'})
	idgestion: string

	@Column({name: 'anyo' })
	anyo: number
	
	@Column({name: 'id' })
	id: number
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo", 
			"id", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo", 
			"id", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"ufv_actual", 
			"mes_num", 
			"habilitado", 
			"ufv_anterior", 
			"mes_desc", 
			"detalle", 
			"idgestion", 
			"anyo", 
			"id", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"ufv_actual", 
			"mes_num", 
			"habilitado", 
			"ufv_anterior", 
			"mes_desc", 
			"detalle", 
			"idgestion", 
			"anyo", 
			"id", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"id", 
			"codgestion"
		];
	}

	static editarFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


