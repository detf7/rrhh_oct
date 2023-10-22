
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'evaluacion', schema: 'public' })
export default class Evaluacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("evaluacion");
	}
	
	@Column({name: 'valacademico' })
	valacademico: string
	
	@Column({name: 'valespecifica' })
	valespecifica: string
	
	@Column({name: 'valgeneral' })
	valgeneral: string
	
	@Column({name: 'resultado' })
	resultado: string
	
	@Column({name: 'detespecifica' })
	detespecifica: string
	
	@Column({name: 'detgeneral' })
	detgeneral: string
	
	@PrimaryColumn({name: 'idevaluacion'})
	idevaluacion: string

	@Column({name: 'observacion' })
	observacion: string
	
	
	
	static listFields(): string[]{
		return [
			"valacademico", 
			"valespecifica", 
			"valgeneral", 
			"resultado", 
			"detespecifica", 
			"detgeneral", 
			"idevaluacion", 
			"observacion"
		];
	}

	static exportListFields(): string[]{
		return [
			"valacademico", 
			"valespecifica", 
			"valgeneral", 
			"resultado", 
			"detespecifica", 
			"detgeneral", 
			"idevaluacion", 
			"observacion"
		];
	}

	static viewFields(): string[]{
		return [
			"valacademico", 
			"valespecifica", 
			"valgeneral", 
			"resultado", 
			"detespecifica", 
			"detgeneral", 
			"idevaluacion", 
			"observacion"
		];
	}

	static exportViewFields(): string[]{
		return [
			"valacademico", 
			"valespecifica", 
			"valgeneral", 
			"resultado", 
			"detespecifica", 
			"detgeneral", 
			"idevaluacion", 
			"observacion"
		];
	}

	static editFields(): string[]{
		return [
			"valacademico", 
			"valespecifica", 
			"valgeneral", 
			"resultado", 
			"detespecifica", 
			"detgeneral", 
			"idevaluacion", 
			"observacion"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"detespecifica iLIKE :search", 
			"detgeneral iLIKE :search", 
			"idevaluacion iLIKE :search", 
			"observacion iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


