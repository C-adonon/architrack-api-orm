import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function prismaErrorHandler(err, req, res, next) {
  if (err instanceof PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2001":
        return res
          .status(404)
          .json({ error: "Not found", issues: err.message });
      case "P2000":
        return res
          .status(400)
          .json({ error: "Invalid input", issues: err.message });
      case "P2002":
        return res
          .status(400)
          .json({ error: "Invalid input", issues: err.message });
      case "P2025":
        return res
          .status(404)
          .json({ error: "Not found", issues: err.message });
      default:
        return res
          .status(500)
          .json({ error: "Internal server error", issues: err.message });
    }
  }
  next(err);
}
