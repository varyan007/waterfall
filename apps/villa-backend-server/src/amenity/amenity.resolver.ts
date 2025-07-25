import * as graphql from "@nestjs/graphql";
import { AmenityResolverBase } from "./base/amenity.resolver.base";
import { Amenity } from "./base/Amenity";
import { AmenityService } from "./amenity.service";

@graphql.Resolver(() => Amenity)
export class AmenityResolver extends AmenityResolverBase {
  constructor(protected readonly service: AmenityService) {
    super(service);
  }
}
