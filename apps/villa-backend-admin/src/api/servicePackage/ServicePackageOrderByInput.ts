import { SortOrder } from "../../util/SortOrder";

export type ServicePackageOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  services?: SortOrder;
  updatedAt?: SortOrder;
};
