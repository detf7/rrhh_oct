
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'almacen', schema: 'public' })
export default class Almacen extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("almacen");
	}
	
	@PrimaryGeneratedColumn({name: 'idalmacen'})
	idalmacen: number

	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"idalmacen", 
			"codalmacen", 
			"habilitado", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"idalmacen", 
			"codalmacen", 
			"habilitado", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"idalmacen", 
			"codalmacen", 
			"habilitado", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idalmacen", 
			"codalmacen", 
			"habilitado", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"idalmacen", 
			"codalmacen", 
			"habilitado", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


