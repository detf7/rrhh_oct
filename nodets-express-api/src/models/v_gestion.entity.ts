
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_gestion', schema: 'public' })
export default class V_Gestion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_gestion");
	}
	
	@PrimaryColumn({name: 'gestion'})
	gestion: number

	@Column({name: 'escala' })
	escala: number
	
	@Column({name: 'poa' })
	poa: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'idgestion' })
	idgestion: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"gestion", 
			"escala", 
			"poa", 
			"habilitado", 
			"idgestion", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"gestion", 
			"escala", 
			"poa", 
			"habilitado", 
			"idgestion", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idgestion iLIKE :search", 
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


