import { Module } from "@nestjs/common";
import { ServicePackageModuleBase } from "./base/servicePackage.module.base";
import { ServicePackageService } from "./servicePackage.service";
import { ServicePackageController } from "./servicePackage.controller";
import { ServicePackageResolver } from "./servicePackage.resolver";

@Module({
  imports: [ServicePackageModuleBase],
  controllers: [ServicePackageController],
  providers: [ServicePackageService, ServicePackageResolver],
  exports: [ServicePackageService],
})
export class ServicePackageModule {}
