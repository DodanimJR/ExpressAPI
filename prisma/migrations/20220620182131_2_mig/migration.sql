/*
  Warnings:

  - You are about to drop the `MateriaOnStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MateriaOnStudent" DROP CONSTRAINT "MateriaOnStudent_materiaId_fkey";

-- DropForeignKey
ALTER TABLE "MateriaOnStudent" DROP CONSTRAINT "MateriaOnStudent_studentId_fkey";

-- AlterTable
ALTER TABLE "Estudiante" ADD COLUMN     "materias" TEXT[];

-- DropTable
DROP TABLE "MateriaOnStudent";
