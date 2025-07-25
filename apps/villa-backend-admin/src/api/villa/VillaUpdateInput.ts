import { BookingUpdateManyWithoutVillasInput } from "./BookingUpdateManyWithoutVillasInput";
import { InputJsonValue } from "../../types";
import { ServiceUpdateManyWithoutVillasInput } from "./ServiceUpdateManyWithoutVillasInput";

export type VillaUpdateInput = {
  address?: string | null;
  areaSqrm?: number | null;
  bookings?: BookingUpdateManyWithoutVillasInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  services?: ServiceUpdateManyWithoutVillasInput;
};
