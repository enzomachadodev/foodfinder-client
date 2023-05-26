import { z } from "zod";

export const createRestaurantFormSchema = z.object({
	name: z.string().nonempty("Nome é obrigatóriio"),
	categoryId: z.string().nonempty("Categoria é obrigatório"),
	image: z.string().optional(),
	zipCode: z
		.string()
		.nonempty("CEP é obrigatório")
		.regex(/^[0-9]+$/, "Digite apenas números")
		.max(8, "Digite um CEP válido")
		.min(8, "Digite um CEP válido"),
	city: z.string().nonempty("Cidade é obrigatóriio"),
	state: z
		.string()
		.min(2, "Insira a sigla do estado")
		.max(2, "Insira a sigla do estado")
		.nonempty("Estado é obrigatóriio"),
	street: z.string().nonempty("Rua é obrigatório"),
	number: z
		.string()
		.nonempty("Número é obrigatório")
		.regex(/^[0-9]+$/, "Digite apenas números")
		.transform((value) => {
			const parsedValue = parseInt(value, 10);
			return parsedValue;
		}),
	complement: z.string().optional(),

	sunday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	monday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	tuesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	wednesday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	thursday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	friday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
	saturday: z
		.string()
		.regex(
			/^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/,
			"Formato inválido para o horário. Utilize o formato HH:mm - HH:mm."
		)
		.or(z.literal("24 Horas"))
		.or(z.literal("Fechado")),
});

export type RestaurantFormData = z.infer<typeof createRestaurantFormSchema>;
