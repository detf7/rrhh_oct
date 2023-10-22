
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'users', schema: 'public' })
export default class Users extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("users");
	}
	
	@Column({name: 'permisos' })
	permisos: string
	
	@Column({name: 'user_role_id' })
	user_role_id: number
	
	@Column({name: 'jsonunidad' })
	jsonunidad: string
	
	@PrimaryColumn({name: 'id'})
	id: number

	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'usuario' })
	usuario: string
	
	@Column({name: 'password' })
	password: string
	
	@Column({name: 'foto' })
	foto: string
	
	@Column({name: 'email' })
	email: string
	
	@Column({name: 'telefono' })
	telefono: string
	
	@Column({name: 'carnet' })
	carnet: string
	
	@Column({name: 'expedido' })
	expedido: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	
	
	static listFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static exportListFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static viewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static exportViewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static accounteditFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static accountviewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static exportAccountviewFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"email", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	static editFields(): string[]{
		return [
			"permisos", 
			"user_role_id", 
			"jsonunidad", 
			"id", 
			"apmaterno", 
			"usuario", 
			"foto", 
			"telefono", 
			"carnet", 
			"expedido", 
			"appaterno"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"apmaterno iLIKE :search", 
			"usuario iLIKE :search", 
			"email iLIKE :search", 
			"telefono iLIKE :search", 
			"carnet iLIKE :search", 
			"expedido iLIKE :search", 
			"appaterno iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


declare global {
	namespace Express {
		interface User extends Users {
			roleName: any
		}
	}
}


