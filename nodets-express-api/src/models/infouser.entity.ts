
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'infouser', schema: 'public' })
export default class Infouser extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("infouser");
	}
	
	@Column({name: 'frontera' })
	frontera: string
	
	@Column({name: 'fingreso' })
	fingreso: string
	
	@Column({name: 'autovac' })
	autovac: string
	
	@Column({name: 'cbancaria' })
	cbancaria: number
	
	@Column({name: 'nativo' })
	nativo: string
	
	@Column({name: 'visible' })
	visible: string
	
	@PrimaryGeneratedColumn({name: 'idinfo'})
	idinfo: number

	@Column({name: 'ley1178' })
	ley1178: string
	
	@Column({name: 'ppublicas' })
	ppublicas: string
	
	@Column({name: 'rpfpublica' })
	rpfpublica: string
	
	@Column({name: 'rejap' })
	rejap: string
	
	@Column({name: 'frejap' })
	frejap: string
	
	@Column({name: 'sipasse' })
	sipasse: string
	
	@Column({name: 'fsipasse' })
	fsipasse: string
	
	@Column({name: 'hojavida' })
	hojavida: string
	
	@Column({name: 'incompatibilidad' })
	incompatibilidad: string
	
	@Column({name: 'cnacimiento' })
	cnacimiento: string
	
	@Column({name: 'nua' })
	nua: number
	
	@Column({name: 'afp' })
	afp: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	
	
	static listFields(): string[]{
		return [
			"frontera", 
			"fingreso", 
			"autovac", 
			"cbancaria", 
			"nativo", 
			"visible", 
			"idinfo", 
			"ley1178", 
			"ppublicas", 
			"rpfpublica", 
			"rejap", 
			"frejap", 
			"sipasse", 
			"fsipasse", 
			"hojavida", 
			"incompatibilidad", 
			"cnacimiento", 
			"nua", 
			"afp", 
			"glosa", 
			"codusuario"
		];
	}

	static exportListFields(): string[]{
		return [
			"frontera", 
			"fingreso", 
			"autovac", 
			"cbancaria", 
			"nativo", 
			"visible", 
			"idinfo", 
			"ley1178", 
			"ppublicas", 
			"rpfpublica", 
			"rejap", 
			"frejap", 
			"sipasse", 
			"fsipasse", 
			"hojavida", 
			"incompatibilidad", 
			"cnacimiento", 
			"nua", 
			"afp", 
			"glosa", 
			"codusuario"
		];
	}

	static viewFields(): string[]{
		return [
			"frontera", 
			"fingreso", 
			"autovac", 
			"cbancaria", 
			"nativo", 
			"visible", 
			"idinfo", 
			"ley1178", 
			"ppublicas", 
			"rpfpublica", 
			"rejap", 
			"frejap", 
			"sipasse", 
			"fsipasse", 
			"hojavida", 
			"incompatibilidad", 
			"cnacimiento", 
			"nua", 
			"afp", 
			"glosa", 
			"codusuario"
		];
	}

	static exportViewFields(): string[]{
		return [
			"frontera", 
			"fingreso", 
			"autovac", 
			"cbancaria", 
			"nativo", 
			"visible", 
			"idinfo", 
			"ley1178", 
			"ppublicas", 
			"rpfpublica", 
			"rejap", 
			"frejap", 
			"sipasse", 
			"fsipasse", 
			"hojavida", 
			"incompatibilidad", 
			"cnacimiento", 
			"nua", 
			"afp", 
			"glosa", 
			"codusuario"
		];
	}

	static editFields(): string[]{
		return [
			"frontera", 
			"fingreso", 
			"autovac", 
			"cbancaria", 
			"nativo", 
			"visible", 
			"idinfo", 
			"ley1178", 
			"ppublicas", 
			"rpfpublica", 
			"rejap", 
			"frejap", 
			"sipasse", 
			"fsipasse", 
			"hojavida", 
			"incompatibilidad", 
			"cnacimiento", 
			"nua", 
			"afp", 
			"glosa", 
			"codusuario"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"afp iLIKE :search", 
			"glosa iLIKE :search", 
			"codusuario iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


