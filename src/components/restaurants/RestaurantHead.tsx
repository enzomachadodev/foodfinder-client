"use client";

import { RestaurantComplete, User } from "@/interfaces";
import SolidButton from "../buttons/SolidButton";
import GhostButton from "../buttons/GhostButton";
import { toast } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/contexts/modalContext";

interface RestaurantHeadProps {
	restaurant: RestaurantComplete;
	currentUser: User | null;
}

const RestaurantHead = ({ restaurant, currentUser }: RestaurantHeadProps) => {
	const { useRestaurantModal, setCurrentRestaurant } = useContext(ModalContext);

	const editRestaurantModal = useRestaurantModal("update");

	useEffect(() => {
		setCurrentRestaurant(restaurant);
	}, [restaurant]);

	const handleEdit = () => {
		if (currentUser?.id !== restaurant.userId) {
			return toast.error("Ops! Algo deu errado");
		}

		editRestaurantModal.onOpen();
	};

	return (
		<>
			<div className="flex items-end justify-between w-full ">
				<div className="flex flex-col gap-2">
					<span className="text-gray-400 font-semibold">{restaurant.category.name}</span>
					<h2 className="text-2xl font-bold">{restaurant.name}</h2>
				</div>
				{currentUser?.id === restaurant.userId && (
					<GhostButton type="button" label="Editar Informações" onClick={handleEdit} />
				)}
			</div>
			<div className="w-full overflow-hidden rounded-xl aspect-video">
				<img src={restaurant.image} className="object-cover w-full" alt="Image" />
			</div>
		</>
	);
};

export default RestaurantHead;
