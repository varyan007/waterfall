import { BookingCreateNestedManyWithoutVillasInput } from "./BookingCreateNestedManyWithoutVillasInput";
import { InputJsonValue } from "../../types";
import { ServiceCreateNestedManyWithoutVillasInput } from "./ServiceCreateNestedManyWithoutVillasInput";

export type VillaCreateInput = {
  address?: string | null;
  areaSqrm?: number | null;
  bookings?: BookingCreateNestedManyWithoutVillasInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  services?: ServiceCreateNestedManyWithoutVillasInput;
};
