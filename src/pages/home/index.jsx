import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import CarSearchFilters from "../../components/CarSearchFilters";
import PopularCars from "../../components/PopularCards";
import WhyChooseUs from "../../components/WhyChooseUs";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";
import SearchResults from "../../components/SearchResults";
import RentalOptions from "../../components/RentalOptions";
import RentalSummaryDetails from "../../components/RentalSummaryDetails";

const Home = () => {
  const [searchData, setSearchData] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // ✅ NEW STATE

  const handleSearch = (data) => {
    setSearchData(data);
    setSelectedCar(null);
    setShowSummary(false);
    setHasSearched(true);
  };

  const handleReset = () => {
    setSearchData(null);
    setSelectedCar(null);
    setShowSummary(false);
    setSelectedExtras([]);
    setHasSearched(false); // ✅ Return to full filters form
  };

  return (
    <div>
      {/* === HERO + FILTERS === */}
      <div className="relative">
        <HeroSection />
        <div className="relative z-10 -mt-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarSearchFilters
            onSearch={handleSearch}
            onReset={handleReset}
            showReset={hasSearched}
            isCompact={hasSearched} // ✅ only show "Clear Search" button
            className="md:border md:border-border shadow-sm rounded-none md:rounded-xl"
          />
        </div>
      </div>

      {/* === CONDITIONAL FLOW === */}
      {searchData && !selectedCar && !showSummary && (
        <SearchResults data={searchData} onChoose={setSelectedCar} />
      )}

      {searchData && selectedCar && !showSummary && (
        <RentalOptions
          data={searchData}
          car={selectedCar}
          onContinue={(extras) => {
            setSelectedExtras(extras);
            setShowSummary(true);
          }}
        />
      )}

      {searchData && selectedCar && showSummary && (
        <RentalSummaryDetails
          data={searchData}
          car={selectedCar}
          selectedExtras={selectedExtras}
        />
      )}

      {/* === STATIC SECTIONS === */}
      <div className="h-0 lg:h-50 bg-muted" />
      <PopularCars />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
