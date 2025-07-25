import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AmenityListRelationFilter } from "../amenity/AmenityListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type VillaWhereInput = {
  address?: StringNullableFilter;
  amenities?: AmenityListRelationFilter;
  areaSqrm?: IntNullableFilter;
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  services?: ServiceListRelationFilter;
};
