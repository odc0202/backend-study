-- CreateEnum
CREATE TYPE "BackgroundType" AS ENUM ('COLOR', 'IMAGE');

-- CreateEnum
CREATE TYPE "FocusStatus" AS ENUM ('IDLE', 'RUNNING', 'PAUSED', 'DONE');

-- CreateTable
CREATE TABLE "studies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "description" TEXT,
    "password" TEXT,
    "backgroundType" "BackgroundType" NOT NULL DEFAULT 'COLOR',
    "backgroundColor" TEXT,
    "backgroundImage" TEXT,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participants" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "emoji" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "study_reactions" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "study_reactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habits" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_logs" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "habit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "focus_sessions" (
    "id" TEXT NOT NULL,
    "studyId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "durationSecs" INTEGER NOT NULL DEFAULT 1500,
    "elapsedSecs" INTEGER NOT NULL DEFAULT 0,
    "status" "FocusStatus" NOT NULL DEFAULT 'IDLE',
    "pointsEarned" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "focus_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "participants_studyId_nickname_key" ON "participants"("studyId", "nickname");

-- CreateIndex
CREATE UNIQUE INDEX "study_reactions_studyId_emoji_key" ON "study_reactions"("studyId", "emoji");

-- CreateIndex
CREATE UNIQUE INDEX "habit_logs_habitId_date_key" ON "habit_logs"("habitId", "date");

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "studies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "study_reactions" ADD CONSTRAINT "study_reactions_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "studies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "studies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "focus_sessions" ADD CONSTRAINT "focus_sessions_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "studies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
