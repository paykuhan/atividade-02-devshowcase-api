import type { Request, Response } from "express";
import {
  createProjectSchema,
  projectQuerySchema
} from "../dtos/project.dto";
import { projectService } from "../services/project.service";

export const projectController = {
  async create(req: Request, res: Response) {
    const data = createProjectSchema.parse(req.body);

    const project = await projectService.create(data);

    return res.status(201).json(project);
  },

  async upvote(req: Request, res: Response) {
    const id = Number(req.params.id);

    const project = await projectService.upvote(id);

    return res.status(200).json(project);
  },

  async findAll(req: Request, res: Response) {
    const query = projectQuerySchema.parse(req.query);

    const projects = await projectService.findAll(query);

    return res.status(200).json(projects);
  }
};