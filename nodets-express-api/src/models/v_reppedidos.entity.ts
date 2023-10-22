
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_reppedidos', schema: 'public' })
export default class V_Reppedidos extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_reppedidos");
	}
	
	@PrimaryColumn({name: 'idalmacen'})
	idalmacen: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'nombreyap' })
	nombreyap: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'material' })
	material: string
	
	@Column({name: 'idpedido' })
	idpedido: string
	
	
	
	static listFields(): string[]{
		return [
			"idalmacen", 
			"cantidad", 
			"fecha", 
			"codgestion", 
			"almacen", 
			"unidad", 
			"nombreyap", 
			"categoria", 
			"material", 
			"idpedido"
		];
	}

	static exportListFields(): string[]{
		return [
			"idalmacen", 
			"cantidad", 
			"fecha", 
			"codgestion", 
			"almacen", 
			"unidad", 
			"nombreyap", 
			"categoria", 
			"material", 
			"idpedido"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"fecha iLIKE :search", 
			"codgestion iLIKE :search", 
			"almacen iLIKE :search", 
			"unidad iLIKE :search", 
			"nombreyap iLIKE :search", 
			"categoria iLIKE :search", 
			"material iLIKE :search", 
			"idpedido iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


