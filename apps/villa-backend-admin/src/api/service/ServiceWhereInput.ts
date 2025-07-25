import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VillaWhereUniqueInput } from "../villa/VillaWhereUniqueInput";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  villa?: VillaWhereUniqueInput;
};
