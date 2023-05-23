"use client";

import { RestaurantComplete, User } from "@/interfaces";
import RestaurantRating from "./RestaurantRating";

interface RestaurantHeadProps {
	restaurant: RestaurantComplete;
	currentUser: User | null;
	//reviewsLength: number;
}

const RestaurantHead = ({ restaurant, currentUser }: RestaurantHeadProps) => {
	return (
		<>
			<div
				className="
                        flex
                        items-end
                        justify-between
                        w-full
            "
			>
				<div
					className="
                            flex
                            flex-col
                            gap-2
                            
                "
				>
					<span>{restaurant.category.name}</span>
					<h1>{restaurant.name}</h1>
				</div>
				<RestaurantRating rating={restaurant.rating} ratingLength={0} />
			</div>
			<div
				className="
                        w-full
                        overflow-hidden 
                        rounded-xl
                        aspect-video
                    "
			>
				<img src={restaurant.image} className="object-cover w-full" alt="Image" />
			</div>
		</>
	);
};

export default RestaurantHead;
