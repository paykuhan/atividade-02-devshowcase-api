/*
  Warnings:

  - Added the required column `rating` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Feedback_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Feedback" ("authorName", "createdAt", "id", "message", "projectId") SELECT "authorName", "createdAt", "id", "message", "projectId" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repositoryUrl" TEXT NOT NULL,
    "demoUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "averageRating" REAL NOT NULL DEFAULT 0,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "profileId" INTEGER NOT NULL,
    CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "demoUrl", "description", "id", "profileId", "repositoryUrl", "title") SELECT "createdAt", "demoUrl", "description", "id", "profileId", "repositoryUrl", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
