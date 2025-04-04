export enum Tier {
	FREE = 'FREE',
	BASIC = 'BASIC',
	PREMIUM = 'PREMIUM'
}

export interface IUser {
	id: string
	email: string
	phone: string
	name: string
	cpf: string
	tier: Tier | string
	credits: number
	createdAt?: Date
	UpdatedAt?: Date
}

export class User {
	id: string
	email: string
	phone: string
	name: string
	cpf: string
	tier: Tier | string
	credits: number
	createdAt?: Date
	UpdatedAt?: Date
	constructor(user: IUser) {
		this.id = user.id
		this.email = user.email
		this.phone = user.phone
		this.name = user.name
		this.cpf = user.cpf
		this.tier = user.tier
		this.credits = user.credits
		this.createdAt = new Date()
		this.UpdatedAt = new Date()
	}
}
