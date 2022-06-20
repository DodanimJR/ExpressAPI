-- CreateTable
CREATE TABLE "Estudiante" (
    "id" SERIAL NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "primerApellido" TEXT NOT NULL,
    "edad" TEXT NOT NULL,
    "paisOrigen" TEXT NOT NULL,
    "carrera" TEXT NOT NULL,
    "moroso" BOOLEAN NOT NULL,
    "deudaCicloAnual" INTEGER NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MateriaOnStudent" (
    "studentId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,

    CONSTRAINT "MateriaOnStudent_pkey" PRIMARY KEY ("studentId","materiaId")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "profesor" TEXT NOT NULL,
    "inicialesProfesor" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,
    "carrera" TEXT NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Materia_codigo_key" ON "Materia"("codigo");

-- AddForeignKey
ALTER TABLE "MateriaOnStudent" ADD CONSTRAINT "MateriaOnStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Estudiante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MateriaOnStudent" ADD CONSTRAINT "MateriaOnStudent_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
