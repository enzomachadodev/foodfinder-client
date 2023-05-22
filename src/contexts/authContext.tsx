import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/interfaces";

import api from "@/services/api";
import { destroyCookie, parseCookies } from "nookies";

interface AuthContextData {
	getCurrentUser: () => Promise<void>;
	currentUser: User | null;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const getCurrentUser = async () => {
		try {
			const { "foodfinder.token": token } = parseCookies();
			console.log(token);
			if (token) {
				api.defaults.headers.common.Authorization = `Bearer ${token}`;
				const { data } = await api.get("/user");
				setCurrentUser(data);
				console.log(currentUser);
			}
		} catch (err) {
			setCurrentUser(null);
			console.error(err);
			destroyCookie(null, "foodfinder.token");
		}
	};

	useEffect(() => {
		const fetchUser = async () => {
			getCurrentUser();
		};
		fetchUser();
	}, []);

	return (
		<AuthContext.Provider value={{ getCurrentUser, currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
