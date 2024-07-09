// import { PrismaClient } from "@prisma/client";
// require PrismaClient
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (tx) => {
    const exerciseSessions = await tx.exerciseSession.findMany();
    for (const session of exerciseSessions) {
      await tx.exerciseSession.update({
        where: { id: session.id },
        data: {
          exerciseId: session.ExerciseId,
        },
      });
    }
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
