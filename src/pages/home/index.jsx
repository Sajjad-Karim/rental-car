import React from "react";
import HeroSection from "../../components/HeroSection";
import CarSearchFilters from "../../components/CarSearchFilters";
import PopularCars from "../../components/PopularCards";
import WhyChooseUs from "../../components/WhyChooseUs";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";

const Home = () => {
  return (
    <div>
      {/* HERO + OVERLAP */}
      <div className="relative">
        <HeroSection />
        <div className="relative z-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/1">
          <CarSearchFilters className="-mt-16 relative z-10 md:border md:border-border shadow-sm rounded-none md:rounded-xl" />
        </div>
      </div>
      <div className="h-0 lg:h-50 bg-muted" />
      <PopularCars />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
