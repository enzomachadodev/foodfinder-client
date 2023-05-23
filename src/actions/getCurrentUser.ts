import api from "@/services/api";
import { cookies } from "next/headers";

interface IParams {
	restaurantId?: string;
}

const getCurrentUser = async () => {
	try {
		const cookieStore = cookies();
		const token = cookieStore.get("foodfinder.token");

		if (token) {
			api.defaults.headers.common.Authorization = `Bearer ${token.value}`;

			const { data } = await api.get(`/user`);

			return data;
		} else {
			return null;
		}
	} catch (err: any) {
		console.log(err);
		return null;
	}
};

export default getCurrentUser;
