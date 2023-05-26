import getRestaurantById from "@/actions/getRestaurantById";
import RestaurantClient from "./RestaurantClient";
import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
	restaurantId?: string;
}

const RestaurantPage = async ({ params }: { params: IParams }) => {
	const currentUser = await getCurrentUser();
	const restaurant = await getRestaurantById(params);

	if (!restaurant) {
		return <EmptyState />;
	}

	return <RestaurantClient restaurant={restaurant} currentUser={currentUser} />;
};

export default RestaurantPage;
