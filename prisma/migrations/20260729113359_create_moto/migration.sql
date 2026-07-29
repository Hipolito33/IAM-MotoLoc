-- CreateTable
CREATE TABLE "Moto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "quilometragem" INTEGER NOT NULL,
    "placa" TEXT NOT NULL,
    "chassi" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "cilindrada" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Moto_placa_key" ON "Moto"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Moto_chassi_key" ON "Moto"("chassi");
