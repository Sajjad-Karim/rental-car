// import CarCarousel from "@/components/car-carousel/CarCarousel";

import CarCarousel from "./car-carousel/CarCarousel";
import { cars } from "./car-carousel/cars";

export default function ExploreCarsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Subheading */}
        <p className="text-sm uppercase tracking-wider text-primary font-semibold">
          What We Offer
        </p>

        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
          Explore the Car Range
        </h2>

        {/* Carousel */}
        <CarCarousel cars={cars} />
      </div>
    </section>
  );
}
