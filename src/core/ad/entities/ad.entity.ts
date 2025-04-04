export type CreateAdParams = {
	productName: string
	targetAudience: string
	price: number
	userId: string
}

export interface IAd {
	id: string
	userId: string
	price: number
	title: string
	description: string
	hashtags: string[]
	imageUrl?: string
	videoId: string
	audioUrl: string
	caption: string
}

export class Ad {
	id: string
	userId: string
	price: number
	title: string
	description: string
	hashtags: string[]
	imageUrl?: string
	videoId: string
	audioUrl: string
	caption: string
	constructor(ad: Ad) {
		this.id = ad.id
		this.userId = ad.userId
		this.title = ad.title
		this.description = ad.description
		this.price = ad.price
		this.hashtags = ad.hashtags
		this.imageUrl = ad.imageUrl
		this.videoId = ad.videoId
		this.audioUrl = ad.audioUrl
		this.caption = ad.caption
	}
}
