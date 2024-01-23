-- DropIndex
DROP INDEX "Pessoa_email_key";

-- AlterTable
ALTER TABLE "Pessoa" ALTER COLUMN "email" DROP NOT NULL;
