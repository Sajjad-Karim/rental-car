import { Star } from "lucide-react";
import TestimonialCarousel from "./testimonials-section/TestimonialCarousel";
import google from "../assets/google.svg";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted-foreground text-background">
      <div className="max-w-screen-xl mx-auto w-full  px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold  leading-tight">
            Trusted by Our Customers
          </h2>
          <p className="mt-2 text-sm sm:text-base font-medium">
            Read what our customers say about their experience.
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-yellow-400 w-6 h-6 fill-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Summary */}
          {/* <div className="w-full lg:w-48 flex flex-col items-center text-center shrink-0">
            <span className="text-lg font-semibold">EXCELLENT</span>
            <div className="flex gap-1 mt-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 w-5 h-5 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-xs">
              Based on <span className="font-bold">82 reviews</span>
            </p>
            <img src={google} alt="Google" className="w-16 mt-2" />
          </div> */}

          {/* Carousel */}
          <div className="w-full lg:flex-1">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
