import { SortOrder } from "../../util/SortOrder";

export type AmenityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  villaId?: SortOrder;
};
