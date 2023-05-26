import { RestaurantComplete } from "@/interfaces";
import { UseFormSetValue } from "react-hook-form";

const setFormData = (
	restaurantData: RestaurantComplete,
	setValue: UseFormSetValue<{
		number: number;
		name: string;
		categoryId: string;
		zipCode: string;
		city: string;
		state: string;
		street: string;
		sunday: string;
		monday: string;
		tuesday: string;
		wednesday: string;
		thursday: string;
		friday: string;
		saturday: string;
		image?: string | undefined;
		complement?: string | undefined;
	}>
) => {
	setValue("name", restaurantData.name);
	setValue("categoryId", restaurantData.category.id);
	setValue("image", restaurantData.image);

	setValue("zipCode", restaurantData.address.zipCode);
	setValue("city", restaurantData.address.city);
	setValue("state", restaurantData.address.state);
	setValue("street", restaurantData.address.street);
	setValue("number", restaurantData.address.number);
};

export default setFormData;
