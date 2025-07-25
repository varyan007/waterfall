import { ServicePackageWhereUniqueInput } from "../servicePackage/ServicePackageWhereUniqueInput";

export type PricingRuleCreateInput = {
  dayOfWeek?: string | null;
  priceModifier?: number | null;
  ruleName?: string | null;
  season?: string | null;
  servicePackage?: ServicePackageWhereUniqueInput | null;
  specialEvent?: string | null;
};
