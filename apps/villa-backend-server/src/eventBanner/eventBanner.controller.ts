import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventBannerService } from "./eventBanner.service";
import { EventBannerControllerBase } from "./base/eventBanner.controller.base";

@swagger.ApiTags("eventBanners")
@common.Controller("eventBanners")
export class EventBannerController extends EventBannerControllerBase {
  constructor(protected readonly service: EventBannerService) {
    super(service);
  }
}
