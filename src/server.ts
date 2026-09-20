import express from "express";
import { routes } from "./routes/index";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "DevShowcase API está funcionando!"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});