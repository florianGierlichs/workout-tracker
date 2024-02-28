"use server";

import { myPrisma } from "@/prisma/prismaClient";

export const addExercise = async (formData: FormData) => {
  try {
    const newExercise = await myPrisma.exercise.create({
      data: {
        name: formData.get("name") as string,
        muscle: formData.get("muscle") as string,
        equipment: formData.get("equipment") as string,
      },
    });
    console.log("New exercise added: ", newExercise);
  } catch (e) {
    console.error(e);
  }
};
