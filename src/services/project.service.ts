import { projectRepository } from "../repositories/project.repository";
import { profileRepository } from "../repositories/profile.repository";
import { technologyRepository } from "../repositories/technology.repository";
import type { CreateProjectDTO } from "../dtos/project.dto";

export const projectService = {
  async create(data: CreateProjectDTO) {
    const profile = await profileRepository.findById(data.profileId);

    if (!profile) {
      throw new Error("Perfil não encontrado");
    }

    const technologies =
      await technologyRepository.findByIds(data.technologyIds);

    if (technologies.length !== data.technologyIds.length) {
      throw new Error("Uma ou mais tecnologias não foram encontradas");
    }

    return projectRepository.create(data);
  },

  async findAll() {
    return projectRepository.findAll();
  }
};