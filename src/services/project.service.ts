import { AppError } from "../errors/AppError";
import { projectRepository } from "../repositories/project.repository";
import { profileRepository } from "../repositories/profile.repository";
import { technologyRepository } from "../repositories/technology.repository";
import type { CreateProjectDTO,ProjectQueryDTO } from "../dtos/project.dto";

export const projectService = {
  async create(data: CreateProjectDTO) {
    const profile = await profileRepository.findById(data.profileId);

    if (!profile) {
  throw new AppError("Perfil não encontrado", 404);
}

    const technologies =
      await technologyRepository.findByIds(data.technologyIds);

    if (technologies.length !== data.technologyIds.length) {
  throw new AppError(
    "Uma ou mais tecnologias não foram encontradas",
    404
  );
}

    return projectRepository.create(data);
  },
  async upvote(id: number) {
  const project = await projectRepository.findById(id);

  if (!project) {
  throw new AppError("Projeto não encontrado", 404);
}

  return projectRepository.incrementUpvotes(id);
 },

  async findAll(query: ProjectQueryDTO) {
  const result = await projectRepository.findAll(query);

  const totalPages = Math.ceil(
    result.total / query.limit
  );

  return {
    data: result.projects,
    pagination: {
      page: query.page,
      limit: query.limit,
      total: result.total,
      totalPages
    }
  };
}
};