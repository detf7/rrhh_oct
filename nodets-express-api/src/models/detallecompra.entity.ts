
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detallecompra', schema: 'public' })
export default class Detallecompra extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detallecompra");
	}
	
	@PrimaryGeneratedColumn({name: 'iddetcompra'})
	iddetcompra: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'preciouni' })
	preciouni: number
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	@Column({name: 'codcompra' })
	codcompra: string
	
	
	
	static listFields(): string[]{
		return [
			"iddetcompra", 
			"cantidad", 
			"preciouni", 
			"codmaterial", 
			"codcompra"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddetcompra", 
			"cantidad", 
			"preciouni", 
			"codmaterial", 
			"codcompra"
		];
	}

	static viewFields(): string[]{
		return [
			"iddetcompra", 
			"cantidad", 
			"preciouni", 
			"codmaterial", 
			"codcompra"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddetcompra", 
			"cantidad", 
			"preciouni", 
			"codmaterial", 
			"codcompra"
		];
	}

	static editFields(): string[]{
		return [
			"iddetcompra", 
			"cantidad", 
			"preciouni", 
			"codmaterial", 
			"codcompra"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codmaterial iLIKE :search", 
			"codcompra iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


