import { isValid, format } from "date-fns";
import { useState } from "react";
import CustomerDetailsForm from "./CustomerDetailsForm";

export default function RentalSummaryDetails({
  data,
  car,
  selectedExtras = [],
}) {
  const {
    pickupDate,
    returnDate,
    pickupTime,
    returnTime,
    pickupLocation,
    returnLocation,
  } = data;

  const start = new Date(pickupDate);
  const end = new Date(returnDate);
  const isValidDates = isValid(start) && isValid(end);
  const rentalDays = isValidDates
    ? Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
    : 1;

  const extrasTotal = selectedExtras.length * 30;
  const carTotal = car.price * rentalDays;
  const grandTotal = carTotal + extrasTotal;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="py-8 max-w-screen-xl mx-auto px-4 space-y-6 text-sm text-foreground">
      <h2 className="text-xl font-bold">Rental Details</h2>

      {/* Pick-up/Return Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <div className="bg-black text-white font-bold p-2">
            Pick-up Location
          </div>
          <div className="p-2 border">{pickupLocation}</div>

          <div className="bg-black text-white font-bold p-2">
            Pick-up Date & Time
          </div>
          <div className="p-2 border">
            {format(start, "PPP")} &nbsp; {pickupTime}
          </div>
        </div>

        <div>
          <div className="bg-black text-white font-bold p-2">
            Return Location
          </div>
          <div className="p-2 border">{returnLocation}</div>

          <div className="bg-black text-white font-bold p-2">
            Return Date & Time <span className="float-right">Period</span>
          </div>
          <div className="p-2 border">
            {format(end, "PPP")} &nbsp; {returnTime}
            <span className="float-right">
              {rentalDays} day{rentalDays > 1 && "s"}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Car */}
      <div>
        <div className="bg-black text-white font-bold p-2 grid grid-cols-2">
          <span>Selected Cars</span>
          <span className="text-right">Price</span>
        </div>
        <div className="grid grid-cols-2 p-2 border">
          <span>
            {car.name}, {car.type}
          </span>
          <span className="text-right">${carTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Extras */}
      <div>
        <div className="bg-black text-white font-bold p-2">Rental Options</div>
        {selectedExtras.map((extra, idx) => (
          <div key={idx} className="grid grid-cols-2 p-2 border">
            <span className={idx % 2 === 1 ? "font-semibold" : ""}>
              {extra}
            </span>
            <span className="text-right">$30.00</span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="grid grid-cols-2 p-2 border bg-black text-white font-bold">
        <span>Grand Total:</span>
        <span className="text-right">${grandTotal.toFixed(2)}</span>
      </div>
      <div className="grid grid-cols-2 p-2 border">
        <span>Pay at Pick-up:</span>
        <span className="text-right">$0.00</span>
      </div>
      <div className="grid grid-cols-2 p-2 border bg-black text-white font-bold">
        <span>Pay Later:</span>
        <span className="text-right">${grandTotal.toFixed(2)}</span>
      </div>

      {/* Login Section */}
      <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Account Id / E-Mail"
          className="flex-1 border border-green-500 px-4 py-2 rounded-full outline-none w-full sm:w-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="flex-1 border border-green-500 px-4 py-2 rounded-full outline-none w-full sm:w-auto"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black cursor-pointer text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
          Login
        </button>
      </div>
      <CustomerDetailsForm />
    </section>
  );
}
