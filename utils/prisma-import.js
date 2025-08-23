import {
  PrismaClient,
  State,
  ContractType,
  ValidationStatus,
  Criticality,
  HostingType,
} from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL + "?connection_limit=1&pool_timeout=5",
      },
    },
    log: ["warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// // Handle clean shutdown
// process.on("beforeExit", async () => {
//   await prisma.$disconnect();
// });

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default prisma;
