
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_npermanente', schema: 'public' })
export default class V_Npermanente extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_npermanente");
	}
	
	@PrimaryColumn({name: 'iditem'})
	iditem: number

	@Column({name: 'idpermanente' })
	idpermanente: number
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	
	
	static listFields(): string[]{
		return [
			"iditem", 
			"idpermanente", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombres", 
			"codgestion", 
			"idcarnet"
		];
	}

	static exportListFields(): string[]{
		return [
			"iditem", 
			"idpermanente", 
			"expedido", 
			"appaterno", 
			"apmaterno", 
			"nombres", 
			"codgestion", 
			"idcarnet"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"expedido iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"nombres iLIKE :search", 
			"codgestion iLIKE :search", 
			"idcarnet iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


