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
			className="col-span-1 cursor-pointer group text-ellipsis"
		>
			<div className="flex flex-col gap-2 w-full overflow-hidden">
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
				<span className="text-gray-600 font-medium">{restaurant.category.name}</span>
				<h3 className="text-xl w-full font-semibold">{restaurant.name}</h3>
			</div>
		</div>
	);
};

export default RestaurantCard;
