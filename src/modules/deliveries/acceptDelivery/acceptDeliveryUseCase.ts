import { prisma } from "../../../database/prismaClient"

interface IAcceptDelivery {
    id_delivery: string;
    id_deliveryman: string;
}

export class AcceptDeliveryUseCase {
    async execute({id_delivery, id_deliveryman} : IAcceptDelivery) {
        
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery,
            },
            data: {
                id_deliveryman
            }
        });

        return result;
    }
}