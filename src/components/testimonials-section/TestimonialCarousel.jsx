import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialList from "./TestimonialList";

const reviews = [
  {
    name: "Kübra K.",
    date: "2025-01-09",
    content:
      "Wir haben für 5 Tage ein Auto gemietet. Wir haben für 5 Tage ein Auto gemietet...Wir haben für 5 Tage ein Auto gemietet...Wir haben für 5 Tage ein Auto gemietet...Wir haben für 5 Tage ein Auto gemietet...Wir haben für 5 Tage ein Auto gemietet...Wir haben für 5 Tage ein Auto gemietet...",
    avatar: null,
  },
  {
    name: "Amer Halilovic",
    date: "2025-01-06",
    content:
      "We rented car for 5 days and they provided baby seats. Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chandana Rachha",
    date: "2025-01-02",
    content:
      "Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marco Orlandi",
    date: "2024-12-28",
    content:
      "We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...We rented a car for Muscat visit, very well organized...",
    avatar: null,
  },
  {
    name: "Inès",
    date: "2024-12-25",
    content:
      "Impeccable service, recent and functional car...  Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...Thank you for providing such excellent car rental service...",
    avatar: null,
  },
];

export default function TestimonialCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  // Autoplay
  const timer = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    timer.current = interval;
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        <TestimonialList reviews={reviews} />
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 cursor-pointer text-muted-foreground -translate-y-1/2 z-10 bg-background border border-border p-2 rounded-full shadow hover:bg-muted transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 cursor-pointer text-muted-foreground -translate-y-1/2 z-10 bg-background border border-border p-2 rounded-full shadow hover:bg-muted transition"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
