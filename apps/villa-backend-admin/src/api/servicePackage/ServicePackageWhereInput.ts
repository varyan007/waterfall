import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PricingRuleListRelationFilter } from "../pricingRule/PricingRuleListRelationFilter";

export type ServicePackageWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  pricingRules?: PricingRuleListRelationFilter;
  services?: JsonFilter;
};
