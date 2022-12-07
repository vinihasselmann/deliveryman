import { prisma } from "../../../database/prismaClient"


export class FindAllAvaliableUseCase {

    async execute() {
        const allDeliveries = await prisma.deliveries.findMany({
            where: {
                ended_at: null,
                id_deliveryman: null,
            }
        });

        return allDeliveries;
    }

}