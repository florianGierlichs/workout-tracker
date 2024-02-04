/*
  Warnings:

  - You are about to drop the column `equipment` on the `ExerciseSession` table. All the data in the column will be lost.
  - You are about to drop the column `muscle` on the `ExerciseSession` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ExerciseSession` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ExerciseSession` table. All the data in the column will be lost.
  - Added the required column `ExerciseId` to the `ExerciseSession` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reps` on the `ExerciseSession` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `weight` on the `ExerciseSession` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ExerciseSession" DROP COLUMN "equipment",
DROP COLUMN "muscle",
DROP COLUMN "name",
DROP COLUMN "type",
ADD COLUMN     "ExerciseId" INTEGER NOT NULL,
DROP COLUMN "reps",
ADD COLUMN     "reps" INTEGER NOT NULL,
DROP COLUMN "weight",
ADD COLUMN     "weight" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "muscle" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExerciseSession" ADD CONSTRAINT "ExerciseSession_ExerciseId_fkey" FOREIGN KEY ("ExerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
