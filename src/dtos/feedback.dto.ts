import { z } from "zod";

export const createFeedbackSchema = z.object({
  authorName: z
    .string()
    .trim()
    .min(1, "O nome do autor é obrigatório"),

  message: z
    .string()
    .trim()
    .min(1, "O comentário é obrigatório"),

  rating: z
    .number()
    .int()
    .min(1, "A nota mínima é 1")
    .max(5, "A nota máxima é 5")
});

export type CreateFeedbackDTO = z.infer<typeof createFeedbackSchema>;