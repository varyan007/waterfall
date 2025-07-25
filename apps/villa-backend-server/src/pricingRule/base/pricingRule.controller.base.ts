/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PricingRuleService } from "../pricingRule.service";
import { PricingRuleCreateInput } from "./PricingRuleCreateInput";
import { PricingRule } from "./PricingRule";
import { PricingRuleFindManyArgs } from "./PricingRuleFindManyArgs";
import { PricingRuleWhereUniqueInput } from "./PricingRuleWhereUniqueInput";
import { PricingRuleUpdateInput } from "./PricingRuleUpdateInput";

export class PricingRuleControllerBase {
  constructor(protected readonly service: PricingRuleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PricingRule })
  async createPricingRule(
    @common.Body() data: PricingRuleCreateInput
  ): Promise<PricingRule> {
    return await this.service.createPricingRule({
      data: {
        ...data,

        servicePackage: data.servicePackage
          ? {
              connect: data.servicePackage,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dayOfWeek: true,
        id: true,
        priceModifier: true,
        ruleName: true,
        season: true,

        servicePackage: {
          select: {
            id: true,
          },
        },

        specialEvent: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PricingRule] })
  @ApiNestedQuery(PricingRuleFindManyArgs)
  async pricingRules(@common.Req() request: Request): Promise<PricingRule[]> {
    const args = plainToClass(PricingRuleFindManyArgs, request.query);
    return this.service.pricingRules({
      ...args,
      select: {
        createdAt: true,
        dayOfWeek: true,
        id: true,
        priceModifier: true,
        ruleName: true,
        season: true,

        servicePackage: {
          select: {
            id: true,
          },
        },

        specialEvent: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PricingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pricingRule(
    @common.Param() params: PricingRuleWhereUniqueInput
  ): Promise<PricingRule | null> {
    const result = await this.service.pricingRule({
      where: params,
      select: {
        createdAt: true,
        dayOfWeek: true,
        id: true,
        priceModifier: true,
        ruleName: true,
        season: true,

        servicePackage: {
          select: {
            id: true,
          },
        },

        specialEvent: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PricingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePricingRule(
    @common.Param() params: PricingRuleWhereUniqueInput,
    @common.Body() data: PricingRuleUpdateInput
  ): Promise<PricingRule | null> {
    try {
      return await this.service.updatePricingRule({
        where: params,
        data: {
          ...data,

          servicePackage: data.servicePackage
            ? {
                connect: data.servicePackage,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dayOfWeek: true,
          id: true,
          priceModifier: true,
          ruleName: true,
          season: true,

          servicePackage: {
            select: {
              id: true,
            },
          },

          specialEvent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PricingRule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePricingRule(
    @common.Param() params: PricingRuleWhereUniqueInput
  ): Promise<PricingRule | null> {
    try {
      return await this.service.deletePricingRule({
        where: params,
        select: {
          createdAt: true,
          dayOfWeek: true,
          id: true,
          priceModifier: true,
          ruleName: true,
          season: true,

          servicePackage: {
            select: {
              id: true,
            },
          },

          specialEvent: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
