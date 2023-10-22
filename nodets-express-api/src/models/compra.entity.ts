
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'compra', schema: 'public' })
export default class Compra extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("compra");
	}
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'codproveedor' })
	codproveedor: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'derivado' })
	derivado: string
	
	@Column({name: 'hruta' })
	hruta: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'recepcion' })
	recepcion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@PrimaryColumn({name: 'idcompra'})
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
	
	
	
	static listFields(): string[]{
		return [
			"codunidad", 
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"derivado", 
			"hruta", 
			"estado", 
			"glosa", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"codunidad", 
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"derivado", 
			"hruta", 
			"estado", 
			"glosa", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo"
		];
	}

	static viewFields(): string[]{
		return [
			"codunidad", 
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"derivado", 
			"hruta", 
			"estado", 
			"glosa", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codunidad", 
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"derivado", 
			"hruta", 
			"estado", 
			"glosa", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo"
		];
	}

	static editFields(): string[]{
		return [
			"codunidad", 
			"codproveedor", 
			"fecha", 
			"codalmacen", 
			"derivado", 
			"hruta", 
			"estado", 
			"glosa", 
			"recepcion", 
			"codgestion", 
			"codusuario", 
			"idcompra", 
			"codcompra", 
			"factura", 
			"modalidad", 
			"ordencompra", 
			"tipo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"hruta iLIKE :search", 
			"estado iLIKE :search", 
			"glosa iLIKE :search", 
			"recepcion iLIKE :search", 
			"codgestion iLIKE :search", 
			"codusuario iLIKE :search", 
			"idcompra iLIKE :search", 
			"codcompra iLIKE :search", 
			"factura iLIKE :search", 
			"modalidad iLIKE :search", 
			"ordencompra iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


