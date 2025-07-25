import { BookingCreateNestedManyWithoutAmenitiesInput } from "./BookingCreateNestedManyWithoutAmenitiesInput";
import { InputJsonValue } from "../../types";
import { VillaWhereUniqueInput } from "../villa/VillaWhereUniqueInput";

export type AmenityCreateInput = {
  bookings?: BookingCreateNestedManyWithoutAmenitiesInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  typeField?: string | null;
  villa?: VillaWhereUniqueInput | null;
};
