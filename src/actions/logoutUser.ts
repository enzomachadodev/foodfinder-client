import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";

const logoutUser = () => {
	const { "foodfinder.token": token } = parseCookies();
	destroyCookie(undefined, "foodfinder.token");
};

export default logoutUser;
