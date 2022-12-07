import { Request, Response } from "express";
import { FindAllAvaliableUseCase } from "./findAllAvaliableUseCase";

export class FindAllAvaliableController {
  async handle(req: Request, res: Response) {
    
    const findAllAvaliableUseCase = new FindAllAvaliableUseCase();

    const deliveries = await findAllAvaliableUseCase.execute();

    return res.json(deliveries);
  }
}
