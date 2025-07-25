import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  amenityId?: SortOrder;
  createdAt?: SortOrder;
  dateFrom?: SortOrder;
  dateTo?: SortOrder;
  id?: SortOrder;
  servicePackageId?: SortOrder;
  status?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  villaId?: SortOrder;
};
