import { z } from "zod";

export const createAccountSchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string(),
	})
	.required();

export type CreateAccountDto = z.infer<typeof createAccountSchema>;
