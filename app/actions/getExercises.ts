"use server";

import { myPrisma } from "@/prisma/prismaClient";

export const getExercises = async () => {
  let exercises;
  try {
    exercises = await myPrisma.exercise.findMany();
  } catch (e) {
    console.error(e);
  }
  return exercises;
};
