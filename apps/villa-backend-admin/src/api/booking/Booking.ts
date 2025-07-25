import { ServicePackage } from "../servicePackage/ServicePackage";
import { User } from "../user/User";
import { Villa } from "../villa/Villa";

export type Booking = {
  createdAt: Date;
  dateFrom: Date | null;
  dateTo: Date | null;
  id: string;
  servicePackage?: ServicePackage | null;
  status: string | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
  villa?: Villa | null;
};
