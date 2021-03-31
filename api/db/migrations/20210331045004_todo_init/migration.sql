-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'off'
);

-- CreateIndex
CREATE UNIQUE INDEX "Todo.body_unique" ON "Todo"("body");
