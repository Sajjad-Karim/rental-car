import { useParams } from "react-router-dom";

import {
  BadgeCheck,
  Fuel,
  Gauge,
  Layers,
  Settings,
  Car,
  CircleDollarSign,
} from "lucide-react";
import { cars } from "../../components/car-carousel/cars";

export default function CarDetailsPage() {
  const { name } = useParams();
  const car = cars.find(
    (car) => car.name.replace(/\s+/g, "-").toLowerCase() === name
  );

  if (!car) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-500">Car not found</h1>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-background text-foreground max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="space-y-4">
          <img
            src={car.image}
            alt={car.name}
            className="rounded-xl w-full shadow-md"
          />
          <div className="grid grid-cols-3 gap-3">
            {car.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={car.name + i}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">{car.name}</h1>
          <p className="text-muted-foreground text-lg">
            Type: <span className="text-primary">{car.type}</span>
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />{" "}
              <span>Class: {car.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-5 h-5 text-primary" />{" "}
              <span>Fuel: {car.fuel}</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />{" "}
              <span>Gearbox: {car.gearbox}</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />{" "}
              <span>Doors: {car.doors}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary" />{" "}
              <span>Mileage: {car.mileage}</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-primary" />{" "}
              <span>Deposit: {car.deposit}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border text-sm sm:text-base space-y-2">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" /> Engine:{" "}
              {car.engine}
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" /> Airbags:{" "}
              {car.airbags}
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-primary" />{" "}
              <strong className="text-lg">${car.price}</strong> per day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
