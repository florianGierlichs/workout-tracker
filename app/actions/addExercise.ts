"use server";

import { myPrisma } from "@/prisma/prismaClient";
import { revalidatePath } from "next/cache";

export const addExercise = async (formData: FormData) => {
  if (
    formData.get("name") &&
    formData.get("muscle") &&
    formData.get("equipment")
  ) {
    try {
      const newExercise = await myPrisma.exercise.create({
        data: {
          name: formData.get("name") as string,
          muscle: formData.get("muscle") as string,
          equipment: formData.get("equipment") as string,
        },
      });
      revalidatePath("/");
      console.log("New exercise added: ", newExercise);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.warn("Form data is not valid");
  }
};
