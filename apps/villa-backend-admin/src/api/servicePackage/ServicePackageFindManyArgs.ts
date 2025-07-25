import { ServicePackageWhereInput } from "./ServicePackageWhereInput";
import { ServicePackageOrderByInput } from "./ServicePackageOrderByInput";

export type ServicePackageFindManyArgs = {
  where?: ServicePackageWhereInput;
  orderBy?: Array<ServicePackageOrderByInput>;
  skip?: number;
  take?: number;
};
