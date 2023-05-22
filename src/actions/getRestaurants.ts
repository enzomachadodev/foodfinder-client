import api from "@/services/api";

interface IParams {
	restaurantId?: string;
}

const getRestaurantById = async (params: IParams) => {
	try {
		const { restaurantId } = params;

		const restaurant = await api.get(`/restaurant/${restaurantId}`);

		return restaurant;
	} catch (err: any) {
		throw new Error(err);
	}
};

export default getRestaurantById;
