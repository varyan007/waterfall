import { SortOrder } from "../../util/SortOrder";

export type EventBannerOrderByInput = {
  active?: SortOrder;
  bannerType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
