"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

import { ModalContext } from "@/contexts/modalContext";
import { RestaurantFormData, createRestaurantFormSchema } from "@/schemas/restaurant";
import { Category } from "@/interfaces";
import { formatCreateFormData } from "@/utils/formatFormData";

import api from "@/services/api";
import ModalContainer from "./ModalContainer";
import DefaultInput from "../inputs/DefaultInput";
import SolidButton from "../buttons/SolidButton";
import ImageUpload from "../inputs/ImageUpload";
import CategorySelect from "../inputs/CategorySelect";
import OpeningInput from "../inputs/OpeningInput";

interface AddRestaurantProps {
	categories: Category[];
}

const AddRestaurant = ({ categories }: AddRestaurantProps) => {
	const { useRestaurantModal } = useContext(ModalContext);
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	const createRestaurantModal = useRestaurantModal("create");

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
		const newData = formatCreateFormData(data);

		setLoading(true);
		toast.loading("Realizando cadastro...");
		await api
			.post("/restaurant", newData)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Sucesso");

				reset();
				router.refresh();
				createRestaurantModal.onClose();
			})
			.catch((err) => {
				toast.dismiss();
				setLoading(false);
				console.log(err);
				if (err instanceof AxiosError) {
					toast.error(err.response?.data.message);
				}
			});
	};

	return (
		<ModalContainer
			isOpen={createRestaurantModal.isOpen}
			onClose={createRestaurantModal.onClose}
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
				<h3 className="text-xl font-bold">Horarios de Funcionamento</h3>
				<OpeningInput
					id="sunday"
					day="Domingo"
					setValue={setValue}
					register={register}
					error={!!errors.sunday}
				/>
				<OpeningInput
					id="monday"
					day="Segunda-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.monday}
				/>
				<OpeningInput
					id="tuesday"
					day="Terça-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.tuesday}
				/>
				<OpeningInput
					id="wednesday"
					day="Quarta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.wednesday}
				/>
				<OpeningInput
					id="thursday"
					day="Quinta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.thursday}
				/>
				<OpeningInput
					id="friday"
					day="Sexta-Feira"
					setValue={setValue}
					register={register}
					error={!!errors.friday}
				/>
				<OpeningInput
					id="saturday"
					day="Sábado"
					setValue={setValue}
					register={register}
					error={!!errors.saturday}
				/>
				<hr />
				<h3 className="text-xl font-bold">Localização</h3>
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

				<SolidButton disabled={loading} label="Registrar" type="submit" />
			</form>
		</ModalContainer>
	);
};

export default AddRestaurant;
