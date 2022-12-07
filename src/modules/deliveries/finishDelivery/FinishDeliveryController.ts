import { Request, Response } from "express";
import { FinishDeliveryUseCase } from "./FinishDeliveryUseCase"; 


export class FinishDeliveryController {
    async handle(req: Request, res: Response) {
        const {id_deliveryman} = req;
        const { id: id_delivery } =req.params;

        const finishDeliveryUseCase = new FinishDeliveryUseCase()
        const delivery = await finishDeliveryUseCase.execute({
            id_deliveryman,
            id_delivery
        });

        return res.json(delivery);
    }
}