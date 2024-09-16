import {
  PrismaClient,
  State,
  ContractType,
  ValidationStatus,
  Criticality,
  HostingType,
} from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";
import { enumToArray } from "./../utils/enumToArray.js";

export default class Application {
  async getAllApplications() {
    const applications = await prisma.application.findMany({
      include: {
        applicationType: true,
        author: true,
        department: {
          include: {
            businessCapability: true,
          },
        },
      },
    });
    return applications;
  }

  async getApplicationById(id) {
    const application = await prisma.application.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        provider: true,
        department: {
          include: {
            businessCapability: true,
          },
        },
        applicationType: true,
        author: {
          include: {
            department: true,
          },
        },
        languages: true,
        softwares: true,
        accountables: {
          include: {
            user: {
              include: {
                department: true,
              },
            },
          },
        },
      },
    });
    return application;
  }

  //   TODO: Change authorId to the logged in user
  async createApplication(data, authorId) {
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
    if (data.departmentId) {
      connectOptions["department"] = {
        connect: {
          id: data.departmentId,
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
    if (data.languages) {
      connectOptions["languages"] = {
        connect: data.languages.map((id) => {
          return { id };
        }),
      };
    }
    if (data.softwares) {
      connectOptions["softwares"] = {
        connect: data.softwares.map((id) => {
          return { id };
        }),
      };
    }

    if (data.accountables && data.accountables.length > 0) {
      connectOptions["user"] = {
        createMany: {
          data: data.accountables.map((userId) => {
            return { userId: userId };
          }),
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
        validationStatus: "DRAFT",
        hostingType: data.hostingType,
        author: {
          connect: {
            uuid: authorId,
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

  async updateApplication(id, data) {
    const foundApplication = await prisma.application.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!foundApplication) throw createHttpError(404, "Application not found");

    let connectOptions = {};
    if (data.providerId) {
      connectOptions["provider"] = {
        connect: {
          id: data.providerId,
        },
      };
    }
    if (data.departmentId) {
      connectOptions["department"] = {
        connect: {
          id: data.departmentId,
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
    if (data.languages) {
      console.log(data.languages);
      connectOptions["languages"] = {
        set: data.languages.map((id) => {
          return { id };
        }),
      };
      console.log(connectOptions);
    }
    if (data.softwares) {
      connectOptions["softwares"] = {
        set: data.softwares.map((id) => {
          return { id };
        }),
      };
    }
    if (data.accountables && data.accountables.length > 0) {
      console.log(data.accountables);
      connectOptions["accountables"] = {
        deleteMany: {},
        createMany: {
          data: data.accountables.map((userId) => {
            return { userId: userId };
          }),
        },
      };
      console.log(connectOptions);
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
      include: {
        accountables: true,
        provider: true,
        department: true,
        applicationType: true,
        languages: true,
        softwares: true,
      },
    });
    return updatedApplication;
  }

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

  async getAllContractTypes() {
    const contractTypes = enumToArray(ContractType);
    return contractTypes;
  }

  async getAllStates() {
    const states = enumToArray(State);
    return states;
  }

  async getAllCriticalities() {
    const criticalities = enumToArray(Criticality);
    return criticalities;
  }

  async getAllHostingTypes() {
    const hostingTypes = enumToArray(HostingType);
    return hostingTypes;
  }

  async getAllValidationStatuses() {
    const validationStatuses = enumToArray(ValidationStatus);
    return validationStatuses;
  }
}
