import { technologyRepository } from "../repositories/technology.repository";

export const technologyService = {
  async create(name: string) {
    const existingTechnology =
      await technologyRepository.findByName(name);

    if (existingTechnology) {
      throw new Error("Tecnologia já cadastrada");
    }

    return technologyRepository.create(name);
  },

  async findAll() {
    return technologyRepository.findAll();
  }
};