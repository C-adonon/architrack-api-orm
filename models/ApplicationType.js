import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class ApplicationType {
  async getAllApplicationTypes() {
    const applicationTypes = await prisma.applicationType.findMany();
    return applicationTypes;
  }

  async getApplicationTypeById(id) {
    const applicationType = await prisma.applicationType.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return applicationType;
  }

  async createApplicationType(data) {
    const applicationTypeExists = await prisma.applicationType.findFirst({
      where: {
        name: data.name,
      },
    });
    if (applicationTypeExists)
      throw createHttpError(400, "ApplicationType already exists");
    const applicationType = await prisma.applicationType.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return applicationType;
  }

  async updateApplicationType(id, data) {
    const applicationTypeExists = await prisma.applicationType.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!applicationTypeExists)
      throw createHttpError(404, "ApplicationType not found");

    let updatedApplicationType = await prisma.applicationType.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return updatedApplicationType;
  }

  async deleteApplicationType(id) {
    const applicationTypeExists = await prisma.applicationType.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!applicationTypeExists)
      throw createHttpError(404, "ApplicationType not found");
    const deletedApplicationType = await prisma.applicationType.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedApplicationType;
  }
}
