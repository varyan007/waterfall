import * as graphql from "@nestjs/graphql";
import { ServicePackageResolverBase } from "./base/servicePackage.resolver.base";
import { ServicePackage } from "./base/ServicePackage";
import { ServicePackageService } from "./servicePackage.service";

@graphql.Resolver(() => ServicePackage)
export class ServicePackageResolver extends ServicePackageResolverBase {
  constructor(protected readonly service: ServicePackageService) {
    super(service);
  }
}
