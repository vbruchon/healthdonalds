import { nanoid } from "nanoid";

export const getId = (name) => {
  const sanitize = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return `${sanitize}-${nanoid(4)}`;
};
