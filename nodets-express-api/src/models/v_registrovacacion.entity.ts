
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_registrovacacion', schema: 'public' })
export default class V_Registrovacacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_registrovacacion");
	}
	
	@PrimaryColumn({name: 'item'})
	item: number

	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'vacacion' })
	vacacion: number
	
	@Column({name: 'fingreso' })
	fingreso: string
	
	@Column({name: 'autovac' })
	autovac: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"item", 
			"haberbasico", 
			"vacacion", 
			"fingreso", 
			"autovac", 
			"motivo", 
			"idcarnet", 
			"cargopla", 
			"denominacion", 
			"unidad", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"item", 
			"haberbasico", 
			"vacacion", 
			"fingreso", 
			"autovac", 
			"motivo", 
			"idcarnet", 
			"cargopla", 
			"denominacion", 
			"unidad", 
			"expedido", 
			"nombres", 
			"appaterno", 
			"apmaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"motivo iLIKE :search", 
			"idcarnet iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"unidad iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


