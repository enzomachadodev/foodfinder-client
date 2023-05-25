"use client";
import { useContext, useState } from "react";

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
import axios from "axios";
import formatFormData from "@/utils/formatFormData";

interface AddRestaurantProps {
	categories: Category[];
}

const AddRestaurant = ({ categories }: AddRestaurantProps) => {
	const { useRestaurantModal } = useContext(ModalContext);

	const [loading, setLoading] = useState(false);

	const createModal = useRestaurantModal("create");

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

	const createRestaurant = async (data: RestaurantFormData) => {
		const newData = formatFormData(data);

		setLoading(true);
		toast.loading("Realizando cadastro...");
		await api
			.post("/restaurant", newData)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Sucesso");

				reset();
				createModal.onClose();
			})
			.catch((err) => {
				toast.dismiss();
				console.log(err);
				if (err instanceof AxiosError) {
					toast.error(err.response?.data.message);
				}
			});
	};

	return (
		<ModalContainer
			isOpen={createModal.isOpen}
			onClose={createModal.onClose}
			title="Adicione seu Estabelecimento"
		>
			<form className="space-y-6" onSubmit={handleSubmit(createRestaurant)}>
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

export default AddRestaurant;
