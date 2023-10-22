
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_perfil', schema: 'public' })
export default class V_Perfil extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_perfil");
	}
	
	@PrimaryColumn({name: 'editar'})
	editar: string

	@Column({name: 'permisos' })
	permisos: string
	
	@Column({name: 'usuario' })
	usuario: string
	
	@Column({name: 'theme' })
	theme: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'fotografia' })
	fotografia: string
	
	@Column({name: 'nombreyap' })
	nombreyap: string
	
	
	
	static listFields(): string[]{
		return [
			"editar", 
			"permisos", 
			"usuario", 
			"theme", 
			"estado", 
			"idcarnet", 
			"fotografia", 
			"nombreyap"
		];
	}

	static exportListFields(): string[]{
		return [
			"editar", 
			"permisos", 
			"usuario", 
			"theme", 
			"estado", 
			"idcarnet", 
			"fotografia", 
			"nombreyap"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"usuario iLIKE :search", 
			"theme iLIKE :search", 
			"estado iLIKE :search", 
			"idcarnet iLIKE :search", 
			"fotografia iLIKE :search", 
			"nombreyap iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


