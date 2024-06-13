import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";
import { enumToArray } from "./../utils/enumToArray.js";
import { Role } from "@prisma/client";

export default class User {
  async getAllUsers() {
    let users = await prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    return users;
  }

  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    return user;
  }

  async createUser(data) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userExists) throw createHttpError(400, "User already exists");

    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        role: data.role,
        department: {
          connect: {
            id: data.departmentId,
          },
        },
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    return user;
  }

  async updateUser(id, data) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!userExists) throw createHttpError(404, "User not found");

    let connectOptions = {};
    if (data.departmentId) {
      connectOptions["department"] = {
        connect: {
          id: data.departmentId,
        },
      };
    }

    let updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        role: data.role,
        ...connectOptions,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    return updatedUser;
  }

  async deleteUser(id) {
    const userExists = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!userExists) throw createHttpError(404, "User not found");
    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    return deletedUser;
  }

  async getAllRoles() {
    const roles = enumToArray(Role);
    return roles;
  }
}
