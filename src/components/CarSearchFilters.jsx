import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const locations = [
  "Muscat International Airport",
  "Centara Muscat Hotel–Ghala Heights",
  "City Seasons Hotel Muscat",
  "Crown Plaza OCEC - Muscat",
  "Ghala City Office",
  "Golden Oasis Hotel -Muscat",
  "Hilton Garden Inn – Al Khuwair",
  "Ibis Hotel - Muscat",
  "Intercontental Hotel - Muscat",
  "Mall of Oman",
  "Marriott hotel OCEC - Muscat",
  "Muscat Grand Mall",
  "Al Mouj Muscat ( The wave)",
  "MUSPark Inn Hotel - Muscat",
  "Novotel Hotel & Resorts - Muscat",
  "Ruwi",
  "Shatti Al Qurum - Muscat",
  "Sultan Qaboos University (SQU)",
  "Muscat, Ghala, opposite Centara Hotel",
  "Muscat, Ghobra, opposite Royal Tulip Hotel",
];

const carClasses = [
  "Compact",
  "Intermediate",
  "SUV",
  "Station Wagon",
  "Sedan",
  "Hatchback",
  "Family MPV",
  "4x4",
  "AWD",
  "Crossover",
];

const timeSlots = [
  "Midnight",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
  "2:00 AM",
  "2:30 AM",
  "3:00 AM",
  "3:30 AM",
  "4:00 AM",
  "4:30 AM",
  "5:00 AM",
  "5:30 AM",
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "Noon",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

export default function CarSearchFilters({ className = "", onSearch }) {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [carClass, setCarClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        pickupDate,
        returnDate,
        pickupLocation,
        returnLocation,
        pickupTime,
        returnTime,
        carClass,
      });
    }
  };

  return (
    <section
      className={`bg-background py-8 max-w-screen-xl mx-auto px-4 ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Selects and pickers */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">
            Pick-Up Location
          </label>
          <Select onValueChange={setPickupLocation}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">
            Return Location
          </label>
          <Select onValueChange={setReturnLocation}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Car Class</label>
          <Select onValueChange={setCarClass}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {carClasses.map((cls) => (
                <SelectItem key={cls} value={cls}>
                  {cls}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Pick-Up Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start cursor-pointer text-left w-full"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickupDate ? format(pickupDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-fit">
              <DayPicker
                selected={pickupDate}
                onSelect={setPickupDate}
                mode="single"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Pick-Up Time</label>
          <Select onValueChange={setPickupTime}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Return Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start cursor-pointer text-left w-full"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-fit">
              <DayPicker
                selected={returnDate}
                onSelect={setReturnDate}
                mode="single"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Return Time</label>
          <Select onValueChange={setReturnTime}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end lg:row-start-1 lg:col-start-4">
          <Button
            type="submit"
            className="w-full cursor-pointer text-base h-[42px]"
          >
            Search
          </Button>
        </div>
      </form>
    </section>
  );
}
