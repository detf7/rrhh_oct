
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'configuracion', schema: 'public' })
export default class Configuracion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("configuracion");
	}
	
	@PrimaryGeneratedColumn({name: 'idconf'})
	idconf: number

	@Column({name: 'refrigerio' })
	refrigerio: number
	
	@Column({name: 'descafp' })
	descafp: number
	
	@Column({name: 'desciva' })
	desciva: number
	
	@Column({name: 'frontera' })
	frontera: number
	
	@Column({name: 'minnacional' })
	minnacional: number
	
	@Column({name: 'tipocambio' })
	tipocambio: number
	
	
	
	static listFields(): string[]{
		return [
			"idconf", 
			"refrigerio", 
			"descafp", 
			"desciva", 
			"frontera", 
			"minnacional", 
			"tipocambio"
		];
	}

	static exportListFields(): string[]{
		return [
			"idconf", 
			"refrigerio", 
			"descafp", 
			"desciva", 
			"frontera", 
			"minnacional", 
			"tipocambio"
		];
	}

	static viewFields(): string[]{
		return [
			"idconf", 
			"refrigerio", 
			"descafp", 
			"desciva", 
			"frontera", 
			"minnacional", 
			"tipocambio"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idconf", 
			"refrigerio", 
			"descafp", 
			"desciva", 
			"frontera", 
			"minnacional", 
			"tipocambio"
		];
	}

	static editFields(): string[]{
		return [
			"idconf", 
			"refrigerio", 
			"descafp", 
			"desciva", 
			"frontera", 
			"minnacional", 
			"tipocambio"
		];
	}

	
	
	
}


