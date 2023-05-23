import { z } from "zod";

export const loginUserFormSchema = z.object({
	email: z.string().nonempty("Email é obrigatório").email("Insira um email válido"),
	password: z.string().nonempty("Senha é obrigatório"),
});

export const RegisterUserFormSchema = z
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
