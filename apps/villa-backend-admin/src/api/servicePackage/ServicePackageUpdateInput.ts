import { InputJsonValue } from "../../types";
import { BookingUpdateManyWithoutServicePackagesInput } from "./BookingUpdateManyWithoutServicePackagesInput";
import { PricingRuleUpdateManyWithoutServicePackagesInput } from "./PricingRuleUpdateManyWithoutServicePackagesInput";

export type ServicePackageUpdateInput = {
  amenities?: InputJsonValue;
  bookings?: BookingUpdateManyWithoutServicePackagesInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  pricingRules?: PricingRuleUpdateManyWithoutServicePackagesInput;
  services?: InputJsonValue;
};
