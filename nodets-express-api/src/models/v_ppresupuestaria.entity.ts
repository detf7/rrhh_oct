
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_ppresupuestaria', schema: 'public' })
export default class V_Ppresupuestaria extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_ppresupuestaria");
	}
	
	@PrimaryColumn({name: 'idunidad'})
	idunidad: number

	@Column({name: 'item' })
	item: number
	
	@Column({name: 'habilitado' })
	habilitado: string
	
	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'iditem' })
	iditem: number
	
	@Column({name: 'cargopla' })
	cargopla: string
	
	@Column({name: 'clasificacion' })
	clasificacion: string
	
	@Column({name: 'denominacion' })
	denominacion: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'claseglo' })
	claseglo: string
	
	@Column({name: 'nivelglo' })
	nivelglo: string
	
	@Column({name: 'org1' })
	org1: string
	
	@Column({name: 'org2' })
	org2: string
	
	@Column({name: 'unidad' })
	unidad: string
	
	
	
	static listFields(): string[]{
		return [
			"idunidad", 
			"item", 
			"habilitado", 
			"nivel", 
			"haberbasico", 
			"iditem", 
			"cargopla", 
			"clasificacion", 
			"denominacion", 
			"codgestion", 
			"financiero", 
			"claseglo", 
			"nivelglo", 
			"org1", 
			"org2", 
			"unidad"
		];
	}

	static exportListFields(): string[]{
		return [
			"idunidad", 
			"item", 
			"habilitado", 
			"nivel", 
			"haberbasico", 
			"iditem", 
			"cargopla", 
			"clasificacion", 
			"denominacion", 
			"codgestion", 
			"financiero", 
			"claseglo", 
			"nivelglo", 
			"org1", 
			"org2", 
			"unidad"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"cargopla iLIKE :search", 
			"clasificacion iLIKE :search", 
			"denominacion iLIKE :search", 
			"codgestion iLIKE :search", 
			"financiero iLIKE :search", 
			"claseglo iLIKE :search", 
			"nivelglo iLIKE :search", 
			"org1 iLIKE :search", 
			"org2 iLIKE :search", 
			"unidad iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


