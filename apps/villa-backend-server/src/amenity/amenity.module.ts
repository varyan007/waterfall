import { Module } from "@nestjs/common";
import { AmenityModuleBase } from "./base/amenity.module.base";
import { AmenityService } from "./amenity.service";
import { AmenityController } from "./amenity.controller";
import { AmenityResolver } from "./amenity.resolver";

@Module({
  imports: [AmenityModuleBase],
  controllers: [AmenityController],
  providers: [AmenityService, AmenityResolver],
  exports: [AmenityService],
})
export class AmenityModule {}
