import { Button } from "@/components/ui/button";
import { User, Calendar, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const { name, type, price, image } = car;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/cars/${slug}`);
  };

  return (
    <div className="bg-background border border-border rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden h-full">
      {/* Top image + price badge */}
      <div className="relative px-6 pt-6 rounded-t-2xl pb-4">
        <img
          src={image}
          alt={name}
          className="w-full max-h-[160px] object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold rounded-full px-3 py-1 shadow-sm">
          ${price} <span className="text-[10px] font-normal">per day</span>
        </div>
      </div>

      {/* Name + CTA */}
      <div className="px-6 pt-4 pb-6 flex flex-col items-center text-center gap-1">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <span className="text-sm text-muted-foreground">{type}</span>

        <Button
          onClick={handleViewDetails}
          className="mt-4 px-6 text-sm font-medium shadow hover:shadow-md transition-all"
        >
          View Details
        </Button>
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Footer icons */}
      <div className="px-6 py-4">
        <p className="text-sm text-muted-foreground mb-3 text-center">
          More Information:
        </p>
        <div className="flex justify-center gap-4">
          {[User, Calendar, ClipboardList].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center border border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
