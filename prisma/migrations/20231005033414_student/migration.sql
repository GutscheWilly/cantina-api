/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Student` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registration" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "spendingLimit" REAL NOT NULL,
    "school" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Student" ("class", "createdAt", "registration", "school", "spendingLimit", "userId") SELECT "class", "createdAt", "registration", "school", "spendingLimit", "userId" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");
CREATE UNIQUE INDEX "Student_registration_key" ON "Student"("registration");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
