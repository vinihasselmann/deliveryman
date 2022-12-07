-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliverman_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "id_deliverman" DROP NOT NULL,
ALTER COLUMN "ended_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliverman_fkey" FOREIGN KEY ("id_deliverman") REFERENCES "deliverman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
