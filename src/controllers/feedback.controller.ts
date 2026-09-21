import type { Request, Response } from "express";
import { createFeedbackSchema } from "../dtos/feedback.dto";
import { feedbackService } from "../services/feedback.service";

export const feedbackController = {
  async create(req: Request, res: Response) {
    const projectId = Number(req.params.id);

    const data = createFeedbackSchema.parse(req.body);

    const result = await feedbackService.create(
      projectId,
      data
    );

    return res.status(201).json(result);
  }
};