import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class Application {
  async getAllApplications() {
    const applications = await prisma.application.findMany();
    return applications;
  }

  async getApplicationById(id) {
    const application = await prisma.application.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        provider: true,
        businessCapability: true,
        applicationType: true,
        author: true,
      },
    });
    return application;
  }

  //   TODO: Change authorId to the logged in user
  async createApplication(data) {
    const applicationExists = await prisma.application.findFirst({
      where: {
        name: data.name,
      },
    });
    if (applicationExists)
      throw createHttpError(400, "Application already exists");

    let connectOptions = {};
    if (data.providerId) {
      connectOptions["provider"] = {
        connect: {
          id: data.providerId,
        },
      };
    }
    if (data.businessCapabilityId) {
      connectOptions["businessCapability"] = {
        connect: {
          id: data.businessCapabilityId,
        },
      };
    }

    const application = await prisma.application.create({
      data: {
        name: data.name,
        description: data.description,
        version: data.version,
        contractType: data.contractType,
        state: data.state,
        criticality: data.criticality,
        validationStatus: data.validationStatus,
        hostingType: data.hostingType,
        author: {
          connect: {
            id: data.authorId,
          },
        },
        applicationType: {
          connect: {
            id: data.applicationTypeId,
          },
        },
        ...connectOptions,
      },
    });
    return application;
  }

  //   TODO: Implement Mailing when application is updated : send mail to accountables & architect
  async updateApplication(id, data) {
    const applicationExists = await prisma.application.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!applicationExists) throw createHttpError(404, "Application not found");

    let connectOptions = {};
    if (data.providerId) {
      connectOptions["provider"] = {
        connect: {
          id: data.providerId,
        },
      };
    }
    if (data.businessCapabilityId) {
      connectOptions["businessCapability"] = {
        connect: {
          id: data.businessCapabilityId,
        },
      };
    }
    if (data.applicationTypeId) {
      connectOptions["applicationType"] = {
        connect: {
          id: data.applicationTypeId,
        },
      };
    }

    let updatedApplication = await prisma.application.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
        description: data.description,
        version: data.version,
        contractType: data.contractType,
        state: data.state,
        criticality: data.criticality,
        validationStatus: data.validationStatus,
        hostingType: data.hostingType,
        ...connectOptions,
      },
    });
    return updatedApplication;
  }

  //   TODO: Implement Mailing when application is deleted : send mail to accountables & architect
  async deleteApplication(id) {
    const applicationExists = await prisma.application.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!applicationExists) throw createHttpError(404, "Application not found");
    const deletedApplication = await prisma.application.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedApplication;
  }
}
