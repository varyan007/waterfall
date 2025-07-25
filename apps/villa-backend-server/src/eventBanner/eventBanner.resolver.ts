import * as graphql from "@nestjs/graphql";
import { EventBannerResolverBase } from "./base/eventBanner.resolver.base";
import { EventBanner } from "./base/EventBanner";
import { EventBannerService } from "./eventBanner.service";

@graphql.Resolver(() => EventBanner)
export class EventBannerResolver extends EventBannerResolverBase {
  constructor(protected readonly service: EventBannerService) {
    super(service);
  }
}
