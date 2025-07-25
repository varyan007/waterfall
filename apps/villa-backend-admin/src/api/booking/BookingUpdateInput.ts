import { ServicePackageWhereUniqueInput } from "../servicePackage/ServicePackageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VillaWhereUniqueInput } from "../villa/VillaWhereUniqueInput";

export type BookingUpdateInput = {
  dateFrom?: Date | null;
  dateTo?: Date | null;
  servicePackage?: ServicePackageWhereUniqueInput | null;
  status?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
  villa?: VillaWhereUniqueInput | null;
};
