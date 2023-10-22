
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'pedido', schema: 'public' })
export default class Pedido extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("pedido");
	}
	
	@Column({name: 'codalmacen' })
	codalmacen: number
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'aprobado' })
	aprobado: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'codsolicita' })
	codsolicita: string
	
	@PrimaryColumn({name: 'idpedido'})
	idpedido: string

	@Column({name: 'autorizacion' })
	autorizacion: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"idpedido", 
			"autorizacion", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"idpedido", 
			"autorizacion", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static viewFields(): string[]{
		return [
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"idpedido", 
			"autorizacion", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"idpedido", 
			"autorizacion", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static editFields(): string[]{
		return [
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"idpedido", 
			"autorizacion", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"glosa iLIKE :search", 
			"codgestion iLIKE :search", 
			"codsolicita iLIKE :search", 
			"idpedido iLIKE :search", 
			"autorizacion iLIKE :search", 
			"descripcion iLIKE :search", 
			"estado iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


