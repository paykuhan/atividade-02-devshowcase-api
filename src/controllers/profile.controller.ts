import type { Request, Response } from "express";
import { createProfileSchema } from "../dtos/profile.dto";
import { profileService } from "../services/profile.service";

export const profileController = {
  async create(req: Request, res: Response) {
    try {
      const data = createProfileSchema.parse(req.body);

      const profile = await profileService.create(data);

      return res.status(201).json(profile);
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Erro ao criar perfil"
      });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const profile = await profileService.findById(id);

      return res.status(200).json(profile);
    } catch (error) {
      return res.status(404).json({
        error: error instanceof Error ? error.message : "Perfil não encontrado"
      });
    }
  }
};