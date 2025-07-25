import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PricingRuleService } from "./pricingRule.service";
import { PricingRuleControllerBase } from "./base/pricingRule.controller.base";

@swagger.ApiTags("pricingRules")
@common.Controller("pricingRules")
export class PricingRuleController extends PricingRuleControllerBase {
  constructor(protected readonly service: PricingRuleService) {
    super(service);
  }
}
