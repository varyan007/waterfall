import { ServicePackage } from "../servicePackage/ServicePackage";

export type PricingRule = {
  createdAt: Date;
  dayOfWeek: string | null;
  id: string;
  priceModifier: number | null;
  ruleName: string | null;
  season: string | null;
  servicePackage?: ServicePackage | null;
  specialEvent: string | null;
  updatedAt: Date;
};
