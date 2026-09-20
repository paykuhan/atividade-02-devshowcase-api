import { z } from "zod";

export const createProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "O nome é obrigatório"),

  bio: z
    .string()
    .trim()
    .optional(),

  githubUrl: z
    .string()
    .url("A URL do GitHub é inválida")
});

export type CreateProfileDTO = z.infer<typeof createProfileSchema>;