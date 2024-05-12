"use server";

import { myPrisma } from "@/prisma/prismaClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const addExerciseSession = async (
  _previousState: unknown,
  formData: FormData
) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    console.warn("User is not logged in");
    return { message: "User is not logged in" };
  }

  const sets = formData.get("sets");
  const reps = formData.get("reps");
  const weight = formData.get("weight");
  const exerciseId = formData.get("exerciseId");

  if (
    typeof sets === "string" &&
    typeof reps === "string" &&
    typeof weight === "string" &&
    typeof exerciseId === "string"
  ) {
    try {
      const newExerciseSession = await myPrisma.exerciseSession.create({
        data: {
          date: new Date(),
          sets: Number(sets),
          reps: reps,
          weight: Number(weight),
          userId: session.user.id,
          ExerciseId: exerciseId,
        },
      });
      console.log("New exercise session created: ", newExerciseSession);
      return newExerciseSession;
    } catch (error) {
      console.error("Error creating exercise session: ", error);
      return { message: "Error creating exercise session" };
    }
  } else {
    console.warn("Form data is not valid");
    return { message: "Form data is not valid" };
  }
};
