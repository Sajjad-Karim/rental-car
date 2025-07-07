import { MapPin, CalendarDays, CarFront } from "lucide-react";

const steps = [
  {
    title: "Choose Location",
    icon: MapPin,
    description:
      "Select your pick-up location from multiple cities & branches.",
  },
  {
    title: "Pickup Date & Time",
    icon: CalendarDays,
    description: "Pick your rental duration with flexible dates and times.",
  },
  {
    title: "Book Your Car",
    icon: CarFront,
    description: "Confirm booking with a click and enjoy a smooth ride.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Label */}
        <p className="uppercase text-sm text-primary font-semibold tracking-widest mb-3">
          How it works
        </p>

        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight mb-6">
          How it works
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-16">
          Renting a car has never been easier. Just follow these three quick
          steps to get started.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ title, icon: Icon, description }, index) => (
            <div
              key={index}
              className="bg-background/80 border border-border rounded-2xl shadow-lg backdrop-blur-md p-8 transition-transform hover:-translate-y-1 hover:shadow-xl group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {title}
              </h4>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
