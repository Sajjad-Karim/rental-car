import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Mail, Loader2 } from "lucide-react";

export default function ContactMapSection() {
  const [mapLoaded, setMapLoaded] = useState([false, false]);

  const handleLoad = (index) => {
    setMapLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="bg-background pt-2 pb-16 text-foreground">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Maps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pt-10 text-sm sm:text-base">
          <div className="space-y-2 flex items-start gap-2">
            <MapPin className="text-primary w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-primary">Location</p>
              <p>Al Ghubra St, Muscat 111, Oman</p>
            </div>
          </div>

          <div className="space-y-2 flex items-start gap-2">
            <MapPin className="text-primary w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-primary">Location</p>
              <p>
                مسقط - علا - شارع فندق سيترا <br />
                Muscat - Ghala - Al gamea alakbr <br />
                Street in front of Hyderabad Restaurant
              </p>
            </div>
          </div>

          <div className="space-y-2 flex items-start gap-2">
            <Phone className="text-primary w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-primary">Phone Number</p>
              <p>+96871171186</p>
            </div>
          </div>

          <div className="space-y-2 flex items-start gap-2">
            <Clock className="text-primary w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-primary">Opening Hours</p>
              <p>Mon – Sun (24 hours)</p>
            </div>
          </div>

          <div className="space-y-2 flex items-start gap-2 sm:col-span-2 md:col-span-1">
            <Mail className="text-primary w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-primary">Email Address</p>
              <p>info@alshamelrentalcar.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
