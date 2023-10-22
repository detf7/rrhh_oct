
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'estudios', schema: 'public' })
export default class Estudios extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("estudios");
	}
	
	@PrimaryGeneratedColumn({name: 'idestudio'})
	idestudio: number

	@Column({name: 'codhoja' })
	codhoja: number
	
	@Column({name: 'institucion' })
	institucion: string
	
	@Column({name: 'area' })
	area: string
	
	@Column({name: 'nivel' })
	nivel: string
	
	@Column({name: 'g_inicio' })
	g_inicio: string
	
	@Column({name: 'g_fin' })
	g_fin: string
	
	@Column({name: 'titulo' })
	titulo: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"idestudio", 
			"codhoja", 
			"institucion", 
			"area", 
			"nivel", 
			"g_inicio", 
			"g_fin", 
			"titulo", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"idestudio", 
			"codhoja", 
			"institucion", 
			"area", 
			"nivel", 
			"g_inicio", 
			"g_fin", 
			"titulo", 
			"tipo"
		];
	}

	static viewFields(): string[]{
		return [
			"idestudio", 
			"codhoja", 
			"institucion", 
			"area", 
			"nivel", 
			"g_inicio", 
			"g_fin", 
			"titulo", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idestudio", 
			"codhoja", 
			"institucion", 
			"area", 
			"nivel", 
			"g_inicio", 
			"g_fin", 
			"titulo", 
			"tipo"
		];
	}

	static editFields(): string[]{
		return [
			"idestudio", 
			"codhoja", 
			"institucion", 
			"area", 
			"nivel", 
			"g_inicio", 
			"g_fin", 
			"titulo", 
			"tipo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"institucion iLIKE :search", 
			"area iLIKE :search", 
			"nivel iLIKE :search", 
			"g_inicio iLIKE :search", 
			"g_fin iLIKE :search", 
			"titulo iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


