import { CalendarDays, MapPin } from "lucide-react";
import { format, isValid } from "date-fns";

export default function ReservationSummary({ data }) {
  const {
    pickupDate,
    returnDate,
    pickupTime,
    returnTime,
    pickupLocation,
    returnLocation,
  } = data;

  const pickup = new Date(pickupDate);
  const dropoff = new Date(returnDate);

  const isValidDates = isValid(pickup) && isValid(dropoff);
  const days = isValidDates
    ? Math.max(1, Math.ceil((dropoff - pickup) / (1000 * 60 * 60 * 24)))
    : 1;

  return (
    <section className="py-8 bg-background text-foreground max-w-screen-xl mx-auto px-4 space-y-6">
      <h2 className="text-xl font-bold">Reservation Details</h2>

      {/* Headers Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-bold">
        <div className="bg-[#C91E1E] text-white p-3 text-center">
          Period {days} Day{days > 1 && "s"}:
        </div>
        <div className="bg-[#C91E1E] text-white p-3 text-center">Pick-Up:</div>
        <div className="bg-[#C91E1E] text-white p-3 text-center">Return:</div>
      </div>

      {/* Details Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-start flex-col gap-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {format(pickup, "PP")}{" "}
            <span className="font-semibold">{pickupTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {format(dropoff, "PP")}{" "}
            <span className="font-semibold">{returnTime}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {pickupLocation}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {returnLocation}
        </div>
      </div>
    </section>
  );
}
