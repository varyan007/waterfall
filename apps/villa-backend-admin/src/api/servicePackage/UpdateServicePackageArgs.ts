import { ServicePackageWhereUniqueInput } from "./ServicePackageWhereUniqueInput";
import { ServicePackageUpdateInput } from "./ServicePackageUpdateInput";

export type UpdateServicePackageArgs = {
  where: ServicePackageWhereUniqueInput;
  data: ServicePackageUpdateInput;
};
