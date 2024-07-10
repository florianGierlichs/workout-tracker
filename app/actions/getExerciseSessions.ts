"use server";

import { myPrisma } from "@/prisma/prismaClient";

export const getExerciseSessions = async () => {
  let exerciseSessions;
  try {
    exerciseSessions = await myPrisma.exerciseSession.findMany();
  } catch (e) {
    console.error(e);
  }
  return exerciseSessions;
};
