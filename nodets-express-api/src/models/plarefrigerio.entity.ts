
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'plarefrigerio', schema: 'public' })
export default class Plarefrigerio extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("plarefrigerio");
	}
	
	@Column({name: 'codpla' })
	codpla: number
	
	@Column({name: 'cargos' })
	cargos: string
	
	@Column({name: 'montodia' })
	montodia: number
	
	@Column({name: 'falta' })
	falta: number
	
	@Column({name: 'abandono' })
	abandono: number
	
	@Column({name: 'ausencia' })
	ausencia: number
	
	@Column({name: 'boleta' })
	boleta: number
	
	@Column({name: 'total' })
	total: number
	
	@PrimaryGeneratedColumn({name: 'idplarefri'})
	idplarefri: number

	@Column({name: 'codunidad' })
	codunidad: number
	
	@Column({name: 'diastrabajo' })
	diastrabajo: number
	
	@Column({name: 'unidad' })
	unidad: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'motivo' })
	motivo: string
	
	@Column({name: 'tipo' })
	tipo: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"montodia", 
			"falta", 
			"abandono", 
			"ausencia", 
			"boleta", 
			"total", 
			"idplarefri", 
			"codunidad", 
			"diastrabajo", 
			"unidad", 
			"glosa", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"montodia", 
			"falta", 
			"abandono", 
			"ausencia", 
			"boleta", 
			"total", 
			"idplarefri", 
			"codunidad", 
			"diastrabajo", 
			"unidad", 
			"glosa", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"montodia", 
			"falta", 
			"abandono", 
			"ausencia", 
			"boleta", 
			"total", 
			"idplarefri", 
			"codunidad", 
			"diastrabajo", 
			"unidad", 
			"glosa", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"montodia", 
			"falta", 
			"abandono", 
			"ausencia", 
			"boleta", 
			"total", 
			"idplarefri", 
			"codunidad", 
			"diastrabajo", 
			"unidad", 
			"glosa", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"codpla", 
			"cargos", 
			"montodia", 
			"falta", 
			"abandono", 
			"ausencia", 
			"boleta", 
			"total", 
			"idplarefri", 
			"codunidad", 
			"diastrabajo", 
			"unidad", 
			"glosa", 
			"cargopla", 
			"denominacion", 
			"motivo", 
			"tipo", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"unidad iLIKE :search", 
			"glosa iLIKE :search", 
			"cargopla iLIKE :search", 
			"denominacion iLIKE :search", 
			"motivo iLIKE :search", 
			"tipo iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


