
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_stock', schema: 'public' })
export default class V_Stock extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_stock");
	}
	
	@PrimaryColumn({name: 'codcategoria'})
	codcategoria: number

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
	
	@Column({name: 'minimo' })
	minimo: number
	
	@Column({name: 'idstock' })
	idstock: number
	
	@Column({name: 'idmaterial' })
	idmaterial: string
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'material' })
	material: string
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	
	
	static listFields(): string[]{
		return [
			"codcategoria", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"minimo", 
			"idstock", 
			"idmaterial", 
			"almacen", 
			"codgestion", 
			"material", 
			"codmaterial"
		];
	}

	static exportListFields(): string[]{
		return [
			"codcategoria", 
			"inicial", 
			"cantidad", 
			"precio", 
			"fechaup", 
			"habilitado", 
			"codalmacen", 
			"minimo", 
			"idstock", 
			"idmaterial", 
			"almacen", 
			"codgestion", 
			"material", 
			"codmaterial"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idmaterial iLIKE :search", 
			"almacen iLIKE :search", 
			"codgestion iLIKE :search", 
			"material iLIKE :search", 
			"codmaterial iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


