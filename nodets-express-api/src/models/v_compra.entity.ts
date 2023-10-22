
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_compra', schema: 'public' })
export default class V_Compra extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_compra");
	}
	
	@PrimaryColumn({name: 'codproveedor'})
	codproveedor: number

	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'total' })
	total: number
	
	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'nit' })
	nit: number
	
	@Column({name: 'derivado' })
	derivado: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'recepcion' })
	recepcion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'oficina' })
	oficina: string
	
	@Column({name: 'proveedor' })
	proveedor: string
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'idcompra' })
	idcompra: string
	
	@Column({name: 'codcompra' })
	codcompra: string
	
	@Column({name: 'factura' })
	factura: string
	
	@Column({name: 'modalidad' })
	modalidad: string
	
	@Column({name: 'ordencompra' })
	ordencompra: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'hruta' })
	hruta: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"total", 
			"cantidad", 
			"nit", 
			"derivado", 
			"codunidad", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"oficina", 
			"proveedor", 
			"almacen", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo", 
			"hruta", 
			"estado", 
			"glosa"
		];
	}

	static exportListFields(): string[]{
		return [
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"total", 
			"cantidad", 
			"nit", 
			"derivado", 
			"codunidad", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"oficina", 
			"proveedor", 
			"almacen", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo", 
			"hruta", 
			"estado", 
			"glosa"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"recepcion iLIKE :search", 
			"codgestion iLIKE :search", 
			"codusuario iLIKE :search", 
			"oficina iLIKE :search", 
			"proveedor iLIKE :search", 
			"almacen iLIKE :search", 
			"idcompra iLIKE :search", 
			"codcompra iLIKE :search", 
			"factura iLIKE :search", 
			"modalidad iLIKE :search", 
			"ordencompra iLIKE :search", 
			"tipo iLIKE :search", 
			"hruta iLIKE :search", 
			"estado iLIKE :search", 
			"glosa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


