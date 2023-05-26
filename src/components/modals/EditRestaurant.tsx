"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

import { ModalContext } from "@/contexts/modalContext";
import { RestaurantFormData, createRestaurantFormSchema } from "@/schemas/restaurant";
import { Category } from "@/interfaces";

import { formatUpdateFormData } from "@/utils/formatFormData";
import setFormData from "@/utils/setFormRestaurants";

import api from "@/services/api";
import ModalContainer from "./ModalContainer";
import DefaultInput from "../inputs/DefaultInput";
import ImageUpload from "../inputs/ImageUpload";
import CategorySelect from "../inputs/CategorySelect";
import OpeningInput from "../inputs/OpeningInput";
import SolidButton from "../buttons/SolidButton";
import OutlineButton from "../buttons/OutlineButton";

interface AddRestaurantProps {
	categories: Category[];
}

const EditRestaurant = ({ categories }: AddRestaurantProps) => {
	const { useRestaurantModal, currentRestaurant, setCurrentRestaurant } =
		useContext(ModalContext);
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	const editRestaurantModal = useRestaurantModal("update");

	const {
		reset,
		register,
		handleSubmit,
		setValue,
		setFocus,
		formState: { errors },
	} = useForm<RestaurantFormData>({
		resolver: zodResolver(createRestaurantFormSchema),
	});

	useEffect(() => {
		if (currentRestaurant) {
			setFormData(currentRestaurant, setValue);
		}
	}, [currentRestaurant, editRestaurantModal.isOpen]);

	const handleClose = () => {
		editRestaurantModal.onClose();
	};

	const updateRestaurant = async (data: RestaurantFormData) => {
		const newData = formatUpdateFormData(data);

		setLoading(true);
		toast.loading("Salvando informações...");
		await api
			.patch(`/restaurant/${currentRestaurant?.id}`, newData)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Sucesso");

				editRestaurantModal.onClose();
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
			isOpen={editRestaurantModal.isOpen}
			onClose={editRestaurantModal.onClose}
			title="Editar informações"
		>
			<form className="space-y-6" onSubmit={handleSubmit(updateRestaurant)}>
				<DefaultInput
					id="name"
					label="Nome"
					register={register}
					error={!!errors.name}
					errorMessage={errors.name && errors.name.message}
				/>
				<CategorySelect
					categories={categories}
					id="categoryId"
					label="Categoria"
					register={register}
					error={!!errors.categoryId}
					errorMessage={errors.categoryId && errors.categoryId.message}
				/>
				<ImageUpload
					id="image"
					label="Adicione uma foto"
					register={register}
					error={!!errors.image}
					errorMessage={errors.image && errors.image.message}
					setValue={setValue}
					setFocus={setFocus}
				/>
				<hr />
				<h3 className="text-xl font-bold">Horarios de Funcionamento</h3>
				<OpeningInput
					id="sunday"
					day="Domingo"
					defaultValue={currentRestaurant?.opening.sunday}
					setValue={setValue}
					register={register}
					error={!!errors.sunday}
				/>
				<OpeningInput
					id="monday"
					day="Segunda-Feira"
					defaultValue={currentRestaurant?.opening.monday}
					setValue={setValue}
					register={register}
					error={!!errors.monday}
				/>
				<OpeningInput
					id="tuesday"
					day="Terça-Feira"
					defaultValue={currentRestaurant?.opening.tuesday}
					setValue={setValue}
					register={register}
					error={!!errors.tuesday}
				/>
				<OpeningInput
					id="wednesday"
					day="Quarta-Feira"
					defaultValue={currentRestaurant?.opening.thursday}
					setValue={setValue}
					register={register}
					error={!!errors.wednesday}
				/>
				<OpeningInput
					id="thursday"
					day="Quinta-Feira"
					defaultValue={currentRestaurant?.opening.wednesday}
					setValue={setValue}
					register={register}
					error={!!errors.thursday}
				/>
				<OpeningInput
					id="friday"
					day="Sexta-Feira"
					defaultValue={currentRestaurant?.opening.friday}
					setValue={setValue}
					register={register}
					error={!!errors.friday}
				/>
				<OpeningInput
					id="saturday"
					day="Sábado"
					defaultValue={currentRestaurant?.opening.saturday}
					setValue={setValue}
					register={register}
					error={!!errors.saturday}
				/>
				<hr />
				<h3 className="text-xl font-bold">Localização</h3>
				<DefaultInput
					id="zipCode"
					label="CEP"
					register={register}
					error={!!errors.zipCode}
					errorMessage={errors.zipCode && errors.zipCode.message}
				/>
				<DefaultInput
					id="city"
					label="Cidade"
					register={register}
					error={!!errors.city}
					errorMessage={errors.city && errors.city.message}
				/>
				<DefaultInput
					id="state"
					label="Estado"
					register={register}
					error={!!errors.state}
					errorMessage={errors.state && errors.state.message}
				/>
				<DefaultInput
					id="street"
					label="Rua"
					register={register}
					error={!!errors.street}
					errorMessage={errors.street && errors.street.message}
				/>
				<DefaultInput
					id="number"
					label="Número"
					register={register}
					error={!!errors.number}
					errorMessage={errors.number && errors.number.message}
				/>
				<div className="flex gap-4">
					<OutlineButton onClick={handleClose} label="Cancelar" type="button" />
					<SolidButton disabled={loading} label="Salvar" type="submit" />
				</div>
			</form>
		</ModalContainer>
	);
};

export default EditRestaurant;
