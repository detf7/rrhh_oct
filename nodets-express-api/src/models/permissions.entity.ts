
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import BaseModel from './basemodel';

//2lines
@Entity({ name: 'permissions', schema: 'public' })
export default class Permissions extends BaseModel {
	static getQuery(){
		return this.createQueryBuilder("permissions");
	}
	
	@PrimaryGeneratedColumn({name: 'permission_id'})
	permission_id: number

	@Column({name: 'role_id' })
	role_id: number
	
	@Column({name: 'permission' })
	permission: string
	
	
	
	static listFields(): string[]{
		return [
			"permission_id", 
			"role_id", 
			"permission"
		];
	}

	static exportListFields(): string[]{
		return [
			"permission_id", 
			"role_id", 
			"permission"
		];
	}

	static viewFields(): string[]{
		return [
			"permission_id", 
			"role_id", 
			"permission"
		];
	}

	static exportViewFields(): string[]{
		return [
			"permission_id", 
			"role_id", 
			"permission"
		];
	}

	static editFields(): string[]{
		return [
			"permission_id", 
			"role_id", 
			"permission"
		];
	}

	
	static searchFields(): string{
		const fields = [
			"permission iLIKE :search",
		];
		return '(' + fields.join(' OR ') + ')';
	}

	
	
}


