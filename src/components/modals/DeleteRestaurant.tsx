"use client";
import { useContext, useState } from "react";

import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

import { ModalContext } from "@/contexts/modalContext";

import api from "@/services/api";
import ModalContainer from "./ModalContainer";
import SolidButton from "../buttons/SolidButton";
import { useRouter } from "next/navigation";
import OutlineButton from "../buttons/OutlineButton";

const DeleteRestaurant = () => {
	const { useRestaurantModal, currentRestaurant } = useContext(ModalContext);

	const [loading, setLoading] = useState(false);

	const deleteRestaurantModal = useRestaurantModal("delete");

	const router = useRouter();

	const deleteRestaurant = async () => {
		setLoading(true);
		toast.loading("Apagando informações...");
		await api
			.delete(`/restaurant/${currentRestaurant?.id}`)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Sucesso");
				deleteRestaurantModal.onClose();

				router.replace("/");
				router.refresh();
			})
			.catch((err) => {
				toast.dismiss();
				setLoading(false);
				console.log(err);
				toast.error("Ops! Algo deu errado");
				if (err instanceof AxiosError) {
					toast.error(err.response?.data.message);
				}
			});
	};

	return (
		<ModalContainer
			isOpen={deleteRestaurantModal.isOpen}
			onClose={deleteRestaurantModal.onClose}
			title="Tem certeza que deseja continuar?"
		>
			<h3>Esta ação é permanente e não poderá ser desfeita posteriormente.</h3>
			<div className="flex gap-2 items-center mt-8">
				<OutlineButton
					onClick={deleteRestaurantModal.onClose}
					type="button"
					label="Cancelar"
					className="h"
				/>
				<SolidButton
					onClick={deleteRestaurant}
					type="button"
					label="Apagar"
					className="!bg-red-500 !border-red-500 !hover:bg-red-300 !hover:border-red-300"
				/>
			</div>
		</ModalContainer>
	);
};

export default DeleteRestaurant;
