import { SortOrder } from "../../util/SortOrder";

export type PricingRuleOrderByInput = {
  createdAt?: SortOrder;
  dayOfWeek?: SortOrder;
  id?: SortOrder;
  priceModifier?: SortOrder;
  ruleName?: SortOrder;
  season?: SortOrder;
  servicePackageId?: SortOrder;
  specialEvent?: SortOrder;
  updatedAt?: SortOrder;
};
