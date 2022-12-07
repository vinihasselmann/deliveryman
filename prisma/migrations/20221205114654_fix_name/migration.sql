/*
  Warnings:

  - You are about to drop the column `id_deliverman` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the `deliverman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliverman_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_deliverman",
ADD COLUMN     "id_deliveryman" TEXT;

-- DropTable
DROP TABLE "deliverman";

-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
