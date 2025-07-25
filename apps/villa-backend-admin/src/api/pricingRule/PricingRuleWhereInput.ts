import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ServicePackageWhereUniqueInput } from "../servicePackage/ServicePackageWhereUniqueInput";

export type PricingRuleWhereInput = {
  dayOfWeek?: StringNullableFilter;
  id?: StringFilter;
  priceModifier?: FloatNullableFilter;
  ruleName?: StringNullableFilter;
  season?: StringNullableFilter;
  servicePackage?: ServicePackageWhereUniqueInput;
  specialEvent?: StringNullableFilter;
};
