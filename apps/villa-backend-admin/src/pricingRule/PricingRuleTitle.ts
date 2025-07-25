import { PricingRule as TPricingRule } from "../api/pricingRule/PricingRule";

export const PRICINGRULE_TITLE_FIELD = "ruleName";

export const PricingRuleTitle = (record: TPricingRule): string => {
  return record.ruleName?.toString() || String(record.id);
};
