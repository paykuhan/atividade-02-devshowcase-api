import type { Request, Response } from "express";
import { createProfileSchema } from "../dtos/profile.dto";
import { profileService } from "../services/profile.service";

export const profileController = {
  async create(req: Request, res: Response) {
    const data = createProfileSchema.parse(req.body);

    const profile = await profileService.create(data);

    return res.status(201).json(profile);
  },

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const profile = await profileService.findById(id);

    return res.status(200).json(profile);
  }
};