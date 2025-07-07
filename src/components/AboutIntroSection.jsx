import React from "react";
import aboutCar from "../assets/about.png";

export default function AboutIntroSection() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={aboutCar}
            alt="About Car"
            className="w-full h-auto object-cover rounded-xl shadow"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-5">
          <p className="text-primary uppercase text-sm font-semibold tracking-wider text-center md:text-left">
            About Our Company
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left">
            AL SHAMEL RENT A CAR Oman
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
            <p className="text-foreground font-bold">
              Welcome to AL SHAMEL RENT A CAR Oman
            </p>

            <p>Your go-to partner for stress-free car rentals!</p>

            <p>
              Since 2017, we’ve been delivering top-quality car rental services
              designed around you. Whether it’s a quick getaway or a long-term
              need, we’ve got the perfect ride to match your plans.
            </p>

            <p>
              At AL SHAMEL, we believe your journey should be as exciting as the
              destination. That’s why our fleet includes everything from
              reliable saloon cars to rugged 4WDs, spacious vans, and even
              luxury models. Need a car for a day, a week, or a whole year? No
              problem—we’re here for you, 24/7, every single day of the year.
            </p>

            <p>
              Our mission is simple: to make car rentals easy, enjoyable, and
              packed with value. From booking to returning the keys, we’re all
              about smooth, hassle-free experiences.
            </p>

            <p>
              Integrity and honesty are at the heart of what we do. Our
              customers trust us, and we’re proud to have glowing
              recommendations from travelers worldwide.
            </p>

            <p>
              With AL SHAMEL, you’re not just renting a car—you’re gaining a
              travel partner who’s passionate about making your journey
              unforgettable. Whether it’s exploring Oman’s stunning landscapes
              or diving into its bustling cities, we’ll make sure your adventure
              starts with a smile.
            </p>

            <p>
              Choose AL SHAMEL RENT A CAR Oman for exceptional service, a
              world-class fleet, and the peace of mind that comes with knowing
              we’ve got your back.
            </p>

            <p className="text-foreground font-medium">
              Let’s hit the road together!{" "}
              <span className="inline-block text-xl">🚗</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
