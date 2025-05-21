/*
  Warnings:

  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `player` on the `Entries` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Entries` table. All the data in the column will be lost.
  - You are about to drop the column `player` on the `Points` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `Points` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Points` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Team_credentials_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Team";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Nutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "pointsTotal" REAL NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'de'
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Nutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Entries_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Entries" ("gameId", "id", "lastUpdated", "slot", "value") SELECT "gameId", "id", "lastUpdated", "slot", "value" FROM "Entries";
DROP TABLE "Entries";
ALTER TABLE "new_Entries" RENAME TO "Entries";
CREATE TABLE "new_Points" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Points_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Nutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Points_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Points" ("gameId", "id", "lastUpdated", "slot", "value") SELECT "gameId", "id", "lastUpdated", "slot", "value" FROM "Points";
DROP TABLE "Points";
ALTER TABLE "new_Points" RENAME TO "Points";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Nutzer_uname_key" ON "Nutzer"("uname");
