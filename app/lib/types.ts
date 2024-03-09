export interface PostI {
	userId: number,
	id: number,
	title: string,
	body: string
}

export interface AlbumI {
	userId: number,
	id: number,
	title: string
}

export interface PhotoI {
	"albumId": 1,
	"id": 1,
	"title": string,
	"url": string,
	"thumbnailUrl": string
}

export interface UserI {
	"id": number,
	"name": string,
	"username": string,
	"email": string,
	"address": {
		"street": string,
		"city": string,
	},
	"phone": string,
	"website": string,
	"company": {
		"name": string,
	}
}
