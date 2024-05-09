import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import createHttpError from "http-errors";

export default class Language {
  async getAllLanguages() {
    const languages = await prisma.language.findMany();
    return languages;
  }

  async getLanguageById(id) {
    const language = await prisma.language.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return language;
  }

  async createLanguage(data) {
    const languageExists = await prisma.language.findFirst({
      where: {
        name: data.name,
      },
    });
    if (languageExists) throw createHttpError(400, "Language already exists");
    const language = await prisma.language.create({
      data: {
        name: data.name,
      },
    });
    return language;
  }

  async updateLanguage(id, data) {
    const languageExists = await prisma.language.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!languageExists) throw createHttpError(404, "Language not found");

    let updatedLanguage = await prisma.language.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
      },
    });
    return updatedLanguage;
  }

  async deleteLanguage(id) {
    const languageExists = await prisma.language.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!languageExists) throw createHttpError(404, "Language not found");
    const deletedLanguage = await prisma.language.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedLanguage;
  }
}
