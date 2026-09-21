import { AppError } from "../errors/AppError";
import { technologyRepository } from "../repositories/technology.repository";

export const technologyService = {
  async create(name: string) {
    const existingTechnology =
      await technologyRepository.findByName(name);

    if (existingTechnology) {
    throw new AppError("Tecnologia já cadastrada", 400);
  }

    return technologyRepository.create(name);
  },

  async findAll() {
    return technologyRepository.findAll();
  }
};