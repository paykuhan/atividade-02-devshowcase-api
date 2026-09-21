import { prisma } from "../lib/prisma";

type CreateFeedbackData = {
  authorName: string;
  message: string;
  rating: number;
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
  },
  async getAverageRating(projectId: number) {
  const result = await prisma.feedback.aggregate({
    where: {
      projectId
    },
    _avg: {
      rating: true
    }
  });

   return result._avg.rating ?? 0;
  }
};
