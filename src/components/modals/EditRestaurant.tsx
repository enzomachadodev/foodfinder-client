"use client";
import { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

import { ModalContext } from "@/contexts/modalContext";
import { RestaurantFormData, createRestaurantFormSchema } from "@/schemas/restaurant";

import api from "@/services/api";
import ModalContainer from "./ModalContainer";
import DefaultInput from "../inputs/DefaultInput";
import SolidButton from "../buttons/SolidButton";
import ImageUpload from "../inputs/ImageUpload";
import CategorySelect from "../inputs/CategorySelect";
import { Category } from "@/interfaces";
import OpeningInput from "../inputs/OpeningInput";
import { useParams } from "next/navigation";
import getRestaurantById from "@/actions/getRestaurantById";
import formatFormData from "@/utils/formatFormData";
import setFormData from "@/utils/setFormRestaurants";

interface AddRestaurantProps {
	categories: Category[];
}

const EditRestaurant = ({ categories }: AddRestaurantProps) => {
	const { useRestaurantModal, currentRestaurant, setCurrentRestaurant } =
		useContext(ModalContext);

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
	}, [currentRestaurant]);

	const updateRestaurant = async (data: RestaurantFormData) => {
		const newData = formatFormData(data);
		console.log(newData);

		setLoading(true);
		toast.loading("Realizando cadastro...");
		await api
			.patch(`/restaurant/${currentRestaurant?.id}`, newData)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Sucesso");

				reset();
				editRestaurantModal.onClose();
			})
			.catch((err) => {
				toast.dismiss();
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
			title="Adicione seu Estabelecimento"
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
				<h3
					className="
						text-xl
						font-bold
				"
				>
					Horarios de Funcionamento
				</h3>
				<OpeningInput
					id="sunday"
					day="Domingo"
					setValue={setValue}
					register={register}
					error={!!errors.sunday}
					errorMessage={errors.sunday && errors.sunday.message}
				/>
				<OpeningInput
					id="monday"
					day="Segunda-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.monday}
					errorMessage={errors.monday && errors.monday.message}
				/>
				<OpeningInput
					id="tuesday"
					day="Terça-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.tuesday}
					errorMessage={errors.tuesday && errors.tuesday.message}
				/>
				<OpeningInput
					id="wednesday"
					day="Quarta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.wednesday}
					errorMessage={errors.wednesday && errors.wednesday.message}
				/>
				<OpeningInput
					id="thursday"
					day="Quinta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.thursday}
					errorMessage={errors.thursday && errors.thursday.message}
				/>
				<OpeningInput
					id="friday"
					day="Sexta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.friday}
					errorMessage={errors.friday && errors.friday.message}
				/>
				<OpeningInput
					id="saturday"
					day="Sábado"
					setValue={setValue}
					register={register}
					error={!!errors.saturday}
					errorMessage={errors.saturday && errors.saturday.message}
				/>
				<hr />
				<h3
					className="
						text-xl
						font-bold
				"
				>
					Localização
				</h3>
				<DefaultInput
					id="zipCode"
					type="text"
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
					type="text"
					register={register}
					error={!!errors.number}
					errorMessage={errors.number && errors.number.message}
				/>

				<SolidButton label="Registrar" type="submit" />
			</form>
		</ModalContainer>
	);
};

export default EditRestaurant;
