
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'decjurada', schema: 'public' })
export default class Decjurada extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("decjurada");
	}
	
	@Column({name: 'gestion' })
	gestion: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'tercero' })
	tercero: string
	
	@PrimaryColumn({name: 'idjurada'})
	idjurada: string

	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'primero' })
	primero: string
	
	@Column({name: 'segundo' })
	segundo: string
	
	
	
	static listFields(): string[]{
		return [
			"gestion", 
			"habilitado", 
			"fecha", 
			"tercero", 
			"idjurada", 
			"codusuario", 
			"primero", 
			"segundo"
		];
	}

	static exportListFields(): string[]{
		return [
			"gestion", 
			"habilitado", 
			"fecha", 
			"tercero", 
			"idjurada", 
			"codusuario", 
			"primero", 
			"segundo"
		];
	}

	static viewFields(): string[]{
		return [
			"gestion", 
			"habilitado", 
			"fecha", 
			"tercero", 
			"idjurada", 
			"codusuario", 
			"primero", 
			"segundo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"gestion", 
			"habilitado", 
			"fecha", 
			"tercero", 
			"idjurada", 
			"codusuario", 
			"primero", 
			"segundo"
		];
	}

	static editFields(): string[]{
		return [
			"gestion", 
			"habilitado", 
			"fecha", 
			"tercero", 
			"idjurada", 
			"codusuario", 
			"primero", 
			"segundo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"tercero iLIKE :search", 
			"idjurada iLIKE :search", 
			"codusuario iLIKE :search", 
			"primero iLIKE :search", 
			"segundo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


