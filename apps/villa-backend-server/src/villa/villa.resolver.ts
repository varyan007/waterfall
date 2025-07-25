import * as graphql from "@nestjs/graphql";
import { VillaResolverBase } from "./base/villa.resolver.base";
import { Villa } from "./base/Villa";
import { VillaService } from "./villa.service";

@graphql.Resolver(() => Villa)
export class VillaResolver extends VillaResolverBase {
  constructor(protected readonly service: VillaService) {
    super(service);
  }
}
