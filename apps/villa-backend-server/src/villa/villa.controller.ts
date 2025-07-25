import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VillaService } from "./villa.service";
import { VillaControllerBase } from "./base/villa.controller.base";

@swagger.ApiTags("villas")
@common.Controller("villas")
export class VillaController extends VillaControllerBase {
  constructor(protected readonly service: VillaService) {
    super(service);
  }
}
