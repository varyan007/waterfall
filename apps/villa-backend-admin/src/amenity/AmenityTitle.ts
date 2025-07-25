import { Amenity as TAmenity } from "../api/amenity/Amenity";

export const AMENITY_TITLE_FIELD = "name";

export const AmenityTitle = (record: TAmenity): string => {
  return record.name?.toString() || String(record.id);
};
