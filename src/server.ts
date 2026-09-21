import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import express from "express";
import { routes } from "./routes/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import { AppError } from "./errors/AppError";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api", routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({
    mensagem: "DevShowcase API está funcionando!"
  });
});
app.use((req, res, next) => {
  next(new AppError("Rota não encontrada", 404));
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});