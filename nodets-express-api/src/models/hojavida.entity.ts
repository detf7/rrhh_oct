
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'hojavida', schema: 'public' })
export default class Hojavida extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("hojavida");
	}
	
	@Column({name: 'telefono' })
	telefono: number
	
	@Column({name: 'fnacimiento' })
	fnacimiento: string
	
	@PrimaryGeneratedColumn({name: 'idhoja'})
	idhoja: number

	@Column({name: 'correo' })
	correo: string
	
	@Column({name: 'estcivil' })
	estcivil: string
	
	@Column({name: 'direccion' })
	direccion: string
	
	@Column({name: 'genero' })
	genero: string
	
	@Column({name: 'militar' })
	militar: string
	
	@Column({name: 'fotografia' })
	fotografia: string
	
	@Column({name: 'archivo' })
	archivo: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'nacionalidad' })
	nacionalidad: string
	
	@Column({name: 'ciudad' })
	ciudad: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	
	
	static listFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"idhoja"
		];
	}

	static exportListFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"idhoja"
		];
	}

	static viewFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"idhoja"
		];
	}

	static exportViewFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"idhoja"
		];
	}

	static editFields(): string[]{
		return [
			"telefono", 
			"fnacimiento", 
			"correo", 
			"estcivil", 
			"direccion", 
			"genero", 
			"militar", 
			"fotografia", 
			"archivo", 
			"codusuario", 
			"nacionalidad", 
			"ciudad", 
			"codgestion", 
			"idhoja"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"correo iLIKE :search", 
			"estcivil iLIKE :search", 
			"direccion iLIKE :search", 
			"genero iLIKE :search", 
			"militar iLIKE :search", 
			"fotografia iLIKE :search", 
			"archivo iLIKE :search", 
			"codusuario iLIKE :search", 
			"nacionalidad iLIKE :search", 
			"ciudad iLIKE :search", 
			"codgestion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


