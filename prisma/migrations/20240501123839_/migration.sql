-- AlterTable
ALTER TABLE "appoinment" ALTER COLUMN "status" SET DEFAULT 'accept';

-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "gender" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "gender" TEXT;
