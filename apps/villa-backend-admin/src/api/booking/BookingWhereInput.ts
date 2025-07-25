import { AmenityWhereUniqueInput } from "../amenity/AmenityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicePackageWhereUniqueInput } from "../servicePackage/ServicePackageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VillaWhereUniqueInput } from "../villa/VillaWhereUniqueInput";

export type BookingWhereInput = {
  amenity?: AmenityWhereUniqueInput;
  dateFrom?: DateTimeNullableFilter;
  dateTo?: DateTimeNullableFilter;
  id?: StringFilter;
  servicePackage?: ServicePackageWhereUniqueInput;
  status?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  villa?: VillaWhereUniqueInput;
};
