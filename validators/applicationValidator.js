import { z } from "zod";

const createApplicationValidator = z.object({
  name: z.string(),
  description: z.optional(z.string()),
  version: z.optional(z.string()),
  contractType: z.optional(z.string()),
  state: z.string(),
  criticality: z.string(),
  hostingType: z.optional(z.string()),
  applicationTypeId: z.number(),
  departmentId: z.optional(z.number()),
  businessCapabilityId: z.optional(z.number()),
  providerId: z.optional(z.number()),
  softwares: z.optional(z.nullable(z.array(z.number()))),
  languages: z.optional(z.nullable(z.array(z.number()))),
  accountables: z.optional(z.nullable(z.array(z.number()))),
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
  departmentId: z.optional(z.number()),
  businessCapabilityId: z.optional(z.number()),
  providerId: z.optional(z.number()),
  softwares: z.optional(z.nullable(z.array(z.number()))),
  languages: z.optional(z.nullable(z.array(z.number()))),
  accountables: z.optional(z.nullable(z.array(z.number()))),
});

export { createApplicationValidator, updatedApplicationValidator };
