
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'parentesco', schema: 'public' })
export default class Parentesco extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("parentesco");
	}
	
	@PrimaryGeneratedColumn({name: 'idparentesco'})
	idparentesco: number

	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"idparentesco", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"detalle", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"detalle iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


