import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
	const { "foodfinder.token": token } = parseCookies(ctx);

	const api = axios.create({
		baseURL: "http://localhost:3333",
		//baseURL: "http://18.228.138.40:3333",
	});

	api.interceptors.request.use((config) => {
		return config;
	});

	if (token) {
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	return api;
}
