import { EventBanner as TEventBanner } from "../api/eventBanner/EventBanner";

export const EVENTBANNER_TITLE_FIELD = "title";

export const EventBannerTitle = (record: TEventBanner): string => {
  return record.title?.toString() || String(record.id);
};
