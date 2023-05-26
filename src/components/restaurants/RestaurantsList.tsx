"use client";

import { Restaurant } from "@/interfaces";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
	restaurants: Restaurant[];
}

const RestaurantsList = ({ restaurants }: RestaurantListProps) => {
	return (
		<div
			className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8

        "
		>
			{restaurants.map((r) => (
				<RestaurantCard key={r.id} restaurant={r} />
			))}
		</div>
	);
};

export default RestaurantsList;
