import { Amenity } from "../amenity/Amenity";
import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Service } from "../service/Service";

export type Villa = {
  address: string | null;
  amenities?: Array<Amenity>;
  areaSqrm: number | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  services?: Array<Service>;
  updatedAt: Date;
};
