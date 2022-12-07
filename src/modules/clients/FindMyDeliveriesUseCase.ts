import { prisma } from "../../database/prismaClient";

export class FindMyDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        deliveries: true,
        username: true,
        id: true,
      },
    });

    return deliveries;
  }
}
