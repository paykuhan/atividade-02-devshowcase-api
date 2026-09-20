import type { Request, Response } from "express";
import { createProjectSchema } from "../dtos/project.dto";
import { projectService } from "../services/project.service";

export const projectController = {
  async create(req: Request, res: Response) {
    try {
      const data = createProjectSchema.parse(req.body);

      const project = await projectService.create(data);

      return res.status(201).json(project);
    } catch (error) {
      return res.status(400).json({
        error:
          error instanceof Error
            ? error.message
            : "Erro ao cadastrar projeto"
      });
    }
  },

  async findAll(req: Request, res: Response) {
    const projects = await projectService.findAll();

    return res.status(200).json(projects);
  }
};