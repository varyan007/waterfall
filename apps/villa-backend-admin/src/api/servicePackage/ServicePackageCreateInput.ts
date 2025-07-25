import { BookingCreateNestedManyWithoutServicePackagesInput } from "./BookingCreateNestedManyWithoutServicePackagesInput";
import { InputJsonValue } from "../../types";
import { PricingRuleCreateNestedManyWithoutServicePackagesInput } from "./PricingRuleCreateNestedManyWithoutServicePackagesInput";

export type ServicePackageCreateInput = {
  bookings?: BookingCreateNestedManyWithoutServicePackagesInput;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  pricingRules?: PricingRuleCreateNestedManyWithoutServicePackagesInput;
  services?: InputJsonValue;
};
