import getRestaurantsByUser from "@/actions/getRestaurantsByUser";
import EmptyState from "@/components/EmptyState";
import UserRestaurantsClient from "./UserRestaurantsClient";

interface IParams {
	userId?: string;
}

const UserRestaurantsPage = async ({ params }: { params: IParams }) => {
	const restaurants = await getRestaurantsByUser(params);

	if (!restaurants) {
		return <EmptyState />;
	}

	return <UserRestaurantsClient restaurants={restaurants} />;
};

export default UserRestaurantsPage;
