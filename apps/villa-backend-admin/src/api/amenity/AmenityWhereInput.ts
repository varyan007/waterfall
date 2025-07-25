import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VillaWhereUniqueInput } from "../villa/VillaWhereUniqueInput";

export type AmenityWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  villa?: VillaWhereUniqueInput;
};
