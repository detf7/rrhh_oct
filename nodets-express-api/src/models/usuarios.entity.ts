
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'usuarios', schema: 'public' })
export default class Usuarios extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("usuarios");
	}
	
	@Column({name: 'user_role_id' })
	user_role_id: number
	
	@Column({name: 'permisos' })
	permisos: string
	
	@Column({name: 'editar' })
	editar: string
	
	@Column({name: 'jsonunidad' })
	jsonunidad: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'usuario' })
	usuario: string
	
	@Column({name: 'clave' })
	clave: string
	
	@Column({name: 'foto' })
	foto: string
	
	@Column({name: 'theme' })
	theme: string
	
	@Column({name: 'estado' })
	estado: string
	
	@Column({name: 'account_status' })
	account_status: string
	
	@PrimaryColumn({name: 'idcarnet'})
	idcarnet: string

	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"user_role_id", 
			"permisos", 
			"editar", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"clave", 
			"foto", 
			"theme", 
			"estado", 
			"account_status", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"user_role_id", 
			"permisos", 
			"editar", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"clave", 
			"foto", 
			"theme", 
			"estado", 
			"account_status", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static viewFields(): string[]{
		return [
			"user_role_id", 
			"permisos", 
			"editar", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"clave", 
			"foto", 
			"theme", 
			"estado", 
			"account_status", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			"user_role_id", 
			"permisos", 
			"editar", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"clave", 
			"foto", 
			"theme", 
			"estado", 
			"account_status", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	static editFields(): string[]{
		return [
			"user_role_id", 
			"permisos", 
			"editar", 
			"jsonunidad", 
			"apmaterno", 
			"usuario", 
			"clave", 
			"foto", 
			"theme", 
			"estado", 
			"account_status", 
			"idcarnet", 
			"expedido", 
			"nombres", 
			"appaterno"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"apmaterno iLIKE :search", 
			"usuario iLIKE :search", 
			"clave iLIKE :search", 
			"foto iLIKE :search", 
			"theme iLIKE :search", 
			"estado iLIKE :search", 
			"account_status iLIKE :search", 
			"idcarnet iLIKE :search", 
			"expedido iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


