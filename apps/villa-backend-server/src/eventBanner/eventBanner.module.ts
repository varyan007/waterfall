import { Module } from "@nestjs/common";
import { EventBannerModuleBase } from "./base/eventBanner.module.base";
import { EventBannerService } from "./eventBanner.service";
import { EventBannerController } from "./eventBanner.controller";
import { EventBannerResolver } from "./eventBanner.resolver";

@Module({
  imports: [EventBannerModuleBase],
  controllers: [EventBannerController],
  providers: [EventBannerService, EventBannerResolver],
  exports: [EventBannerService],
})
export class EventBannerModule {}
