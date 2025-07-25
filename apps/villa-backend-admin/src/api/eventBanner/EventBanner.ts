import { JsonValue } from "type-fest";

export type EventBanner = {
  active: boolean | null;
  bannerType: string | null;
  content: string | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  image: JsonValue;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
