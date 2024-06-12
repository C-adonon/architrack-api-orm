import { z } from "zod";

const createUserValidator = z.object({
  email: z.string().email(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  role: z.string(),
  departmentId: z.number(),
});

const updatedUserValidator = z.object({
  email: z.optional(z.string().email()),
  password: z.optional(z.string()),
  firstname: z.optional(z.string()),
  lastname: z.optional(z.string()),
  role: z.optional(z.string()),
  departmentId: z.optional(z.number()),
});

export { createUserValidator, updatedUserValidator };
