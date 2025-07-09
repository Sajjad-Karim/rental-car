import { useState, useMemo } from "react";
import { isValid } from "date-fns";
import ReservationSummary from "./ReservationSummary";

const extrasList = [
  "Additional Driver",
  "Child Seat (1–4 years)",
  "Full Insurance",
  "GPS",
  "Infant Seat (0–1 year)",
  "SIM Card",
  "Tent",
  "Unlimited Kilometers",
  "Wi-Fi",
];

export default function RentalOptions({ data, car, onContinue }) {
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  // Calculate rental days
  const start = new Date(data.pickupDate);
  const end = new Date(data.returnDate);
  const isValidDates = isValid(start) && isValid(end);
  const rentalDays = isValidDates
    ? Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
    : 1;

  const carTotal = car.price * rentalDays;
  const extrasTotal = selectedExtras.length * 30;
  const grandTotal = carTotal + extrasTotal;

  return (
    <section className="py-8 bg-background text-foreground max-w-screen-xl mx-auto px-4 space-y-8">
      <ReservationSummary data={data} />

      {/* Selected Car */}
      <div>
        <h2 className="text-xl font-bold">Selected Cars</h2>
        <div className="bg-primary text-primary-foreground font-bold text-sm p-3 grid grid-cols-2">
          <span>Car Model</span>
          <span>Total</span>
        </div>
        <div className="grid grid-cols-2 border-b py-2 text-sm">
          <div>
            {car.type}, {car.name}
          </div>
          <div>${carTotal.toFixed(2)} USD</div>
        </div>
      </div>

      {/* Rental Options */}
      <div>
        <h2 className="text-xl font-bold">Rental Options</h2>
        <div className="bg-primary text-primary-foreground font-bold text-sm p-3 grid grid-cols-2">
          <span>Extra</span>
          <span>Total</span>
        </div>
        {extrasList.map((extra, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 items-center py-2 px-2 text-sm border-b"
          >
            <span>{extra}</span>
            <div className="flex items-center justify-between">
              <span>30.00 USD</span>
              <input
                type="checkbox"
                className="ml-4 cursor-pointer"
                checked={selectedExtras.includes(extra)}
                onChange={() => toggleExtra(extra)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total Summary */}
      <div className="text-right text-sm">
        <p className="font-semibold">
          Car Price ({rentalDays} day{rentalDays > 1 ? "s" : ""}): $
          {carTotal.toFixed(2)} USD
        </p>
        <p className="font-semibold">
          Extras Total ({selectedExtras.length}): ${extrasTotal.toFixed(2)} USD
        </p>
        <hr className="my-2" />
        <p className="text-lg font-bold">
          Grand Total: ${grandTotal.toFixed(2)} USD
        </p>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => onContinue(selectedExtras)}
          className="mt-4 bg-foreground cursor-pointer text-background font-semibold text-sm px-6 py-2 rounded-full hover:bg-foreground/90"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
