"use client";

import { toast } from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { useContext, useEffect } from "react";

import { ModalContext } from "@/contexts/modalContext";
import { RestaurantComplete, User } from "@/interfaces";

interface RestaurantHeadProps {
	restaurant: RestaurantComplete;
	currentUser: User | null;
}

const RestaurantHead = ({ restaurant, currentUser }: RestaurantHeadProps) => {
	const { useRestaurantModal, setCurrentRestaurant } = useContext(ModalContext);

	const editRestaurantModal = useRestaurantModal("update");
	const deleteRestaurantModal = useRestaurantModal("delete");

	useEffect(() => {
		setCurrentRestaurant(restaurant);
	}, [restaurant]);

	const handleEdit = () => {
		if (currentUser?.id !== restaurant.userId || currentUser.isAdmin) {
			return toast.error("Ops! Algo deu errado");
		}

		editRestaurantModal.onOpen();
	};

	const handleDelete = () => {
		if (currentUser?.id !== restaurant.userId || currentUser.isAdmin) {
			return toast.error("Ops! Algo deu errado");
		}

		deleteRestaurantModal.onOpen();
	};

	return (
		<>
			<div className="flex items-end justify-between w-full ">
				<div className="flex flex-col gap-2">
					<span className="text-gray-400 font-semibold">{restaurant.category.name}</span>
					<h2 className="text-2xl font-bold">{restaurant.name}</h2>
				</div>
				{currentUser?.id === restaurant.userId || currentUser?.isAdmin ? (
					<div className="flex gap-2 transition duration-200">
						<button
							onClick={handleDelete}
							className="text-red-500 hover:-translate-y-0.5"
						>
							<FiTrash2 size={23} />
						</button>
						<button onClick={handleEdit} className="hover:-translate-y-0.5">
							<FiEdit size={23} />
						</button>
					</div>
				) : null}
			</div>
			<div className="w-full overflow-hidden rounded-xl aspect-video">
				<img src={restaurant.image} className="object-cover w-full" alt="Image" />
			</div>
		</>
	);
};

export default RestaurantHead;
