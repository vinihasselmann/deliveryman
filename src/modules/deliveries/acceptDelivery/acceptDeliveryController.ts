import { Request, Response } from "express";
import { AcceptDeliveryUseCase } from "./acceptDeliveryUseCase";


export class AcceptDeliveryController {
    async handle(req: Request, res: Response) {
        const {id_deliveryman} = req;
        const { id: id_delivery } =req.params;

        const acceptDeliveryUseCase = new AcceptDeliveryUseCase()
        const delivery = await acceptDeliveryUseCase.execute({
            id_deliveryman,
            id_delivery
        });

        return res.json(delivery);
    }
}