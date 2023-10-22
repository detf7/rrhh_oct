
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plasalario', schema: 'public' })
export default class Plasalario extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plasalario");
	}
	
	@Column({name: 'codpla' })
	codpla: number
	
	@Column({name: 'cargos' })
	cargos: string
	
	@Column({name: 'salarios' })
	salarios: string
	
	@Column({name: 'ausencia' })
	ausencia: number
	
	@Column({name: 'atraso' })
	atraso: number
	
	@Column({name: 'sminimo' })
	sminimo: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'tsalario' })
	tsalario: number
	
	@Column({name: 'tdescuento' })
	tdescuento: number
	
	@PrimaryGeneratedColumn({name: 'idplasalario'})
	idplasalario: number

	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'dias' })
	dias: number
	
	@Column({name: 'cas' })
	cas: number
	
	@Column({name: 'mantiguedad' })
	mantiguedad: number
	
	@Column({name: 'frontera' })
	frontera: number
	
	@Column({name: 'abandono' })
	abandono: number
	
	@Column({name: 'falta' })
	falta: number
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	
	
	static listFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"salarios", 
			"ausencia", 
			"atraso", 
			"sminimo", 
			"haberbasico", 
			"tsalario", 
			"tdescuento", 
			"idplasalario", 
			"codunidad", 
			"dias", 
			"cas", 
			"mantiguedad", 
			"frontera", 
			"abandono", 
			"falta", 
			"unidad", 
			"codusuario", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"glosa"
		];
	}

	static exportListFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"salarios", 
			"ausencia", 
			"atraso", 
			"sminimo", 
			"haberbasico", 
			"tsalario", 
			"tdescuento", 
			"idplasalario", 
			"codunidad", 
			"dias", 
			"cas", 
			"mantiguedad", 
			"frontera", 
			"abandono", 
			"falta", 
			"unidad", 
			"codusuario", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"glosa"
		];
	}

	static viewFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"salarios", 
			"ausencia", 
			"atraso", 
			"sminimo", 
			"haberbasico", 
			"tsalario", 
			"tdescuento", 
			"idplasalario", 
			"codunidad", 
			"dias", 
			"cas", 
			"mantiguedad", 
			"frontera", 
			"abandono", 
			"falta", 
			"unidad", 
			"codusuario", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"glosa"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"salarios", 
			"ausencia", 
			"atraso", 
			"sminimo", 
			"haberbasico", 
			"tsalario", 
			"tdescuento", 
			"idplasalario", 
			"codunidad", 
			"dias", 
			"cas", 
			"mantiguedad", 
			"frontera", 
			"abandono", 
			"falta", 
			"unidad", 
			"codusuario", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"glosa"
		];
	}

	static editFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"salarios", 
			"ausencia", 
			"atraso", 
			"sminimo", 
			"haberbasico", 
			"tsalario", 
			"tdescuento", 
			"idplasalario", 
			"codunidad", 
			"dias", 
			"cas", 
			"mantiguedad", 
			"frontera", 
			"abandono", 
			"falta", 
			"unidad", 
			"codusuario", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"glosa"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"unidad iLIKE :search", 
			"codusuario iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"motivo iLIKE :search", 
			"tipo iLIKE :search", 
			"glosa iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


