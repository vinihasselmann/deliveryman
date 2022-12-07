import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token missing",
    });
  }
  
  const [, _token] = authHeader.split(" ");

  
var token = _token.replace(/"/g, '');

  try {
    const { sub } = verify(
      token,
      `36adcf33f08d9e7b4d0c71c859649d64`
    ) as IPayload;

    req.id_client = sub;

    return next();
  } catch (err) {
    console.log(`EU SOU O ERRO: ${err}`)
    return res.status(401).json({
      message: "Invalid token!",
    });
  }
}
