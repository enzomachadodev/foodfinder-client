import { Restaurant } from "@/interfaces";
import api from "@/services/api";

const getAllRestaurants = async () => {
	try {
		const { data } = await api.get(`/restaurant`);

		return data as Restaurant[];
	} catch (err: any) {
		console.log(err);
		return null;
	}
};

export default getAllRestaurants;
