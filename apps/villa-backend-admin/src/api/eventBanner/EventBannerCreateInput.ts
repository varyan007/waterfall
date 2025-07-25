import { InputJsonValue } from "../../types";

export type EventBannerCreateInput = {
  active?: boolean | null;
  bannerType?: string | null;
  content?: string | null;
  endDate?: Date | null;
  image?: InputJsonValue;
  startDate?: Date | null;
  title?: string | null;
};
