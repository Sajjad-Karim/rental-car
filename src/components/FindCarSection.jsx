import CarSearchFilters from "./CarSearchFilters";

export default function FindCarSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8  space-y-6">
        {/* Subtitle */}
        <p className="uppercase text-sm text-primary font-semibold text-center tracking-wider">
          Find a Car
        </p>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl text-center lg:text-9xl font-extrabold text-foreground leading-tight">
          Looking For a Car?
        </h1>

        {/* Filters Form (reusable component) */}
        <div className="mt-10">
          <CarSearchFilters />
        </div>
      </div>
    </section>
  );
}
