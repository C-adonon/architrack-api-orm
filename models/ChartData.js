import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient();

function formatData(data, key, table) {
  return data.map((item) => {
    if (table === undefined) {
      return {
        label: item[key],
        value: item._count[key],
      };
    } else if (table && Array.isArray(table)) {
      return {
        id: item[key],
        label: table.find((t) => t.id === item[key]),
        value: item._count[key],
      };
    }
  });
}

export default class ChartData {
  async getChartData() {
    // Count all applications
    let countAllApplications = await prisma.application.count();

    // Count applications by state
    let applicationsByState = await prisma.application.groupBy({
      by: ["state"],
      _count: {
        state: true,
      },
    });
    applicationsByState = formatData(applicationsByState, "state");

    // Count applications by hosting type
    let applicationsByHostingType = await prisma.application.groupBy({
      by: ["hostingType"],
      _count: {
        hostingType: true,
      },
    });
    applicationsByHostingType = formatData(
      applicationsByHostingType,
      "hostingType"
    );

    // Count applications by validation status
    let applicationsByValidationStatus = await prisma.application.groupBy({
      by: ["validationStatus"],
      _count: {
        validationStatus: true,
      },
    });
    applicationsByValidationStatus = formatData(
      applicationsByValidationStatus,
      "validationStatus"
    );

    // Count applications by type
    let applicationsByApplicationType = await prisma.application.groupBy({
      by: ["applicationTypeId"],
      _count: {
        applicationTypeId: true,
      },
    });
    // get application type names
    let applicationTypeNames = await prisma.applicationType.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    // format data
    applicationsByApplicationType = formatData(
      applicationsByApplicationType,
      "applicationTypeId",
      applicationTypeNames
    );

    // Count application by providers
    let applicationsByProvider = await prisma.application.groupBy({
      by: ["providerId"],
      _count: {
        providerId: true,
      },
    });
    // get provider names
    let providerNames = await prisma.provider.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    // format data
    applicationsByProvider = formatData(
      applicationsByProvider,
      "providerId",
      providerNames
    );

    // count all providers
    let allProviders = await prisma.provider.count();

    // count all business capabilities
    let allBusinessCapabilities = await prisma.businessCapability.count();

    return {
      numberOfApplications: countAllApplications,
      applicationsByState: applicationsByState,
      applicationsByHostingType: applicationsByHostingType,
      applicationsByValidationStatus: applicationsByValidationStatus,
      applicationsByApplicationType: applicationsByApplicationType,
      applicationsByProvider: applicationsByProvider,
      numberOfProviders: allProviders,
      numberOfBusinessCapabilities: allBusinessCapabilities,
    };
  }
}
