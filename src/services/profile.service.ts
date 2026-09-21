import { AppError } from "../errors/AppError";
import { profileRepository } from "../repositories/profile.repository";
import type { CreateProfileDTO } from "../dtos/profile.dto";

export const profileService = {
  async create(data: CreateProfileDTO) {
    return profileRepository.create(data);
  },

  async findById(id: number) {
    const profile = await profileRepository.findById(id);

  if (!profile) {
  throw new AppError("Perfil não encontrado", 404);
}

    return profile;
  }
};