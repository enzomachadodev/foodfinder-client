"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { ModalContext } from "@/contexts/modalContext";

import api from "@/services/api";
import ModalContainer from "./ModalContainer";
import DefaultInput from "../inputs/DefaultInput";
import SolidButton from "../buttons/SolidButton";

const RegisterUserFormSchema = z
	.object({
		name: z.string().nonempty("Nome é obrigatório"),
		image: z.string().optional(),
		email: z.string().nonempty("Email é obrigatório").email("Insira um email válido"),
		password: z
			.string()
			.min(8, { message: "Deve ter no mínimo 8 caracteres" })
			.regex(/(?=.*?[A-Z])/, "Deve conter ao menos uma letra maiúscula")
			.regex(/(?=.*?[a-z])/, "Deve conter ao menos uma letra minúscula")
			.regex(/(?=.*?[1-9])/, "Deve conter ao menos um número")
			.regex(/(?=.*?[/\W|_/])/, "Deve conter ao menos um caracter especial"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não correspondem",
		path: ["confirmPassword"],
	});

type RegisterUserFormData = z.infer<typeof RegisterUserFormSchema>;

const RegisterModal = () => {
	const { useLoginModal, useRegisterModal } = useContext(ModalContext);

	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const goToLogin = () => {
		registerModal.onClose();
		loginModal.onOpen();
	};

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterUserFormData>({
		resolver: zodResolver(RegisterUserFormSchema),
	});

	const signUp = async (data: RegisterUserFormData) => {
		setLoading(true);
		toast.loading("Verificando credenciais...");
		await api
			.post("/user", data)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Bem vindo");

				reset();
				registerModal.onClose();
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
			isOpen={registerModal.isOpen}
			onClose={registerModal.onClose}
			title="Faça seu cadastro!"
		>
			<form className="space-y-6" onSubmit={handleSubmit(signUp)}>
				<DefaultInput
					id="image"
					label="Foto de Perfil (opcional)"
					register={register}
					error={!!errors.image}
					errorMessage={errors.image && errors.image.message}
				/>
				<DefaultInput
					id="name"
					label="Nome"
					register={register}
					error={!!errors.name}
					errorMessage={errors.name && errors.name.message}
				/>
				<DefaultInput
					id="email"
					label="Email"
					register={register}
					error={!!errors.email}
					errorMessage={errors.email && errors.email.message}
				/>
				<DefaultInput
					id="password"
					label="Senha"
					type="password"
					register={register}
					error={!!errors.password}
					errorMessage={errors.password && errors.password.message}
				/>
				<DefaultInput
					id="confirmPassword"
					label="Confirme a senha"
					type="password"
					register={register}
					error={!!errors.confirmPassword}
					errorMessage={errors.confirmPassword && errors.confirmPassword.message}
				/>
				<SolidButton label="Registrar" type="submit" />
				<div
					className="
                            w-full 
                            flex 
                            justify-center 
                            gap-1 
                            items-center
                            "
				>
					<div>Já possui um cadastro?</div>
					<button
						type="button"
						onClick={goToLogin}
						className="
                            underline 
                            text-indigo-500
                        "
						disabled={loading}
					>
						Entrar
					</button>
				</div>
			</form>
		</ModalContainer>
	);
};

export default RegisterModal;
