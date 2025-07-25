import { JsonFilter } from "../../util/JsonFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PricingRuleListRelationFilter } from "../pricingRule/PricingRuleListRelationFilter";

export type ServicePackageWhereInput = {
  amenities?: JsonFilter;
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  pricingRules?: PricingRuleListRelationFilter;
  services?: JsonFilter;
};
