
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'comunicados', schema: 'public' })
export default class Comunicados extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("comunicados");
	}
	
	@Column({name: 'fechacom' })
	fechacom: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@PrimaryGeneratedColumn({name: 'idcomunicado'})
	idcomunicado: number

	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'archivo' })
	archivo: string
	
	@Column({name: 'codigo' })
	codigo: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"fechacom", 
			"fecha", 
			"idcomunicado", 
			"codusuario", 
			"archivo", 
			"codigo", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"fechacom", 
			"fecha", 
			"idcomunicado", 
			"codusuario", 
			"archivo", 
			"codigo", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"fechacom", 
			"fecha", 
			"idcomunicado", 
			"codusuario", 
			"archivo", 
			"codigo", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"fechacom", 
			"fecha", 
			"idcomunicado", 
			"codusuario", 
			"archivo", 
			"codigo", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"fechacom", 
			"fecha", 
			"idcomunicado", 
			"codusuario", 
			"archivo", 
			"codigo", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"archivo iLIKE :search", 
			"codigo iLIKE :search", 
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


