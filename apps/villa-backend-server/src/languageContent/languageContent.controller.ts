import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LanguageContentService } from "./languageContent.service";
import { LanguageContentControllerBase } from "./base/languageContent.controller.base";

@swagger.ApiTags("languageContents")
@common.Controller("languageContents")
export class LanguageContentController extends LanguageContentControllerBase {
  constructor(protected readonly service: LanguageContentService) {
    super(service);
  }
}
