import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How old do I need to be to rent a car?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What types of vehicles are available for rent",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "Can I rent a car with a debit card?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What is your fuel policy?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "Can I add additional drivers to my rental agreement?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
  {
    question: "What happens if I return the car late?",
    answer:
      "We offer a diverse fleet of vehicles to suit every need, including compact cars, sedans, SUVs and luxury vehicles. You can browse our selection online or contact us for assistance in choosing the right vehicle for you",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex].scrollHeight; // Trigger reflow
    }
  }, [openIndex]);

  return (
    <section className="bg-muted py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-foreground leading-tight">
            FAQ
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            Find answers to your questions from our previous answers
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between cursor-pointer items-center text-left"
                >
                  <span className="font-semibold text-lg sm:text-xl text-foreground">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {/* Animated Answer */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "mt-4 max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
