
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'tmpsaldos', schema: 'public' })
export default class Tmpsaldos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("tmpsaldos");
	}
	
	@PrimaryGeneratedColumn({name: 'idtmpsal'})
	idtmpsal: number

	@Column({name: 'precio' })
	precio: number
	
	@Column({name: 'inicial' })
	inicial: number
	
	@Column({name: 'tinicial' })
	tinicial: number
	
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
	
	@Column({name: 'tfinal' })
	tfinal: number
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"idtmpsal", 
			"precio", 
			"inicial", 
			"tinicial", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"tfinal", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static exportListFields(): string[]{
		return [
			"idtmpsal", 
			"precio", 
			"inicial", 
			"tinicial", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"tfinal", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static viewFields(): string[]{
		return [
			"idtmpsal", 
			"precio", 
			"inicial", 
			"tinicial", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"tfinal", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idtmpsal", 
			"precio", 
			"inicial", 
			"tinicial", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"tfinal", 
			"codalmacen", 
			"codmaterial", 
			"codgestion"
		];
	}

	static editFields(): string[]{
		return [
			"idtmpsal", 
			"precio", 
			"inicial", 
			"tinicial", 
			"compras", 
			"tcompras", 
			"pedidos", 
			"tpedidos", 
			"final", 
			"tfinal", 
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


