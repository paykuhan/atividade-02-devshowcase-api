import { prisma } from "../lib/prisma";

type CreateProfileData = {
  name: string;
  bio?: string;
  githubUrl: string;
};

export const profileRepository = {
  async create(data: CreateProfileData) {
    return prisma.profile.create({
      data
    });
  },

  async findById(id: number) {
    return prisma.profile.findUnique({
      where: {
        id
      },
      include: {
        projects: true
      }
    });
  }
};