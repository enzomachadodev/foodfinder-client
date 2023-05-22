import getRestaurantById from "@/actions/getRestaurants";

interface IParams {
	restaurantId?: string;
}

const RestaurantPage = async ({ params }: { params: IParams }) => {
	//const comentarios
	//const current user

	// if (!restaurant) {
	// 	return <EmptyState />;
	// }
	return <div>RestaurantPage</div>;
};

export default RestaurantPage;
