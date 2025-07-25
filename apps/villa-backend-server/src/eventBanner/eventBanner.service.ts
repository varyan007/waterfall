import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventBannerServiceBase } from "./base/eventBanner.service.base";

@Injectable()
export class EventBannerService extends EventBannerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
