-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phonrNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phonrNumber" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "student_id_key" ON "student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_id_key" ON "teacher"("id");
