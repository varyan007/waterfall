/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ServicePackage } from "./ServicePackage";
import { ServicePackageCountArgs } from "./ServicePackageCountArgs";
import { ServicePackageFindManyArgs } from "./ServicePackageFindManyArgs";
import { ServicePackageFindUniqueArgs } from "./ServicePackageFindUniqueArgs";
import { CreateServicePackageArgs } from "./CreateServicePackageArgs";
import { UpdateServicePackageArgs } from "./UpdateServicePackageArgs";
import { DeleteServicePackageArgs } from "./DeleteServicePackageArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { PricingRuleFindManyArgs } from "../../pricingRule/base/PricingRuleFindManyArgs";
import { PricingRule } from "../../pricingRule/base/PricingRule";
import { ServicePackageService } from "../servicePackage.service";
@graphql.Resolver(() => ServicePackage)
export class ServicePackageResolverBase {
  constructor(protected readonly service: ServicePackageService) {}

  async _servicePackagesMeta(
    @graphql.Args() args: ServicePackageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServicePackage])
  async servicePackages(
    @graphql.Args() args: ServicePackageFindManyArgs
  ): Promise<ServicePackage[]> {
    return this.service.servicePackages(args);
  }

  @graphql.Query(() => ServicePackage, { nullable: true })
  async servicePackage(
    @graphql.Args() args: ServicePackageFindUniqueArgs
  ): Promise<ServicePackage | null> {
    const result = await this.service.servicePackage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServicePackage)
  async createServicePackage(
    @graphql.Args() args: CreateServicePackageArgs
  ): Promise<ServicePackage> {
    return await this.service.createServicePackage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ServicePackage)
  async updateServicePackage(
    @graphql.Args() args: UpdateServicePackageArgs
  ): Promise<ServicePackage | null> {
    try {
      return await this.service.updateServicePackage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ServicePackage)
  async deleteServicePackage(
    @graphql.Args() args: DeleteServicePackageArgs
  ): Promise<ServicePackage | null> {
    try {
      return await this.service.deleteServicePackage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  async findBookings(
    @graphql.Parent() parent: ServicePackage,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [PricingRule], { name: "pricingRules" })
  async findPricingRules(
    @graphql.Parent() parent: ServicePackage,
    @graphql.Args() args: PricingRuleFindManyArgs
  ): Promise<PricingRule[]> {
    const results = await this.service.findPricingRules(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
