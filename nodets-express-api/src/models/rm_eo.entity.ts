
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'rm_eo', schema: 'public' })
export default class Rm_Eo extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("rm_eo");
	}
	
	@PrimaryGeneratedColumn({name: 'id_rm'})
	id_rm: number

	@Column({name: 'fecha_reg' })
	fecha_reg: string
	
	@Column({name: 'descripcion' })
	descripcion: string
	
	@Column({name: 'cod_gestion_rm' })
	cod_gestion_rm: string
	
	
	
	static listFields(): string[]{
		return [
			"id_rm", 
			"fecha_reg", 
			"descripcion", 
			"cod_gestion_rm"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_rm", 
			"fecha_reg", 
			"descripcion", 
			"cod_gestion_rm"
		];
	}

	static viewFields(): string[]{
		return [
			"id_rm", 
			"fecha_reg", 
			"descripcion", 
			"cod_gestion_rm"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_rm", 
			"fecha_reg", 
			"descripcion", 
			"cod_gestion_rm"
		];
	}

	static editFields(): string[]{
		return [
			"id_rm", 
			"fecha_reg", 
			"descripcion", 
			"cod_gestion_rm"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"descripcion iLIKE :search", 
			"cod_gestion_rm iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


