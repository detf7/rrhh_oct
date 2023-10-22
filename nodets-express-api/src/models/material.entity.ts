
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'material', schema: 'public' })
export default class Material extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("material");
	}
	
	@Column({name: 'minimo' })
	minimo: number
	
	@Column({name: 'visible' })
	visible: string
	
	@Column({name: 'codcategoria' })
	codcategoria: number
	
	@Column({name: 'codmedida' })
	codmedida: number
	
	@PrimaryColumn({name: 'idmaterial'})
	idmaterial: string

	@Column({name: 'detalle' })
	detalle: string
	
	
	
	static listFields(): string[]{
		return [
			"minimo", 
			"visible", 
			"codcategoria", 
			"codmedida", 
			"idmaterial", 
			"detalle"
		];
	}

	static exportListFields(): string[]{
		return [
			"minimo", 
			"visible", 
			"codcategoria", 
			"codmedida", 
			"idmaterial", 
			"detalle"
		];
	}

	static viewFields(): string[]{
		return [
			"minimo", 
			"visible", 
			"codcategoria", 
			"codmedida", 
			"idmaterial", 
			"detalle"
		];
	}

	static exportViewFields(): string[]{
		return [
			"minimo", 
			"visible", 
			"codcategoria", 
			"codmedida", 
			"idmaterial", 
			"detalle"
		];
	}

	static editFields(): string[]{
		return [
			"minimo", 
			"visible", 
			"codcategoria", 
			"codmedida", 
			"idmaterial", 
			"detalle"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"idmaterial iLIKE :search", 
			"detalle iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


