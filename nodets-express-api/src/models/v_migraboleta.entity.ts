
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_migraboleta', schema: 'public' })
export default class V_Migraboleta extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_migraboleta");
	}
	
	@PrimaryColumn({name: 'codusuario'})
	codusuario: string

	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'hini' })
	hini: string
	
	@Column({name: 'ffin' })
	ffin: string
	
	@Column({name: 'hfin' })
	hfin: string
	
	@Column({name: 'codigo' })
	codigo: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	
	
	static listFields(): string[]{
		return [
			"codusuario", 
			"nombres", 
			"unidad", 
			"detalle", 
			"fini", 
			"hini", 
			"ffin", 
			"hfin", 
			"codigo", 
			"fecha"
		];
	}

	static exportListFields(): string[]{
		return [
			"codusuario", 
			"nombres", 
			"unidad", 
			"detalle", 
			"fini", 
			"hini", 
			"ffin", 
			"hfin", 
			"codigo", 
			"fecha"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"nombres iLIKE :search", 
			"unidad iLIKE :search", 
			"detalle iLIKE :search", 
			"fini iLIKE :search", 
			"hini iLIKE :search", 
			"ffin iLIKE :search", 
			"hfin iLIKE :search", 
			"codigo iLIKE :search", 
			"fecha iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


