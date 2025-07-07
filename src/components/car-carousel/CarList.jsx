import CarCard from "./CarCard";

export default function CarList({ cars }) {
  return (
    <>
      {cars?.map((car, index) => (
        <div key={index} className="keen-slider__slide">
          <CarCard car={car} />
        </div>
      ))}
    </>
  );
}
