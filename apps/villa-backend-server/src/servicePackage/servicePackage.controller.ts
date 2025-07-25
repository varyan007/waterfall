import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServicePackageService } from "./servicePackage.service";
import { ServicePackageControllerBase } from "./base/servicePackage.controller.base";

@swagger.ApiTags("servicePackages")
@common.Controller("servicePackages")
export class ServicePackageController extends ServicePackageControllerBase {
  constructor(protected readonly service: ServicePackageService) {
    super(service);
  }
}
