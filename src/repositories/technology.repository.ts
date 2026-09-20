import { prisma } from "../lib/prisma";

export const technologyRepository = {
  async create(name: string) {
    return prisma.technology.create({
      data: {
        name
      }
    });
  },

  async findAll() {
    return prisma.technology.findMany({
      orderBy: {
        name: "asc"
      }
    });
  },

  async findByName(name: string) {
    return prisma.technology.findUnique({
      where: {
        name
      }
    });
  },

  async findByIds(ids: number[]) {
    return prisma.technology.findMany({
      where: {
        id: {
          in: ids
        }
      }
    });
  }
};