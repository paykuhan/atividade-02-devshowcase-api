import { z } from "zod";

export const createProjectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "O título é obrigatório"),

  description: z
    .string()
    .trim()
    .min(1, "A descrição é obrigatória"),

  repositoryUrl: z
    .string()
    .url("A URL do repositório é inválida"),

  demoUrl: z
    .string()
    .url("A URL da demonstração é inválida")
    .optional(),

  profileId: z
    .number()
    .int()
    .positive("O ID do perfil deve ser positivo"),

  technologyIds: z
    .array(z.number().int().positive())
    .min(1, "Informe pelo menos uma tecnologia")
});

export type CreateProjectDTO = z.infer<typeof createProjectSchema>;