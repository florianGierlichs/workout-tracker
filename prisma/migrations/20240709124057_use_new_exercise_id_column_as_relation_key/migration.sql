/*
  Warnings:

  - You are about to drop the column `ExerciseId` on the `ExerciseSession` table. All the data in the column will be lost.
  - Made the column `exerciseId` on table `ExerciseSession` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ExerciseSession" DROP CONSTRAINT "ExerciseSession_ExerciseId_fkey";

-- AlterTable
ALTER TABLE "ExerciseSession" DROP COLUMN "ExerciseId",
ALTER COLUMN "exerciseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ExerciseSession" ADD CONSTRAINT "ExerciseSession_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
