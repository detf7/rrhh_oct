
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_temporalvacacion', schema: 'public' })
export default class V_Temporalvacacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_temporalvacacion");
	}
	
	@PrimaryColumn({name: 'idregvacacion'})
	idregvacacion: number

	@Column({name: 'fingreso' })
	fingreso: string
	
	@Column({name: 'anio' })
	anio: number
	
	@Column({name: 'gestion' })
	gestion: number
	
	@Column({name: 'saldo' })
	saldo: number
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"idregvacacion", 
			"fingreso", 
			"anio", 
			"gestion", 
			"saldo", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"idregvacacion", 
			"fingreso", 
			"anio", 
			"gestion", 
			"saldo", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


