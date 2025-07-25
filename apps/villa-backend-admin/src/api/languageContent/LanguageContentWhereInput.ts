import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageContentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  language?: StringNullableFilter;
};
