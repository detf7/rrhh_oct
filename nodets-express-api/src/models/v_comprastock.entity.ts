
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_comprastock', schema: 'public' })
export default class V_Comprastock extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_comprastock");
	}
	
	@PrimaryColumn({name: 'codalmacen'})
	codalmacen: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'preciouni' })
	preciouni: number
	
	@Column({name: 'idcompra' })
	idcompra: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	
	
	static listFields(): string[]{
		return [
			"codalmacen", 
			"cantidad", 
			"preciouni", 
			"idcompra", 
			"codgestion", 
			"codmaterial"
		];
	}

	static exportListFields(): string[]{
		return [
			"codalmacen", 
			"cantidad", 
			"preciouni", 
			"idcompra", 
			"codgestion", 
			"codmaterial"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idcompra iLIKE :search", 
			"codgestion iLIKE :search", 
			"codmaterial iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


