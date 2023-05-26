import api from "@/services/api";

interface IParams {
	restaurantId?: string;
}

const getRestaurantById = async (params: IParams) => {
	try {
		const { restaurantId } = params;

		const { data } = await api.get(`/restaurant/${restaurantId}`);

		return data;
	} catch (err: any) {
		console.log(err);
		return null;
	}
};

export default getRestaurantById;
