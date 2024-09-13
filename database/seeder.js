import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { application } from "express";

const prisma = new PrismaClient();

async function truncateTables() {
  await prisma.accountable.deleteMany();
  await prisma.application.deleteMany();
  await prisma.user.deleteMany();
  await prisma.department.deleteMany();
  await prisma.businessCapability.deleteMany();
  await prisma.applicationType.deleteMany();
  await prisma.provider.deleteMany();
  await prisma.software.deleteMany();
  await prisma.language.deleteMany();
}
// Generate fake departments
// async function createDepartments() {
//   for (let i = 0; i < 5; i++) {
//     const department = faker.person.jobArea();
//     await prisma.department.create({
//       data: {
//         name: department,
//       },
//     });
//   }
// }

async function createDepartments() {
  const departmentNames = new Set();

  while (departmentNames.size < 5) {
    const department = faker.person.jobArea();

    // Check if the generated department name is unique
    if (!departmentNames.has(department)) {
      await prisma.department.create({
        data: {
          name: department,
        },
      });
      // Add the department name to the set to ensure uniqueness
      departmentNames.add(department);
    }
  }
}

// Generate fake departments

// Generate fake business capabilities
async function createBusinessCaps() {
  for (let i = 0; i < 25; i++) {
    await prisma.businessCapability.create({
      data: {
        name: faker.company.buzzPhrase(),
        department: {
          connect: { id: faker.number.int({ min: 1, max: 5 }) },
        },
      },
    });
  }
}

// Generate fake users
async function createUsers() {
  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    await prisma.user.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email: faker.internet.email({
          firstName: firstName.toLowerCase(),
          lastName: lastName.toLowerCase(),
          provider: "c-corp.com",
        }),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement([
          "ARCHITECT",
          "IT_ACCOUNTABLE",
          "BUSINESS_ACCOUNTABLE",
          "STANDARD_USER",
        ]),
        department: {
          connect: { id: faker.number.int({ min: 1, max: 5 }) },
        },
      },
    });
  }
}

// Generate fake application types
async function createAppType() {
  const applicationTypes = [
    "Web Application",
    "Mobile Application",
    "Desktop Application",
    "Embedded System",
    "Other",
  ];
  for (let i = 0; i < applicationTypes.length; i++) {
    await prisma.applicationType.create({
      data: {
        name: applicationTypes[i],
      },
    });
  }
}

// Generate fake providers
async function createProviders() {
  for (let i = 0; i < 15; i++) {
    await prisma.provider.create({
      data: {
        name: faker.company.name(),
        location: faker.location.streetAddress({ useFullAddress: true }),
        logo: faker.image.urlLoremFlickr({ category: "business" }),
        description: faker.lorem.sentence(),
        url: faker.internet.url(),
      },
    });
  }
}

// Generate fake software
async function createSoftwares() {
  const software = [
    "Node.js",
    "React",
    "Angular",
    "Vue.js",
    "Django",
    "Flask",
    "Spring Boot",
    "ASP.NET",
    "Express.js",
    "Ruby on Rails",
  ];
  for (let i = 0; i < software.length; i++) {
    await prisma.software.create({
      data: {
        name: software[i],
        description: faker.lorem.sentence(),
        version: faker.system.semver(),
      },
    });
  }
}

// Generate fake languages
async function createLanguages() {
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "Swift",
    "Go",
    "Ruby",
    "PHP",
    "TypeScript",
    "Kotlin",
  ];
  for (let i = 0; i < languages.length; i++) {
    await prisma.language.create({
      data: {
        name: languages[i],
      },
    });
  }
}

// Generate fake applications
async function createApps() {
  let authorId = faker.number.int({ min: 1, max: 10 });
  for (let i = 0; i < 25; i++) {
    await prisma.application.create({
      data: {
        name: faker.hacker.noun() + " " + faker.hacker.adjective(),
        description: faker.lorem.sentence(),
        version: faker.system.semver(),
        contractType: faker.helpers.arrayElement([
          "FREEWARE",
          "OPEN_SOURCE",
          "COMMERCIAL",
          "INTERNAL",
          "EXTERNAL",
          "UNKNOWN",
        ]),
        state: faker.helpers.arrayElement([
          "PROD",
          "DEV",
          "DEPRECATED",
          "MAINTENANCE",
          "UNKNOWN",
        ]),
        criticality: faker.helpers.arrayElement([
          "HIGH",
          "MEDIUM",
          "LOW",
          "UNKNOWN",
        ]),
        validationStatus: faker.helpers.arrayElement([
          "DRAFT",
          "VALIDATED",
          "TO_BE_VALIDATED",
          "REJECTED",
          "ARCHIVED",
          "UNKNOWN",
        ]),
        hostingType: faker.helpers.arrayElement([
          "ON_PREMISE",
          "CLOUD",
          "HYBRID",
          "UNKNOWN",
        ]),
        author: {
          connect: { id: authorId },
        },
        department: {
          connect: { id: faker.number.int({ min: 1, max: 5 }) },
        },
        provider: {
          connect: { id: faker.number.int({ min: 1, max: 5 }) },
        },
        applicationType: {
          connect: { id: faker.number.int({ min: 1, max: 5 }) },
        },
        languages: {
          connect: { id: faker.number.int({ min: 1, max: 10 }) },
        },
        softwares: {
          connect: { id: faker.number.int({ min: 1, max: 10 }) },
        },
        accountables: {
          createMany: {
            data: [
              {
                userId: authorId,
              },
              {
                userId: faker.number.int({ min: 1, max: 10 }),
              },
            ],
          },
        },
      },
    });
  }
}

// Generate fake accountables
async function createAccountables() {
  const applications = await prisma.application.findMany();
  for (let i = 0; i < applications.length; i++) {
    await prisma.accountable.create({
      data: {
        appId: applications[i].id,
        picId: applications[i].authorId,
      },
    });
    await prisma.accountable.create({
      data: {
        appId: applications[i].id,
        picId: faker.number.int({ min: 1, max: 10 }),
      },
    });
  }
}

function associateLanguages() {
  // Get all applications
  const applications = prisma.application.findMany();
  // Get all languages
  const languages = prisma.language.findMany();
  // For each application, associate it with a random language
  applications.forEach(async (application) => {
    const randomLanguage = faker.helpers.arrayElement(languages);
    await prisma.application.update({
      where: { id: application.id },
      data: {
        languages: {
          connect: { id: randomLanguage.id },
        },
      },
    });
  });
}

// truncateTables();

async function firstSeed() {
  try {
    await createDepartments();
    await createAppType();
    await createProviders();
    await createSoftwares();
    await createLanguages();
    await createBusinessCaps();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function secondSeed() {
  try {
    // await createUsers();
    await createApps();
    // await createAccountables();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
// START WITH THE FIRST SEED
// firstSeed();
// THEN, COMMENT THE FIRST SEED AND RUN THE SECOND SEED
// secondSeed();
