import React from "react";

const Trems = () => {
  return (
    <section className="bg-muted py-20 text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <p className="uppercase text-sm text-primary font-semibold tracking-wider">
            Legal Information
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Please read carefully before proceeding with your rental.
          </p>
        </div>

        {/* Terms List */}
        <ul className="space-y-5 text-sm sm:text-base leading-relaxed list-disc list-inside">
          <li>
            <strong>Minimum Driver Age:</strong> 21 years.
          </li>
          <li>
            <strong>Driving License:</strong> Client who has a tourist visa must
            carry a locally accepted driving license or a valid International
            Driving License from the country on whose passport he is traveling.
          </li>
          <li>
            <strong>Insurance Excess:</strong> If the client is guilty and it’s
            proven by a police report, the client must pay SD 500.
          </li>
          <li>
            <strong>Minimum Rental Period:</strong> One hour.
          </li>
          <li>
            <strong>Deposit:</strong> A pre-authorization is taken from the
            client’s credit card at the time of rental (minimum SD 250). Deposit
            can also be paid in cash (refundable via Western Union or
            MoneyGram). Deposit is held up to 15 days for traffic fine updates
            from Oman authorities.
          </li>
          <li>
            <strong>Method of Payment:</strong> We accept all major Credit Cards
            (MasterCard, Visa, AMEX). The card must be valid for 3+ months and
            presented at rental time.
          </li>
          <li>
            <strong>Mileage Restriction:</strong>
            <ul className="list-disc pl-6">
              <li>
                <strong>Standard Vehicles:</strong> 200km/day, 1400km/week,
                4000km/month. SD 0.013/km after limit.
              </li>
              <li>
                <strong>2WD/4WD Vehicles:</strong> 200km/day, 1400km/week,
                4000km/month. SD 0.021/km after limit.
              </li>
            </ul>
          </li>
          <li>
            <strong>Personal Accident Insurance:</strong> Optional add-on to
            protect driver and passengers.
          </li>
          <li>
            <strong>Fuel Policy:</strong> Vehicle must be returned at same fuel
            level. If not, the client will be charged for the difference.
          </li>
          <li>
            <strong>Additional Driver:</strong> Can be added for SD 4/day if
            eligibility requirements are met.
          </li>
          <li>
            <strong>Driving Across Borders:</strong> Requires permission and
            extra insurance. AL SHAMEL RENT A CAR reserves the right to reject
            any request.
          </li>
          <li>
            <strong>Off-Roading Liability:</strong> Not covered. Any damage
            arising from off-road use is the client’s responsibility.
          </li>
          <li>
            <strong>Airport & Hotel Drop-Off:</strong> Free within Muscat (3+
            days rental). SD 13 applies for less than 3 days.
          </li>
          <li>
            <strong>Services & Equipment:</strong> Child seats available on
            request (SD 5/day). GPS on request only.
          </li>
          <li>
            <strong>Chauffeur Service:</strong> Available on request.
            <ul className="list-disc pl-6">
              <li>Inside Muscat: SD 65/day (8hrs)</li>
              <li>
                Outside Muscat: SD 90/day (8hrs) + accommodation for driver
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Trems;
