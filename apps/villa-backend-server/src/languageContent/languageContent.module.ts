import { Module } from "@nestjs/common";
import { LanguageContentModuleBase } from "./base/languageContent.module.base";
import { LanguageContentService } from "./languageContent.service";
import { LanguageContentController } from "./languageContent.controller";
import { LanguageContentResolver } from "./languageContent.resolver";

@Module({
  imports: [LanguageContentModuleBase],
  controllers: [LanguageContentController],
  providers: [LanguageContentService, LanguageContentResolver],
  exports: [LanguageContentService],
})
export class LanguageContentModule {}
