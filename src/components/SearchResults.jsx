import { isValid } from "date-fns";
import { cars } from "./car-carousel/cars";
import ReservationSummary from "./ReservationSummary";

export default function SearchResults({ data, onChoose }) {
  const { carClass, pickupDate, returnDate } = data;

  const filteredCars = cars.filter((car) => car.type === carClass || !carClass);

  const start = new Date(pickupDate);
  const end = new Date(returnDate);
  const isValidDates = isValid(start) && isValid(end);
  const rentalDays = isValidDates
    ? Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
    : 1;

  return (
    <section className="py-8 bg-background text-foreground max-w-screen-xl mx-auto px-4 space-y-6">
      <ReservationSummary data={data} />

      <h2 className="text-xl font-bold">Search Results</h2>

      {/* Heading Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 font-semibold text-sm bg-primary text-primary-foreground p-3 rounded-md">
        <div className="md:col-span-2">Class</div>
        <div className="md:col-span-5">Features</div>
        <div className="md:col-span-3 text-right pr-4">Total</div>
        <div className="md:col-span-2 text-right">Action</div>
      </div>

      {/* Car List */}
      {filteredCars.map((car, idx) => {
        const totalPrice = car.price * rentalDays;

        return (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 border-b border-border py-4"
          >
            {/* Class + Image */}
            <div className="md:col-span-2 flex items-center gap-3">
              <img
                src={car.image}
                alt={car.name}
                className="w-24 h-16 object-contain"
              />
              <div className="font-medium">{car.name}</div>
            </div>

            {/* Features */}
            <div className="md:col-span-5 text-sm text-muted-foreground leading-5">
              <div>Class: {car.type}</div>
              <div>Gearbox: {car.gearbox}</div>
              <div>Max passengers: {car.passengers}</div>
              <div>Fuel: {car.fuel}</div>
              {car.features?.length > 0 && (
                <div className="text-xs mt-1 flex flex-wrap gap-2">
                  {car.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-muted px-2 py-1 rounded-full text-foreground/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="md:col-span-3 text-right">
              <p className="font-bold">${totalPrice.toFixed(2)} USD</p>
              <p className="text-xs text-muted-foreground">
                ${car.price.toFixed(2)} / day
              </p>
            </div>

            {/* Action */}
            <div className="md:col-span-2 text-right">
              <button
                onClick={() => onChoose(car)}
                className="mt-2 bg-foreground text-background cursor-pointer hover:bg-foreground/90 transition-colors px-4 py-1 rounded-full text-sm font-medium"
              >
                Choose
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
