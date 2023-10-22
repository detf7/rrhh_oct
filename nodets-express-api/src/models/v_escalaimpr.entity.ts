
import { Entity, PrimaryColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'v_escalaimpr', schema: 'public' })
export default class V_Escalaimpr extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("v_escalaimpr");
	}
	
	@PrimaryColumn({name: 'costo_mes'})
	costo_mes: number

	@Column({name: 'nivel' })
	nivel: number
	
	@Column({name: 'tot_items' })
	tot_items: number
	
	@Column({name: 'haberbasico' })
	haberbasico: number
	
	@Column({name: 'financiero' })
	financiero: string
	
	@Column({name: 'categoria' })
	categoria: string
	
	@Column({name: 'codgestion' })
	codgestion: string
	
	@Column({name: 'denominaciones_por_nivel_y_financiero' })
	denominaciones_por_nivel_y_financiero: string
	
	
	
	static listFields(): string[]{
		return [
			"costo_mes", 
			"nivel", 
			"tot_items", 
			"haberbasico", 
			"financiero", 
			"categoria", 
			"codgestion", 
			"denominaciones_por_nivel_y_financiero"
		];
	}

	static exportListFields(): string[]{
		return [
			"costo_mes", 
			"nivel", 
			"tot_items", 
			"haberbasico", 
			"financiero", 
			"categoria", 
			"codgestion", 
			"denominaciones_por_nivel_y_financiero"
		];
	}

	static exportViewFields(): string[]{
		return [
			
		];
	}

	
	static searchFields(): string{
		const fields = [
			"financiero iLIKE :search", 
			"categoria iLIKE :search", 
			"codgestion iLIKE :search", 
			"denominaciones_por_nivel_y_financiero iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


