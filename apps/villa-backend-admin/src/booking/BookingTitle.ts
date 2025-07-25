import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "status";

export const BookingTitle = (record: TBooking): string => {
  return record.status?.toString() || String(record.id);
};
