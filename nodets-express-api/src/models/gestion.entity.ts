
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
	
	
	
	static listFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo"
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
			"anyo"
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
			"anyo"
		];
	}

	static editFields(): string[]{
		return [
			"idgestion", 
			"habilitado", 
			"detalle", 
			"anyo"
		];
	}

	
	
	
}


