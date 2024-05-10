import { z } from "zod";

const createProviderValidator = z.object({
  name: z.string(),
  version: z.optional(z.string()),
  description: z.optional(z.string()),
  logo: z.optional(z.string()),
  location: z.optional(z.string()),
  url: z.optional(z.string()),
});

const updatedProviderValidator = z.object({
  name: z.optional(z.string()),
  version: z.optional(z.string()),
  description: z.optional(z.string()),
  logo: z.optional(z.string()),
  location: z.optional(z.string()),
  url: z.optional(z.string()),
});

export { createProviderValidator, updatedProviderValidator };
