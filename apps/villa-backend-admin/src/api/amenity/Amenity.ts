import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { Villa } from "../villa/Villa";

export type Amenity = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  typeField: string | null;
  updatedAt: Date;
  villa?: Villa | null;
};
