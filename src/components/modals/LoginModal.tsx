"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { ModalContext } from "@/contexts/modalContext";
import ModalContainer from "./ModalContainer";
import DefaultInput from "../inputs/DefaultInput";
import SolidButton from "../buttons/SolidButton";
import api from "@/services/api";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { setCookie } from "nookies";
import { AuthContext } from "@/contexts/authContext";
import { loginUserFormSchema } from "@/schemas/user";

type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

const LoginModal = () => {
	const { useLoginModal, useRegisterModal } = useContext(ModalContext);
	const { getCurrentUser } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const goToRegister = () => {
		loginModal.onClose();
		registerModal.onOpen();
	};

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUserFormData>({
		resolver: zodResolver(loginUserFormSchema),
	});

	const signIn = async (data: LoginUserFormData) => {
		setLoading(true);
		toast.loading("Verificando credenciais...");
		await api
			.post("/session", data)
			.then((res) => {
				setLoading(false);
				toast.dismiss();
				toast.success("Bem vindo");

				const { token } = res.data;

				setCookie(undefined, "foodfinder.token", token, {
					maxAge: 60 * 60 * 24, // 1 day
				});

				api.defaults.headers.common.Authorization = `Bearer ${token}`;

				setLoading(false);
				router.refresh();

				reset();
				loginModal.onClose();
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
			isOpen={loginModal.isOpen}
			onClose={loginModal.onClose}
			title="Seja bem vindo!"
		>
			<form className="space-y-6" onSubmit={handleSubmit(signIn)}>
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
				<SolidButton label="Entrar" type="submit" />
				<div
					className="
                            w-full 
                            flex 
                            justify-center 
                            gap-1 
                            items-center
                            "
				>
					<div>Ainda não possui uma conta?</div>
					<button
						type="button"
						onClick={goToRegister}
						className="
                            underline 
                            text-indigo-500
                        "
					>
						Registre-se
					</button>
				</div>
			</form>
		</ModalContainer>
	);
};

export default LoginModal;
