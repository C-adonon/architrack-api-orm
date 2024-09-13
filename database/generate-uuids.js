import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { randomUUID } from "crypto";

function generateUUID() {
  return randomUUID();
}

async function main() {
  const usersWithoutUUID = await prisma.user.findMany({
    where: {
      uuid: null,
    },
  });

  console.log(`Found ${usersWithoutUUID.length} users without UUID`);

  for (const user of usersWithoutUUID) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        uuid: generateUUID(),
      },
    });
    console.log(`User ${user.id} updated with new UUID`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
