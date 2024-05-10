import { z } from "zod";

const createApplicationTypeValidator = z.object({
  name: z.string(),
  description: z.optional(z.string()),
});

const updatedApplicationTypeValidator = z.object({
  name: z.optional(z.string()),
  description: z.optional(z.string()),
});

export { createApplicationTypeValidator, updatedApplicationTypeValidator };
