"use client";

import { Restaurant } from "@/interfaces";
import { useRouter } from "next/navigation";

interface RestaurantCardProps {
	restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push(`/restaurant/${restaurant.id}`)}
			className="col-span-1 cursor-pointer group"
		>
			<div className="flex flex-col gap-2 w-full">
				<div
					className="
                        aspect-square
                        w-full
                        relative
                        overflow-hidden
                        rounded-xl
                "
				>
					<img
						src={restaurant.image}
						alt="estabelecimento"
						className="
                        object-cover
                        w-full
                        h-full
                        group-hover:scale-110
                        transition
                        "
					/>
				</div>
				<span>{restaurant.category.name}</span>
				<h3>{restaurant.name}</h3>
			</div>
		</div>
	);
};

export default RestaurantCard;
