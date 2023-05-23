import getAllRestaurants from "@/actions/getAllRestaurants";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import RestaurantsList from "@/components/RestaurantsList";
const Home = async () => {
	const restaurants = await getAllRestaurants();

	if (!restaurants) {
		return <EmptyState />;
	}

	return (
		<Container>
			<RestaurantsList restaurants={restaurants} />
		</Container>
	);
};

export default Home;
