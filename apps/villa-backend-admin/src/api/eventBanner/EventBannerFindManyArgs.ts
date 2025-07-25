import { EventBannerWhereInput } from "./EventBannerWhereInput";
import { EventBannerOrderByInput } from "./EventBannerOrderByInput";

export type EventBannerFindManyArgs = {
  where?: EventBannerWhereInput;
  orderBy?: Array<EventBannerOrderByInput>;
  skip?: number;
  take?: number;
};
