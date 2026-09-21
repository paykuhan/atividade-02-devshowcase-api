import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      error: "Dados inválidos",
      details: error.issues
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    error: "Erro interno do servidor"
  });
}