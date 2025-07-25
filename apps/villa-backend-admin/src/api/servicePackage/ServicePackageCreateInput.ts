import { InputJsonValue } from "../../types";
import { BookingCreateNestedManyWithoutServicePackagesInput } from "./BookingCreateNestedManyWithoutServicePackagesInput";
import { PricingRuleCreateNestedManyWithoutServicePackagesInput } from "./PricingRuleCreateNestedManyWithoutServicePackagesInput";

export type ServicePackageCreateInput = {
  amenities?: InputJsonValue;
  bookings?: BookingCreateNestedManyWithoutServicePackagesInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  pricingRules?: PricingRuleCreateNestedManyWithoutServicePackagesInput;
  services?: InputJsonValue;
};
