
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'planillatemporal', schema: 'public' })
export default class Planillatemporal extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("planillatemporal");
	}
	
	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'finicio' })
	finicio: string
	
	@Column({name: 'ffinal' })
	ffinal: string
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'monto' })
	monto: number
	
	@Column({name: 'salario' })
	salario: string
	
	@PrimaryGeneratedColumn({name: 'idplatmp'})
	idplatmp: number

	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'cargos' })
	cargos: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	
	
	static listFields(): string[]{
		return [
			"dias", 
			"finicio", 
			"ffinal", 
			"haberbasico", 
			"monto", 
			"salario", 
			"idplatmp", 
			"codunidad", 
			"cargos", 
			"codusuario", 
			"financiero", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo"
		];
	}

	static exportListFields(): string[]{
		return [
			"dias", 
			"finicio", 
			"ffinal", 
			"haberbasico", 
			"monto", 
			"salario", 
			"idplatmp", 
			"codunidad", 
			"cargos", 
			"codusuario", 
			"financiero", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo"
		];
	}

	static viewFields(): string[]{
		return [
			"dias", 
			"finicio", 
			"ffinal", 
			"haberbasico", 
			"monto", 
			"salario", 
			"idplatmp", 
			"codunidad", 
			"cargos", 
			"codusuario", 
			"financiero", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"dias", 
			"finicio", 
			"ffinal", 
			"haberbasico", 
			"monto", 
			"salario", 
			"idplatmp", 
			"codunidad", 
			"cargos", 
			"codusuario", 
			"financiero", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo"
		];
	}

	static editFields(): string[]{
		return [
			"dias", 
			"finicio", 
			"ffinal", 
			"haberbasico", 
			"monto", 
			"salario", 
			"idplatmp", 
			"codunidad", 
			"cargos", 
			"codusuario", 
			"financiero", 
			"unidad", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"codusuario iLIKE :search", 
			"financiero iLIKE :search", 
			"unidad iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"motivo iLIKE :search", 
			"tipo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


