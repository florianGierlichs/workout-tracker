"use server";

import { myPrisma } from "@/prisma/prismaClient";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const addExercise = async (
  _previousState: unknown,
  formData: FormData
) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    console.warn("User is not logged in");
    return { message: "User is not logged in" };
  }

  const name = formData.get("name");
  const muscle = formData.get("muscle");
  const equipment = formData.get("equipment");

  if (
    typeof name === "string" &&
    typeof muscle === "string" &&
    typeof equipment === "string"
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
      return newExercise;
    } catch (e) {
      console.error(e);
      return { message: "Error creating exercise" };
    }
  } else {
    console.warn("Form data is not valid");
    return { message: "Form data is not valid" };
  }
};
