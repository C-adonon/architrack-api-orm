import { z } from "zod";

const createApplicationValidator = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  version: z.optional(z.string()),
  contractType: z.optional(z.string()),
  state: z.string(),
  criticality: z.string(),
  validationStatus: z.string(),
  hostingType: z.optional(z.string()),
  authorId: z.number(),
  applicationTypeId: z.number(),
  businessCapabilityId: z.optional(z.number()),
  providerId: z.optional(z.number()),
});

const updatedApplicationValidator = z.object({
  name: z.optional(z.string()),
  description: z.optional(z.string()),
  version: z.optional(z.string()),
  contractType: z.optional(z.string()),
  state: z.optional(z.string()),
  criticality: z.optional(z.string()),
  validationStatus: z.optional(z.string()),
  hostingType: z.optional(z.string()),
  authorId: z.optional(z.number()),
  applicationTypeId: z.optional(z.number()),
  businessCapabilityId: z.optional(z.number()),
  providerId: z.optional(z.number()),
});

export { createApplicationValidator, updatedApplicationValidator };
