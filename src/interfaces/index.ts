export interface User {
	id: string;
	name: string;
	email: string;
	image: string;
	password: string;
	favoriteIds: string[];
	isAdmin: boolean;
}

export interface Category {
	id: string;
	name: string;
}

export interface Restaurant {
	id: string;
	name: string;
	image: string;
	rating: number;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Address {
	id: string;
}
