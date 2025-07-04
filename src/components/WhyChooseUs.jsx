import { Car, KeyRound, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import carImage from "../assets/banner.png"; // Use actual image path
import { useNavigate } from "react-router-dom";

const benefits = [
  {
    icon: <Car className="text-primary w-6 h-6" />,
    title: "Wide Selection of Vehicles",
    description:
      "Choose from a range of vehicles to suit your needs—whether for business, leisure, or family trips.",
  },
  {
    icon: <KeyRound className="text-orange-500 w-6 h-6" />,
    title: "Simple, Fast Booking Process",
    description:
      "Enjoy a quick and easy booking experience with our user-friendly online system.",
  },
  {
    icon: <CheckCircle2 className="text-green-500 w-6 h-6" />,
    title: "Trusted & Transparent Service",
    description:
      "Book with confidence. No hidden fees, clear pricing, and exceptional customer support.",
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Trusted service, flexible options, and easy booking—all in one
            place.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={carImage}
              alt="Why Choose Us"
              className="w-full max-w-md rounded-xl "
            />
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <Button
              onClick={() => navigate("/cars")}
              variant="outline"
              className="mt-4 w-fit gap-2"
            >
              Book Your Cars Now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
