"use client";

import Container from "@/components/Container";
import RestaurantsList from "@/components/restaurants/RestaurantsList";
import { Restaurant } from "@/interfaces";

interface UserRestaurantClientProps {
	restaurants: Restaurant[];
}

const UserRestaurantsClient = ({ restaurants }: UserRestaurantClientProps) => {
	return (
		<Container>
			<RestaurantsList restaurants={restaurants} />
		</Container>
	);
};

export default UserRestaurantsClient;
