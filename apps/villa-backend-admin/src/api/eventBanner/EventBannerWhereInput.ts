import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventBannerWhereInput = {
  active?: BooleanNullableFilter;
  bannerType?: StringNullableFilter;
  content?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
