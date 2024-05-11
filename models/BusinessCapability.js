import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class BusinessCapability {
  async getAllBusinessCapabilitys() {
    const businessCapabilitys = await prisma.businessCapability.findMany();
    return businessCapabilitys;
  }

  async getBusinessCapabilityById(id) {
    const businessCapability = await prisma.businessCapability.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return businessCapability;
  }

  async createBusinessCapability(data) {
    const businessCapabilityExists = await prisma.businessCapability.findFirst({
      where: {
        name: data.name,
      },
    });
    if (businessCapabilityExists)
      throw createHttpError(400, "BusinessCapability already exists");
    const businessCapability = await prisma.businessCapability.create({
      data: {
        name: data.name,
        department: {
          connect: {
            id: data.departmentId,
          },
        },
      },
    });
    return businessCapability;
  }

  async updateBusinessCapability(id, data) {
    const businessCapabilityExists = await prisma.businessCapability.findUnique(
      {
        where: {
          id: parseInt(id),
        },
      }
    );
    if (!businessCapabilityExists)
      throw createHttpError(404, "BusinessCapability not found");

    let connectOptions = {};
    if (data.departmentId) {
      connectOptions["department"] = {
        connect: {
          id: data.departmentId,
        },
      };
    }

    let updatedBusinessCapability = await prisma.businessCapability.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        ...connectOptions,
      },
    });
    return updatedBusinessCapability;
  }

  async deleteBusinessCapability(id) {
    const businessCapabilityExists = await prisma.businessCapability.findUnique(
      {
        where: {
          id: parseInt(id),
        },
      }
    );
    if (!businessCapabilityExists)
      throw createHttpError(404, "BusinessCapability not found");
    const deletedBusinessCapability = await prisma.businessCapability.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedBusinessCapability;
  }
}
