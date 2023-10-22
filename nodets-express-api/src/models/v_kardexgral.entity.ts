
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_kardexgral', schema: 'public' })
export default class V_Kardexgral extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_kardexgral");
	}
	
	@PrimaryColumn({name: 'experiencia'})
	experiencia: number

	@Column({name: 'editar' })
	editar: string
	
	@Column({name: 'telefono' })
	telefono: number
	
	@Column({name: 'cursos' })
	cursos: number
	
	@Column({name: 'estudios' })
	estudios: number
	
	@Column({name: 'genero' })
	genero: string
	
	@Column({name: 'edad' })
	edad: string
	
	@Column({name: 'ciudad' })
	ciudad: string
	
	@Column({name: 'idcarnet' })
	idcarnet: string
	
	@Column({name: 'correo' })
	correo: string
	
	@Column({name: 'estcivil' })
	estcivil: string
	
	@Column({name: 'direccion' })
	direccion: string
	
	@Column({name: 'nombres' })
	nombres: string
	
	@Column({name: 'appaterno' })
	appaterno: string
	
	@Column({name: 'apmaterno' })
	apmaterno: string
	
	@Column({name: 'estado' })
	estado: string
	
	
	
	static listFields(): string[]{
		return [
			"experiencia", 
			"editar", 
			"telefono", 
			"cursos", 
			"estudios", 
			"genero", 
			"edad", 
			"ciudad", 
			"idcarnet", 
			"correo", 
			"estcivil", 
			"direccion", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"estado"
		];
	}

	static exportListFields(): string[]{
		return [
			"experiencia", 
			"editar", 
			"telefono", 
			"cursos", 
			"estudios", 
			"genero", 
			"edad", 
			"ciudad", 
			"idcarnet", 
			"correo", 
			"estcivil", 
			"direccion", 
			"nombres", 
			"appaterno", 
			"apmaterno", 
			"estado"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"genero iLIKE :search", 
			"edad iLIKE :search", 
			"ciudad iLIKE :search", 
			"idcarnet iLIKE :search", 
			"correo iLIKE :search", 
			"estcivil iLIKE :search", 
			"direccion iLIKE :search", 
			"nombres iLIKE :search", 
			"appaterno iLIKE :search", 
			"apmaterno iLIKE :search", 
			"estado iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


