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
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const locations = ["Muscat", "Nizwa", "Salalah", "Sohar", "Sur"];
const carClasses = [
  "SUV",
  "Compact",
  "Intermediate",
  "Crossover",
  "4x4",
  "AWD",
];
const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

export default function CarSearchFilters() {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  return (
    <section className="bg-background md:border md:border-border shadow-sm rounded-none md:rounded-xl py-8 -mt-16 relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pick-Up Location */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">
            Pick-Up Location
          </label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Return Location */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">
            Return Location
          </label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Car Class */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Class</label>
          <Select>
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

        {/* Pick-Up Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Pick-Up Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start text-left w-full cursor-pointer"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {pickupDate ? (
                  format(pickupDate, "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
              <DayPicker
                mode="single"
                selected={pickupDate}
                onSelect={setPickupDate}
                className="p-3 bg-background"
                modifiersClassNames={{
                  selected: "bg-primary text-primary-foreground",
                  today: "font-semibold text-primary",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Pick-Up Time */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Pick-Up Time</label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Return Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Return Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-start text-left w-full cursor-pointer"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? (
                  format(returnDate, "PPP")
                ) : (
                  <span>Select date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
              <DayPicker
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                className="p-3 bg-background"
                modifiersClassNames={{
                  selected: "bg-primary text-primary-foreground",
                  today: "font-semibold text-primary",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Time */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">Return Time</label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button - appears last on mobile, first visually on desktop */}
        <div className="flex items-end lg:row-start-1 lg:col-start-4">
          <Button type="submit" className="w-full text-base h-[42px]">
            Search
          </Button>
        </div>
      </form>
    </section>
  );
}
