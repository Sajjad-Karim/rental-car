import React from "react";
import AboutIntroSection from "../../components/AboutIntroSection";
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import TestimonialsSection from "../../components/TestimonialsSection";
import FaqSection from "../../components/FaqSection";

const About = () => {
  return (
    <div>
      <AboutIntroSection />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};

export default About;
