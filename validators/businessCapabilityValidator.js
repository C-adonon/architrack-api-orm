import { z } from "zod";

const createBusinessCapabilityValidator = z.object({
  name: z.string(),
  departmentId: z.number(),
});

const updatedBusinessCapabilityValidator = z.object({
  name: z.optional(z.string()),
  departmentId: z.optional(z.number()),
});

export {
  createBusinessCapabilityValidator,
  updatedBusinessCapabilityValidator,
};
