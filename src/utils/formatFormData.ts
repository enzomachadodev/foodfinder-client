import { RestaurantFormData } from "@/schemas/restaurant";

export const formatCreateFormData = ({
	name,
	image,
	categoryId,
	zipCode,
	city,
	street,
	state,
	complement,
	number,
	sunday,
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
}: RestaurantFormData) => {
	return {
		name,
		image: image
			? image
			: "https://st3.depositphotos.com/23594922/31822/v/950/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
		categoryId,
		address: {
			zipCode,
			street,
			city,
			state,
			number,
			complement,
		},
		opening: {
			sunday,
			monday,
			tuesday,
			wednesday,
			thursday,
			friday,
			saturday,
		},
	};
};

export const formatUpdateFormData = ({
	name,
	image,
	categoryId,
	zipCode,
	city,
	street,
	state,
	complement,
	number,
	sunday,
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
}: RestaurantFormData) => {
	return {
		name,
		image,
		categoryId,
		address: {
			zipCode,
			street,
			city,
			state,
			number,
			complement,
		},
		opening: {
			sunday,
			monday,
			tuesday,
			wednesday,
			thursday,
			friday,
			saturday,
		},
	};
};
