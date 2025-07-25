import { Module } from "@nestjs/common";
import { VillaModuleBase } from "./base/villa.module.base";
import { VillaService } from "./villa.service";
import { VillaController } from "./villa.controller";
import { VillaResolver } from "./villa.resolver";

@Module({
  imports: [VillaModuleBase],
  controllers: [VillaController],
  providers: [VillaService, VillaResolver],
  exports: [VillaService],
})
export class VillaModule {}
