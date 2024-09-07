import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";
import { enumToArray } from "./../utils/enumToArray.js";
import { Role } from "@prisma/client";
import * as argon2 from "argon2";

export default class User {
  async getAllUsers() {
    let users = await prisma.user.findMany({
      select: {
        uuid: true,
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
        uuid: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    if (!user) throw createHttpError(404, "User not found");
    return user;
  }

  async getUserByUuid(uuid) {
    const user = await prisma.user.findUnique({
      where: {
        uuid: uuid,
      },
      select: {
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });
    if (!user) throw createHttpError(404, "User not found");
    return user;
  }

  async getUserByEmail(credentials) {
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
      select: {
        uuid: true,
        firstname: true,
        lastname: true,
        email: true,
        password: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        department: true,
      },
    });

    if (!user || !(await argon2.verify(user.password, credentials.password))) {
      throw createHttpError(401, "invalid credentials");
    } else {
      return {
        uuid: user.uuid,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        department: user.department,
      };
    }
  }

  async createUser(data) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (userExists) throw createHttpError(400, "User already exists");
    let hashedPassword;
    if (data.password) {
      hashedPassword = await argon2.hash(data.password);
    } else {
      throw createHttpError(400, "Password is required");
    }

    if (!data.role) {
      data.role = Role.STANDARD_USER;
    }

    const user = await prisma.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        department: {
          connect: {
            id: data.departmentId,
          },
        },
      },
      select: {
        uuid: true,
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

  async updateUser(uuid, data) {
    const userExists = await prisma.user.findUnique({
      where: {
        uuid: uuid,
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
        uuid: uuid,
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
        uuid: true,
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

  async deleteUser(uuid) {
    const userExists = await prisma.user.findUnique({
      where: {
        uuid: uuid,
      },
    });
    if (!userExists) throw createHttpError(404, "User not found");
    const deletedUser = await prisma.user.delete({
      where: {
        uuid: uuid,
      },
      select: {
        id: true,
        uuid: true,
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
