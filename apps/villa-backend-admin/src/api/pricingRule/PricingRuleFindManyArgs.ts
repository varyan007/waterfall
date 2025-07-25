import { PricingRuleWhereInput } from "./PricingRuleWhereInput";
import { PricingRuleOrderByInput } from "./PricingRuleOrderByInput";

export type PricingRuleFindManyArgs = {
  where?: PricingRuleWhereInput;
  orderBy?: Array<PricingRuleOrderByInput>;
  skip?: number;
  take?: number;
};
