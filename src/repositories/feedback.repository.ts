import { prisma } from "../lib/prisma";

type CreateFeedbackData = {
  authorName: string;
  message: string;
  projectId: number;
};

export const feedbackRepository = {
  async create(data: CreateFeedbackData) {
    return prisma.feedback.create({
      data
    });
  },

  async findByProjectId(projectId: number) {
    return prisma.feedback.findMany({
      where: {
        projectId
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
};