import api from "@/services/api";

const getCategories = async () => {
	try {
		const { data } = await api.get("/category");

		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
};

export default getCategories;
