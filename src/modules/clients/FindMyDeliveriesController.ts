import { Request, Response } from "express";
import { FindMyDeliveriesUseCase } from "./FindMyDeliveriesUseCase" 

export class FindMyDeliveriesController {
    async handle(req: Request, res: Response) {

        const { id_client } = req

        const findMyDeliveriesUseCase = new FindMyDeliveriesUseCase()
        const deliveries = await findMyDeliveriesUseCase.execute(id_client)

        return res.json(deliveries)
    }
}