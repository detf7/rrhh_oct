
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'categoria', schema: 'public' })
export default class Categoria extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("categoria");
	}
	
	@PrimaryGeneratedColumn({name: 'idcategoria'})
	idcategoria: number

	@Column({name: 'codigo' })
	codigo: string
	
	@Column({name: 'detalle' })
	detalle: string
	
	@Column({name: 'prefijo' })
	prefijo: string
	
	
	
	static listFields(): string[]{
		return [
			"idcategoria", 
			"codigo", 
			"detalle", 
			"prefijo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idcategoria", 
			"codigo", 
			"detalle", 
			"prefijo"
		];
	}

	static viewFields(): string[]{
		return [
			"idcategoria", 
			"codigo", 
			"detalle", 
			"prefijo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idcategoria", 
			"codigo", 
			"detalle", 
			"prefijo"
		];
	}

	static editFields(): string[]{
		return [
			"idcategoria", 
			"codigo", 
			"detalle", 
			"prefijo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codigo iLIKE :search", 
			"detalle iLIKE :search", 
			"prefijo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


