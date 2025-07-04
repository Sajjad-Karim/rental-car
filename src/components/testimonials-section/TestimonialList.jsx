import TestimonialCard from "./TestimonialCard";

export default function TestimonialList({ reviews }) {
  return reviews.map((review, index) => (
    <div
      key={index}
      className="keen-slider__slide w-[300px] sm:w-[320px] md:w-[340px] xl:w-[360px] flex-shrink-0 px-2"
    >
      <TestimonialCard review={review} />
    </div>
  ));
}
