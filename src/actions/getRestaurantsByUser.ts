import api from "@/services/api";

interface IParams {
	userId?: string;
}

const getRestaurantsByUser = async (params: IParams) => {
	try {
		const { userId } = params;

		const { data } = await api.get(`/restaurant/user/${userId}`);

		return data;
	} catch (err: any) {
		console.log(err);
		return null;
	}
};

export default getRestaurantsByUser;
