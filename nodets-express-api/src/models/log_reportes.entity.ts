
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'log_reportes', schema: 'public' })
export default class Log_Reportes extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("log_reportes");
	}
	
	@Column({name: 'feccumple' })
	feccumple: number
	
	@Column({name: 'vacaciones' })
	vacaciones: number
	
	@Column({name: 'cviajes' })
	cviajes: number
	
	@Column({name: 'bmedicas' })
	bmedicas: number
	
	@Column({name: 'singocehaber' })
	singocehaber: number
	
	@PrimaryGeneratedColumn({name: 'id_log_reporte'})
	id_log_reporte: number

	@Column({name: 'fecha_reporte' })
	fecha_reporte: string
	
	@Column({name: 'falta' })
	falta: number
	
	@Column({name: 'abandono' })
	abandono: number
	
	@Column({name: 'atraso' })
	atraso: number
	
	@Column({name: 'clave' })
	clave: string
	
	@Column({name: 'usuario_reporte' })
	usuario_reporte: string
	
	@Column({name: 'fecha_reporte_cadena' })
	fecha_reporte_cadena: string
	
	@Column({name: 'documento_identidad' })
	documento_identidad: string
	
	@Column({name: 'nombre_completo' })
	nombre_completo: string
	
	
	
	static listFields(): string[]{
		return [
			"feccumple", 
			"vacaciones", 
			"cviajes", 
			"bmedicas", 
			"singocehaber", 
			"id_log_reporte", 
			"fecha_reporte", 
			"falta", 
			"abandono", 
			"atraso", 
			"clave", 
			"usuario_reporte", 
			"fecha_reporte_cadena", 
			"documento_identidad", 
			"nombre_completo"
		];
	}

	static exportListFields(): string[]{
		return [
			"feccumple", 
			"vacaciones", 
			"cviajes", 
			"bmedicas", 
			"singocehaber", 
			"id_log_reporte", 
			"fecha_reporte", 
			"falta", 
			"abandono", 
			"atraso", 
			"clave", 
			"usuario_reporte", 
			"fecha_reporte_cadena", 
			"documento_identidad", 
			"nombre_completo"
		];
	}

	static viewFields(): string[]{
		return [
			"feccumple", 
			"vacaciones", 
			"cviajes", 
			"bmedicas", 
			"singocehaber", 
			"id_log_reporte", 
			"fecha_reporte", 
			"falta", 
			"abandono", 
			"atraso", 
			"clave", 
			"usuario_reporte", 
			"fecha_reporte_cadena", 
			"documento_identidad", 
			"nombre_completo"
		];
	}

	static exportViewFields(): string[]{
		return [
			"feccumple", 
			"vacaciones", 
			"cviajes", 
			"bmedicas", 
			"singocehaber", 
			"id_log_reporte", 
			"fecha_reporte", 
			"falta", 
			"abandono", 
			"atraso", 
			"clave", 
			"usuario_reporte", 
			"fecha_reporte_cadena", 
			"documento_identidad", 
			"nombre_completo"
		];
	}

	static editFields(): string[]{
		return [
			"feccumple", 
			"vacaciones", 
			"cviajes", 
			"bmedicas", 
			"singocehaber", 
			"id_log_reporte", 
			"fecha_reporte", 
			"falta", 
			"abandono", 
			"atraso", 
			"clave", 
			"usuario_reporte", 
			"fecha_reporte_cadena", 
			"documento_identidad", 
			"nombre_completo"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"clave iLIKE :search", 
			"usuario_reporte iLIKE :search", 
			"fecha_reporte_cadena iLIKE :search", 
			"documento_identidad iLIKE :search", 
			"nombre_completo iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


