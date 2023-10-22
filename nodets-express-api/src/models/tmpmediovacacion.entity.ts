
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'tmpmediovacacion', schema: 'public' })
export default class Tmpmediovacacion extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("tmpmediovacacion");
	}
	
	@PrimaryGeneratedColumn({name: 'idtmp'})
	idtmp: number

	@Column({name: 'fecha' })
	fecha: string
	
	@Column({name: 'fini' })
	fini: string
	
	@Column({name: 'ffin' })
	ffin: string
	
	@Column({name: 'fres' })
	fres: string
	
	@Column({name: 'boleta' })
	boleta: string
	
	@Column({name: 'codusuario' })
	codusuario: string
	
	@Column({name: 'glosa' })
	glosa: string
	
	@Column({name: 'estado' })
	estado: string
	
	
	
	static listFields(): string[]{
		return [
			"idtmp", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"boleta", 
			"codusuario", 
			"glosa", 
			"estado"
		];
	}

	static exportListFields(): string[]{
		return [
			"idtmp", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"boleta", 
			"codusuario", 
			"glosa", 
			"estado"
		];
	}

	static viewFields(): string[]{
		return [
			"idtmp", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"boleta", 
			"codusuario", 
			"glosa", 
			"estado"
		];
	}

	static exportViewFields(): string[]{
		return [
			"idtmp", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"boleta", 
			"codusuario", 
			"glosa", 
			"estado"
		];
	}

	static editFields(): string[]{
		return [
			"idtmp", 
			"fecha", 
			"fini", 
			"ffin", 
			"fres", 
			"boleta", 
			"codusuario", 
			"glosa", 
			"estado"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"boleta iLIKE :search", 
			"codusuario iLIKE :search", 
			"glosa iLIKE :search", 
			"estado iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


