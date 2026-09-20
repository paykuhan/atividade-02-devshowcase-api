import { prisma } from "../lib/prisma";

type CreateProjectData = {
  title: string;
  description: string;
  repositoryUrl: string;
  demoUrl?: string;
  profileId: number;
  technologyIds: number[];
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

  async findAll() {
    return prisma.project.findMany({
      include: {
        profile: true,
        technologies: true,
        feedbacks: true
      }
    });
  }
};