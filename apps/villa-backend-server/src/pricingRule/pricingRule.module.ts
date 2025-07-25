import { Module } from "@nestjs/common";
import { PricingRuleModuleBase } from "./base/pricingRule.module.base";
import { PricingRuleService } from "./pricingRule.service";
import { PricingRuleController } from "./pricingRule.controller";
import { PricingRuleResolver } from "./pricingRule.resolver";

@Module({
  imports: [PricingRuleModuleBase],
  controllers: [PricingRuleController],
  providers: [PricingRuleService, PricingRuleResolver],
  exports: [PricingRuleService],
})
export class PricingRuleModule {}
