import { z } from "zod";

const createSoftwareValidator = z.object({
  name: z.string(),
  version: z.optional(z.string()),
  description: z.optional(z.string()),
});

const updatedSoftwareValidator = z.object({
  name: z.optional(z.string()),
  version: z.optional(z.string()),
  description: z.optional(z.string()),
});

export { createSoftwareValidator, updatedSoftwareValidator };
