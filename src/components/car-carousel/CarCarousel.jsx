import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CarList from "./CarList";

export default function CarCarousel({ cars }) {
  const navigate = useNavigate();

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <div className="relative mt-12 px-4 sm:px-6 lg:px-8">
      <div ref={sliderRef} className="keen-slider">
        <CarList cars={cars} />
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="hidden cursor-pointer lg:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-2 shadow hover:bg-muted transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="hidden cursor-pointer lg:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-2 shadow hover:bg-muted transition"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Button
          variant="outline"
          className="gap-1"
          onClick={() => navigate("/cars")}
        >
          Go to all Cars <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
