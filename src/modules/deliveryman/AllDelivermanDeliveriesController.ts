import { Request, Response } from "express";
import { AllDelivermanDeliveriesUseCase } from "./AllDelivermanDeliveriesUseCase" 

export class AllDelivermanDeliveriesController {
    async handle(req: Request, res: Response) {

        const { id_deliveryman } = req

        const allDelivermanDeliveriesUseCase = new AllDelivermanDeliveriesUseCase()
        const deliveries = await allDelivermanDeliveriesUseCase.execute(id_deliveryman)

        return res.json(deliveries)
    }
}