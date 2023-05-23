import getRestaurantById from "@/actions/getRestaurantById";
import RestaurantClient from "./RestaurantClient";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import { Restaurant } from "@/interfaces";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
	restaurantId?: string;
}

const RestaurantPage = async ({ params }: { params: IParams }) => {
	//const comentarios
	const currentUser = await getCurrentUser();
	const restaurant = await getRestaurantById(params);

	if (!restaurant) {
		return <EmptyState />;
	}

	return <RestaurantClient restaurant={restaurant} currentUser={currentUser} />;
};

export default RestaurantPage;
