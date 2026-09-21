import { Router } from "express";

import { profileController } from "../controllers/profile.controller";
import { technologyController } from "../controllers/technology.controller";
import { projectController } from "../controllers/project.controller";
import { feedbackController } from "../controllers/feedback.controller";

export const routes = Router();

// Profile
routes.post("/profiles", profileController.create);
routes.get("/profiles/:id", profileController.findById);

// Technology
routes.post("/technologies", technologyController.create);
routes.get("/technologies", technologyController.findAll);
routes.put("/projects/:id/upvote", projectController.upvote);

// Project
routes.post("/projects", projectController.create);
routes.get("/projects", projectController.findAll);
routes.post("/projects/:id/feedbacks", feedbackController.create);