import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function MapSection() {
  const [mapLoaded, setMapLoaded] = useState([false, false]);

  const handleLoad = (index) => {
    setMapLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="bg-background py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="uppercase text-sm text-primary font-semibold tracking-wider">
            Our Locations
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
            Car Hire Locations
          </h2>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[0, 1].map((index) => (
            <div key={index} className="relative w-full h-[400px]">
              {!mapLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md z-10">
                  <Loader2 className="w-6 h-6 text-primary animate-spin" />
                </div>
              )}

              <iframe
                src={
                  index === 0
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.996489896856!2d58.36905766426212!3d23.58642614536359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e01cc19c9da41%3A0x4f9afa993d8ec100!2sALSHAMEL%20RENT%20A%20CAR%20-%20Southern%20Uthaybah%20Branch!5e0!3m2!1sen!2s!4v1751898439598!5m2!1sen!2s"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.586392066624!2d58.36807317409448!3d23.58329389517353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e010ee7d17331%3A0x659141342eb0bf56!2z2KfZhNi02KfZhdmEINmE2KrYo9is2YrYsSDYp9mE2LPZitin2LHYp9iqIEFMU0hBTUVMIENhciBSZW50YWw!5e0!3m2!1sen!2s!4v1751898485517!5m2!1sen!2s"
                }
                onLoad={() => handleLoad(index)}
                className="w-full h-full border-0 rounded-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
