import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class Software {
  async getAllSoftwares() {
    const softwares = await prisma.software.findMany();
    return softwares;
  }

  async getSoftwareById(id) {
    const software = await prisma.software.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    // if (!software) throw createHttpError(404, "Software not found");
    return software;
  }

  async createSoftware(data) {
    const softwareExists = await prisma.software.findFirst({
      where: {
        name: data.name,
      },
    });
    if (softwareExists) throw createHttpError(400, "Software already exists");
    const software = await prisma.software.create({
      data: {
        name: data.name,
        version: data.version,
        description: data.description,
      },
    });
    return software;
  }

  async updateSoftware(id, data) {
    const softwareExists = await prisma.software.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!softwareExists) throw createHttpError(404, "Software not found");

    let updatedSoftware = await prisma.software.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        version: data.version,
        description: data.description,
      },
    });
    return updatedSoftware;
  }

  async deleteSoftware(id) {
    const softwareExists = await prisma.software.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!softwareExists) throw createHttpError(404, "Software not found");
    const deletedSoftware = await prisma.software.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedSoftware;
  }
}
