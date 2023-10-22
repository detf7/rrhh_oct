
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detallepedido', schema: 'public' })
export default class Detallepedido extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detallepedido");
	}
	
	@PrimaryGeneratedColumn({name: 'iddetpedido'})
	iddetpedido: number

	@Column({name: 'cantidad' })
	cantidad: number
	
	@Column({name: 'codmaterial' })
	codmaterial: string
	
	@Column({name: 'codpedido' })
	codpedido: string
	
	
	
	static listFields(): string[]{
		return [
			"iddetpedido", 
			"cantidad", 
			"codmaterial", 
			"codpedido"
		];
	}

	static exportListFields(): string[]{
		return [
			"iddetpedido", 
			"cantidad", 
			"codmaterial", 
			"codpedido"
		];
	}

	static viewFields(): string[]{
		return [
			"iddetpedido", 
			"cantidad", 
			"codmaterial", 
			"codpedido"
		];
	}

	static exportViewFields(): string[]{
		return [
			"iddetpedido", 
			"cantidad", 
			"codmaterial", 
			"codpedido"
		];
	}

	static editFields(): string[]{
		return [
			"iddetpedido", 
			"cantidad", 
			"codmaterial", 
			"codpedido"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codmaterial iLIKE :search", 
			"codpedido iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


