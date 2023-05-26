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
	userId: string;
	createdAt: Date;
	updatedAt: Date;
	category: Category;
}

export interface Address {
	id: string;
	zipCode: string;
	city: string;
	state: string;
	street: string;
	number: number;
	complement?: string;
}

export interface Opening {
	id: string;
	sunday: string;
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
}

export interface RestaurantComplete extends Restaurant {
	user: User;
	address: Address;
	opening: Opening;
	category: Category;
}

export interface OpeningHours extends Opening {
	[key: string]: string;
}
