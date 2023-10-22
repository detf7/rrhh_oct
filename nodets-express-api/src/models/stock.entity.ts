
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'stock', schema: 'public' })
export default class Stock extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("stock");
	}
	
	@PrimaryGeneratedColumn({name: 'idstock'})
	idstock: number

	@Column({name: 'inicial' })
	inicial: number
	
	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'precio' })
	precio: number
	
	@Column({name: 'fechaup' })
	fechaup: string
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idstock", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idstock", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idstock", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idstock", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idstock", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codmaterial iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


