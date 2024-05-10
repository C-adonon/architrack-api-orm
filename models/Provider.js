import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class Provider {
  async getAllProviders() {
    const providers = await prisma.provider.findMany();
    return providers;
  }

  async getProviderById(id) {
    const provider = await prisma.provider.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return provider;
  }

  async createProvider(data) {
    const providerExists = await prisma.provider.findFirst({
      where: {
        name: data.name,
      },
    });
    if (providerExists) throw createHttpError(400, "Provider already exists");
    const provider = await prisma.provider.create({
      data: {
        name: data.name,
        logo: data.logo,
        location: data.location,
        description: data.description,
        url: data.url,
      },
    });
    return provider;
  }

  async updateProvider(id, data) {
    const providerExists = await prisma.provider.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!providerExists) throw createHttpError(404, "Provider not found");

    let updatedProvider = await prisma.provider.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        logo: data.logo,
        location: data.location,
        description: data.description,
        url: data.url,
      },
    });
    return updatedProvider;
  }

  async deleteProvider(id) {
    const providerExists = await prisma.provider.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!providerExists) throw createHttpError(404, "Provider not found");
    const deletedProvider = await prisma.provider.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedProvider;
  }
}
