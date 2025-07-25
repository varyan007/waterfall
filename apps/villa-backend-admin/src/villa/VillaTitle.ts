import { Villa as TVilla } from "../api/villa/Villa";

export const VILLA_TITLE_FIELD = "name";

export const VillaTitle = (record: TVilla): string => {
  return record.name?.toString() || String(record.id);
};
