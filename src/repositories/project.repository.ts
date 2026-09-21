import { prisma } from "../lib/prisma";

type CreateProjectData = {
  title: string;
  description: string;
  repositoryUrl: string;
  demoUrl?: string;
  profileId: number;
  technologyIds: number[];
};

type FindProjectsParams = {
  technology?: string;
  page: number;
  limit: number;
};

export const projectRepository = {
  async create(data: CreateProjectData) {
    return prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        repositoryUrl: data.repositoryUrl,
        demoUrl: data.demoUrl,

        profile: {
          connect: {
            id: data.profileId
          }
        },

        technologies: {
          connect: data.technologyIds.map((id) => ({
            id
          }))
        }
      },

      include: {
        profile: true,
        technologies: true
      }
    });
  },

  async findById(id: number) {
    return prisma.project.findUnique({
      where: {
        id
      },
      include: {
        profile: true,
        technologies: true,
        feedbacks: true
      }
    });
  },

  async updateAverageRating(id: number, averageRating: number) {
    return prisma.project.update({
      where: {
        id
      },
      data: {
        averageRating
      }
    });
  },

  async incrementUpvotes(id: number) {
    return prisma.project.update({
      where: {
        id
      },
      data: {
        upvotes: {
          increment: 1
        }
      }
    });
  },

  async findAll(params: FindProjectsParams) {
    const { technology, page, limit } = params;

    const where = technology
      ? {
          technologies: {
            some: {
              name: technology
            }
          }
        }
      : {};

    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: limit,
        include: {
          profile: true,
          technologies: true,
          feedbacks: true
        }
      }),

      prisma.project.count({
        where
      })
    ]);

    return {
      projects,
      total
    };
  }
};