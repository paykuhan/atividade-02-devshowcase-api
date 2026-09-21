import { Router } from "express";

import { profileController } from "../controllers/profile.controller";
import { technologyController } from "../controllers/technology.controller";
import { projectController } from "../controllers/project.controller";
import { feedbackController } from "../controllers/feedback.controller";

export const routes = Router();

// Profile
/**
 * @openapi
 * /api/profiles:
 *   post:
 *     summary: Cadastra um novo perfil
 *     tags:
 *       - Profiles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - githubUrl
 *             properties:
 *               name:
 *                 type: string
 *                 example: Dawillams
 *               bio:
 *                 type: string
 *                 example: Estudante de Sistemas para Internet
 *               githubUrl:
 *                 type: string
 *                 example: https://github.com/paykuhan
 *     responses:
 *       201:
 *         description: Perfil cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
routes.post("/profiles", profileController.create);
/**
 * @openapi
 * /api/profiles/{id}:
 *   get:
 *     summary: Busca um perfil pelo ID
 *     tags:
 *       - Profiles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do perfil
 *     responses:
 *       200:
 *         description: Perfil encontrado com sucesso
 *       404:
 *         description: Perfil não encontrado
 */
routes.get("/profiles/:id", profileController.findById);

// Technology
/**
 * @openapi
 * /api/technologies:
 *   post:
 *     summary: Cadastra uma nova tecnologia
 *     tags:
 *       - Technologies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Express
 *     responses:
 *       201:
 *         description: Tecnologia cadastrada com sucesso
 *       400:
 *         description: Dados inválidos ou tecnologia já cadastrada
 */
routes.post("/technologies", technologyController.create);
/**
 * @openapi
 * /api/technologies:
 *   get:
 *     summary: Lista todas as tecnologias
 *     tags:
 *       - Technologies
 *     responses:
 *       200:
 *         description: Lista de tecnologias retornada com sucesso
 */
routes.get("/technologies", technologyController.findAll);

// Project
/**
 * @openapi
 * /api/projects:
 *   post:
 *     summary: Cadastra um novo projeto
 *     tags:
 *       - Projects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - repositoryUrl
 *               - profileId
 *               - technologyIds
 *             properties:
 *               title:
 *                 type: string
 *                 example: DevShowcase API
 *               description:
 *                 type: string
 *                 example: API para portfólio de desenvolvedores
 *               repositoryUrl:
 *                 type: string
 *                 example: https://github.com/paykuhan/atividade-02-devshowcase-api
 *               demoUrl:
 *                 type: string
 *                 example: https://exemplo.com
 *               profileId:
 *                 type: integer
 *                 example: 1
 *               technologyIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1]
 *     responses:
 *       201:
 *         description: Projeto cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Perfil ou tecnologia não encontrados
 */
routes.post("/projects", projectController.create);

/**
 * @openapi
 * /api/projects:
 *   get:
 *     summary: Lista projetos
 *     description: Retorna os projetos com opção de filtro por tecnologia e paginação.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: query
 *         name: technology
 *         schema:
 *           type: string
 *         description: Nome da tecnologia para filtrar os projetos
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número da página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Quantidade de projetos por página
 *     responses:
 *       200:
 *         description: Lista de projetos retornada com sucesso
 *       400:
 *         description: Parâmetros inválidos
 */
routes.get("/projects", projectController.findAll);
/**
 * @openapi
 * /api/projects/{id}/upvote:
 *   put:
 *     summary: Adiciona um upvote ao projeto
 *     description: Incrementa em 1 a quantidade de upvotes do projeto informado.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     responses:
 *       200:
 *         description: Upvote adicionado com sucesso
 *       404:
 *         description: Projeto não encontrado
 */
routes.put("/projects/:id/upvote", projectController.upvote);
/**
 * @openapi
 * /api/projects/{id}/feedbacks:
 *   post:
 *     summary: Cadastra um feedback para o projeto
 *     description: Cadastra comentário e nota de 1 a 5 e atualiza a média do projeto.
 *     tags:
 *       - Feedbacks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do projeto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - authorName
 *               - message
 *               - rating
 *             properties:
 *               authorName:
 *                 type: string
 *                 example: Dawillams
 *               message:
 *                 type: string
 *                 example: Projeto muito bom!
 *               rating:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 5
 *     responses:
 *       201:
 *         description: Feedback cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Projeto não encontrado
 */
routes.post("/projects/:id/feedbacks", feedbackController.create);