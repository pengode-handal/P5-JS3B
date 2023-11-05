-- CreateTable
CREATE TABLE "Bisnis" (
    "id" SERIAL NOT NULL,
    "typeProduct" TEXT NOT NULL,

    CONSTRAINT "Bisnis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "coName" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imgLink" TEXT NOT NULL,
    "rgPrice" TEXT NOT NULL,
    "bisnisId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bisnisId_fkey" FOREIGN KEY ("bisnisId") REFERENCES "Bisnis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
