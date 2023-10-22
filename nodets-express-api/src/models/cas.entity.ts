
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'cas', schema: 'public' })
export default class Cas extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("cas");
	}
	
	@PrimaryColumn({name: 'id_cas'})
	id_cas: number

	@Column({name: 'fecha_recepcion' })
	fecha_recepcion: string
	
	@Column({name: 'fecha_registro' })
	fecha_registro: string
	
	@Column({name: 'anios_serv' })
	anios_serv: number
	
	@Column({name: 'meses_serv' })
	meses_serv: number
	
	@Column({name: 'dias_serv' })
	dias_serv: number
	
	@Column({name: 'tot_servicio' })
	tot_servicio: number
	
	@Column({name: 'fecha_ini_servicio' })
	fecha_ini_servicio: string
	
	@Column({name: 'fecha_fin_servicio' })
	fecha_fin_servicio: string
	
	@Column({name: 'dato_cas' })
	dato_cas: string
	
	@Column({name: 'descripcion_cas' })
	descripcion_cas: string
	
	@Column({name: 'entidad_cas' })
	entidad_cas: string
	
	@Column({name: 'idpermanente' })
	idpermanente: number
	
	@Column({name: 'monto_cas' })
	monto_cas: number
	
	@Column({name: 'incremento' })
	incremento: number
	
	
	
	static listFields(): string[]{
		return [
			"id_cas", 
			"idpermanente", 
			"dato_cas", 
			"fecha_recepcion", 
			"anios_serv", 
			"meses_serv", 
			"dias_serv", 
			"monto_cas", 
			"incremento"
		];
	}

	static exportListFields(): string[]{
		return [
			"id_cas", 
			"idpermanente", 
			"dato_cas", 
			"fecha_recepcion", 
			"anios_serv", 
			"meses_serv", 
			"dias_serv", 
			"monto_cas", 
			"incremento"
		];
	}

	static viewFields(): string[]{
		return [
			"id_cas", 
			"fecha_recepcion", 
			"fecha_registro", 
			"anios_serv", 
			"meses_serv", 
			"dias_serv", 
			"tot_servicio", 
			"fecha_ini_servicio", 
			"fecha_fin_servicio", 
			"dato_cas", 
			"descripcion_cas", 
			"entidad_cas", 
			"idpermanente", 
			"monto_cas", 
			"incremento"
		];
	}

	static exportViewFields(): string[]{
		return [
			"id_cas", 
			"fecha_recepcion", 
			"fecha_registro", 
			"anios_serv", 
			"meses_serv", 
			"dias_serv", 
			"tot_servicio", 
			"fecha_ini_servicio", 
			"fecha_fin_servicio", 
			"dato_cas", 
			"descripcion_cas", 
			"entidad_cas", 
			"idpermanente", 
			"monto_cas", 
			"incremento"
		];
	}

	static editFields(): string[]{
		return [
			"idpermanente", 
			"dato_cas", 
			"fecha_recepcion", 
			"anios_serv", 
			"meses_serv", 
			"dias_serv", 
			"descripcion_cas", 
			"monto_cas", 
			"incremento", 
			"id_cas"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"entidad_cas iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


