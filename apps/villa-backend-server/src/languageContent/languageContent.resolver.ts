import * as graphql from "@nestjs/graphql";
import { LanguageContentResolverBase } from "./base/languageContent.resolver.base";
import { LanguageContent } from "./base/LanguageContent";
import { LanguageContentService } from "./languageContent.service";

@graphql.Resolver(() => LanguageContent)
export class LanguageContentResolver extends LanguageContentResolverBase {
  constructor(protected readonly service: LanguageContentService) {
    super(service);
  }
}
