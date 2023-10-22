
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_pedido', schema: 'public' })
export default class V_Pedido extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_pedido");
	}
	
	@PrimaryColumn({name: 'cantidad'})
	cantidad: number

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
	
	@Column({name: 'autorizacion' })
	autorizacion: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'almacen' })
	almacen: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'idpedido' })
	idpedido: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"cantidad", 
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"autorizacion", 
			"unidad", 
			"nombres", 
			"appaterno", 
			"almacen", 
			"apmaterno", 
			"idpedido", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"cantidad", 
			"codalmacen", 
			"codunidad", 
			"fecha", 
			"aprobado", 
			"glosa", 
			"codgestion", 
			"codsolicita", 
			"autorizacion", 
			"unidad", 
			"nombres", 
			"appaterno", 
			"almacen", 
			"apmaterno", 
			"idpedido", 
			"descripcion", 
			"estado", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"glosa iLIKE :search", 
			"codgestion iLIKE :search", 
			"codsolicita iLIKE :search", 
			"autorizacion iLIKE :search", 
			"unidad iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"almacen iLIKE :search", 
			"apmaterno iLIKE :search", 
			"idpedido iLIKE :search", 
			"descripcion iLIKE :search", 
			"estado iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


