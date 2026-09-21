import type { Request, Response } from "express";
import { createTechnologySchema } from "../dtos/technology.dto";
import { technologyService } from "../services/technology.service";

export const technologyController = {
  async create(req: Request, res: Response) {
    const data = createTechnologySchema.parse(req.body);

    const technology = await technologyService.create(data.name);

    return res.status(201).json(technology);
  },

  async findAll(req: Request, res: Response) {
    const technologies = await technologyService.findAll();

    return res.status(200).json(technologies);
  }
};