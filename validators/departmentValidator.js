import { z } from "zod";

const departmentValidator = z.object({
  name: z.string(),
});

export { departmentValidator };
