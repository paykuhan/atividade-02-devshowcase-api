import { AppError } from "../errors/AppError";
import type { CreateFeedbackDTO } from "../dtos/feedback.dto";
import { feedbackRepository } from "../repositories/feedback.repository";
import { projectRepository } from "../repositories/project.repository";

export const feedbackService = {
  async create(projectId: number, data: CreateFeedbackDTO) {
    const project = await projectRepository.findById(projectId);

    if (!project) {
  throw new AppError("Projeto não encontrado", 404);
}

    const feedback = await feedbackRepository.create({
      authorName: data.authorName,
      message: data.message,
      rating: data.rating,
      projectId
    });

    const averageRating =
      await feedbackRepository.getAverageRating(projectId);

    await projectRepository.updateAverageRating(
      projectId,
      averageRating
    );

    return {
      feedback,
      averageRating
    };
  }
};