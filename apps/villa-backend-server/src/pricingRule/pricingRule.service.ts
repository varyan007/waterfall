import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PricingRuleServiceBase } from "./base/pricingRule.service.base";

@Injectable()
export class PricingRuleService extends PricingRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
