import CarCarousel from "./car-carousel/CarCarousel";

export default function PopularCars() {
  return (
    <section className="bg-muted py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
          Most popular car rental deals
        </h2>
        <p className="uppercase text-sm sm:text-base text-muted-foreground font-semibold tracking-wider max-w-2xl mx-auto">
          Check out our most popular cars and find the perfect one for you
        </p>

        <CarCarousel />
      </div>
    </section>
  );
}
