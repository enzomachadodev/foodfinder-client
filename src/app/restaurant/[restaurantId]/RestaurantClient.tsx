"use client";

import Container from "@/components/Container";
import RestaurantHead from "@/components/RestaurantHead";
import RestaurantLocation from "@/components/RestaurantLocation";
import RestaurantOpening from "@/components/RestaurantOpening";
import { RestaurantComplete, User } from "@/interfaces";

interface RestaurantClientProps {
	restaurant: RestaurantComplete;
	currentUser: User | null;
	//comentarios
}

const RestaurantClient = ({ restaurant, currentUser }: RestaurantClientProps) => {
	return (
		<Container>
			<div
				className="
					max-w-screen-lg
					w-full
					mx-auto
					"
			>
				<div className="flex flex-col gap-6">
					<RestaurantHead restaurant={restaurant} currentUser={currentUser} />
					<div
						className="
							grid 
							grid-cols-1 
							md:grid-cols-2
							md:gap-10
        				"
					>
						<RestaurantOpening opening={restaurant.opening} />
						<RestaurantLocation address={restaurant.address} />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default RestaurantClient;
