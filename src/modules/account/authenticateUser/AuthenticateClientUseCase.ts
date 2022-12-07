import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) throw new Error("invalid credentials!");

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) throw new Error("invalid credentials");

    const token = sign({ username }, "36adcf33f08d9e7b4d0c71c859649d64", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
