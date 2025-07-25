import { BookingUpdateManyWithoutServicePackagesInput } from "./BookingUpdateManyWithoutServicePackagesInput";
import { InputJsonValue } from "../../types";
import { PricingRuleUpdateManyWithoutServicePackagesInput } from "./PricingRuleUpdateManyWithoutServicePackagesInput";

export type ServicePackageUpdateInput = {
  bookings?: BookingUpdateManyWithoutServicePackagesInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  pricingRules?: PricingRuleUpdateManyWithoutServicePackagesInput;
  services?: InputJsonValue;
};
