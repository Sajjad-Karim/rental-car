import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import carImage from "../assets/banner.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-muted-foreground text-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pb-[100px] pb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-background text-primary border border-border px-4 py-2 rounded-full shadow-sm w-fit text-sm font-medium">
            <CheckCircle className="w-4 h-4 text-primary" />
            100% Trusted Car rental platform in Oman
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            The Fastest, Easiest <br />
            <span className="text-primary">Way to Rent a Car</span>
          </h1>

          <p className="text-base sm:text-lg text-background/80 max-w-prose">
            Our online booking system is designed with you in mind, making it
            easy to find and reserve the perfect car for your needs. Book with
            confidence and enjoy a seamless car rental experience.
          </p>

          <Button
            onClick={() => navigate("/cars")}
            size="lg"
            className="gap-2 text-base"
          >
            Choose Your Car <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-auto flex justify-center">
          <img
            src={carImage}
            alt="Red Car"
            className="w-[90%] max-w-[500px] h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
