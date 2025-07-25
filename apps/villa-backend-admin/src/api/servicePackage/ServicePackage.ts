import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";
import { PricingRule } from "../pricingRule/PricingRule";

export type ServicePackage = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  price: number | null;
  pricingRules?: Array<PricingRule>;
  services: JsonValue;
  updatedAt: Date;
};
