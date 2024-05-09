import { z } from "zod";

const languageValidator = z.object({
  name: z.string(),
});

export { languageValidator };
