
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_repsaldos', schema: 'public' })
export default class V_Repsaldos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_repsaldos");
	}
	
	@PrimaryColumn({name: 'tfinal'})
	tfinal: number

	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'compras' })
	compras: number
	
	@Column({name: 'tcompras' })
	tcompras: number
	
	@Column({name: 'pedidos' })
	pedidos: number
	
	@Column({name: 'tpedidos' })
	tpedidos: number
	
	@Column({name: 'final' })
	final: number
	
	@Column({name: 'idtmpsal' })
	idtmpsal: number
	
	@Column({name: 'inicial' })
	inicial: number
	
	@Column({name: 'tinicial' })
	tinicial: number
	
	@Column({name: 'precio' })
	precio: number
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	@Column({name: 'material' })
	material: string
	
	@Column({name: 'medida' })
	medida: string
	
	
	
	static listFields(): string[]{
		return [
			"tfinal", 
			"codalmacen", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"idtmpsal", 
			"inicial", 
			"tinicial", 
			"precio", 
			"almacen", 
			"codgestion", 
			"categoria", 
			"codmaterial", 
			"material", 
			"medida"
		];
	}

	static exportListFields(): string[]{
		return [
			"tfinal", 
			"codalmacen", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"idtmpsal", 
			"inicial", 
			"tinicial", 
			"precio", 
			"almacen", 
			"codgestion", 
			"categoria", 
			"codmaterial", 
			"material", 
			"medida"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"almacen iLIKE :search", 
			"codgestion iLIKE :search", 
			"categoria iLIKE :search", 
			"codmaterial iLIKE :search", 
			"material iLIKE :search", 
			"medida iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


