
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'detitem', schema: 'public' })
export default class Detitem extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("detitem");
	}
	
	@Column({name: 'item' })
	item: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'codunidad' })
	codunidad: number
	
	@PrimaryGeneratedColumn({name: 'iditem'})
	iditem: number

	@Column({name: 'clasificacion' })
	clasificacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'claseglo' })
	claseglo: string
	
	@Column({name: 'nivelglo' })
	nivelglo: string
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'fechaCreacion' })
	fechacreacion: string
	
	@Column({name: 'fechaAct' })
	fechaact: string
	
	@Column({name: 'jefInmSup' })
	jefinmsup: string
	
	@Column({name: 'jefInmJer' })
	jefinmjer: string
	
	
	
	static listFields(): string[]{
		return [
			"item", 
			"habilitado", 
			"codunidad", 
			"iditem", 
			"clasificacion", 
			"codgestion", 
			"claseglo", 
			"nivelglo", 
			"cargopla", 
			"fechaCreacion AS fechacreacion", 
			"fechaAct AS fechaact", 
			"jefInmSup AS jefinmsup", 
			"jefInmJer AS jefinmjer"
		];
	}

	static exportListFields(): string[]{
		return [
			"item", 
			"habilitado", 
			"codunidad", 
			"iditem", 
			"clasificacion", 
			"codgestion", 
			"claseglo", 
			"nivelglo", 
			"cargopla", 
			"fechaCreacion AS fechacreacion", 
			"fechaAct AS fechaact", 
			"jefInmSup AS jefinmsup", 
			"jefInmJer AS jefinmjer"
		];
	}

	static viewFields(): string[]{
		return [
			"item", 
			"habilitado", 
			"codunidad", 
			"iditem", 
			"clasificacion", 
			"codgestion", 
			"claseglo", 
			"nivelglo", 
			"cargopla", 
			"fechaCreacion AS fechacreacion", 
			"fechaAct AS fechaact", 
			"jefInmSup AS jefinmsup", 
			"jefInmJer AS jefinmjer"
		];
	}

	static exportViewFields(): string[]{
		return [
			"item", 
			"habilitado", 
			"codunidad", 
			"iditem", 
			"clasificacion", 
			"codgestion", 
			"claseglo", 
			"nivelglo", 
			"cargopla", 
			"fechaCreacion AS fechacreacion", 
			"fechaAct AS fechaact", 
			"jefInmSup AS jefinmsup", 
			"jefInmJer AS jefinmjer"
		];
	}

	static editFields(): string[]{
		return [
			"item", 
			"habilitado", 
			"codunidad", 
			"iditem", 
			"clasificacion", 
			"codgestion", 
			"claseglo", 
			"nivelglo", 
			"cargopla", 
			"fechaCreacion AS fechacreacion", 
			"fechaAct AS fechaact", 
			"jefInmSup AS jefinmsup", 
			"jefInmJer AS jefinmjer"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"clasificacion iLIKE :search", 
			"codgestion iLIKE :search", 
			"claseglo iLIKE :search", 
			"nivelglo iLIKE :search", 
			"cargopla iLIKE :search", 
			"jefInmSup iLIKE :search", 
			"jefInmJer iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


