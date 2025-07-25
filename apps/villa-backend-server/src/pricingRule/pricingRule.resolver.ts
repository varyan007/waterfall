import * as graphql from "@nestjs/graphql";
import { PricingRuleResolverBase } from "./base/pricingRule.resolver.base";
import { PricingRule } from "./base/PricingRule";
import { PricingRuleService } from "./pricingRule.service";

@graphql.Resolver(() => PricingRule)
export class PricingRuleResolver extends PricingRuleResolverBase {
  constructor(protected readonly service: PricingRuleService) {
    super(service);
  }
}
