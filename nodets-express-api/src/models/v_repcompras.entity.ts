
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_repcompras', schema: 'public' })
export default class V_Repcompras extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_repcompras");
	}
	
	@PrimaryColumn({name: 'idalmacen'})
	idalmacen: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'preciouni' })
	preciouni: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'hruta' })
	hruta: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'oficina' })
	oficina: string
	
	@Column({name: 'proveedor' })
	proveedor: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'material' })
	material: string
	
	@Column({name: 'idcompra' })
	idcompra: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"idalmacen", 
			"cantidad", 
			"preciouni", 
			"fecha", 
			"hruta", 
			"codgestion", 
			"almacen", 
			"oficina", 
			"proveedor", 
			"categoria", 
			"material", 
			"idcompra", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idalmacen", 
			"cantidad", 
			"preciouni", 
			"fecha", 
			"hruta", 
			"codgestion", 
			"almacen", 
			"oficina", 
			"proveedor", 
			"categoria", 
			"material", 
			"idcompra", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"fecha iLIKE :search", 
			"hruta iLIKE :search", 
			"codgestion iLIKE :search", 
			"almacen iLIKE :search", 
			"oficina iLIKE :search", 
			"proveedor iLIKE :search", 
			"categoria iLIKE :search", 
			"material iLIKE :search", 
			"idcompra iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


