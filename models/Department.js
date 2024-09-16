import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class Department {
  async getAllDepartments() {
    const departments = await prisma.department.findMany({
      select: {
        id: true,
        name: true,
        businessCapability: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return departments;
  }

  async getDepartmentById(id) {
    const department = await prisma.department.findUnique({
      where: {
        id: parseInt(id),
      },select: {
        id: true,
        name: true,
        businessCapability: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return department;
  }

  async createDepartment(data) {
    const departmentExists = await prisma.department.findFirst({
      where: {
        name: data.name,
      },
    });
    if (departmentExists)
      throw createHttpError(400, "Department already exists");
    const department = await prisma.department.create({
      data: {
        name: data.name,
      },
    });
    return department;
  }

  async updateDepartment(id, data) {
    const departmentExists = await prisma.department.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!departmentExists) throw createHttpError(404, "Department not found");

    let updatedDepartment = await prisma.department.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
      },
    });
    return updatedDepartment;
  }

  async deleteDepartment(id) {
    const departmentExists = await prisma.department.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!departmentExists) throw createHttpError(404, "Department not found");
    const deletedDepartment = await prisma.department.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedDepartment;
  }
}
