import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DevShowcase API",
      version: "2.0.0",
      description:
        "API desenvolvida para a Atividade 02 da disciplina de Programação Backend."
    },
    servers: [
  {
    url: "https://atividade-02-devshowcase-api.onrender.com",
    description: "Servidor de produção - Render"
  },
  {
    url: "http://localhost:3000",
    description: "Servidor local"
  }
]
  },
  apis: ["./src/routes/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);