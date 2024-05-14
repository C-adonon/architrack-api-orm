import createHttpError from "http-errors";

export function enumToArray(model) {
  if (!model) throw createHttpError(500, "invalid model");
  const enumValues = Object.values(model);
  return enumValues;
}
