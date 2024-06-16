import React from "react";
import Input from "./Input";
import Select from "./Select";

const Book = () => {
  const locations = [
    "Manila",
    "Quezon City",
    "Makati",
    "Taguig",
    "Mandaluyong",
    "Pasig",
    "Cavite",
    "Bulacan",
    "Pampanga",
    "Malolos",
  ];
  const cars = [
    "Audi A1 S-Line",
    "VW Golf 6",
    "Toyota Camry",
    "BMW 320 Modernline",
    "Mercedes-Benz GLK",
    "VMW Passat CC",
  ];
  return (
    <section className="sm:px-5 lg:px-10 py-5 my-14" id="book">
      <div className="rounded px-5 lg:px-20 py-10 bg-white shadow-xl flex flex-col gap-5">
        <h2 className="font-bold text-xl lg:text-2xl">Book a car</h2>
        <div>
          <p className="hidden">error message</p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Select
              data={{
                label: "Select your car type",
                default: "Select your car type",
                icon: "car-sport-",
                select: { cars },
              }}
            />
            <Select
              data={{
                label: "Pick-up",
                default: "Select your pick-up location",
                icon: "location-",
                select: { locations },
              }}
            />
            <Select
              data={{
                label: "Drop-off",
                default: "Select your drop-off location",
                icon: "location-",
                select: { locations },
              }}
            />
            <Input
              data={{
                label: "Pick-up",
                icon: "calendar-",
              }}
            />
            <Input
              data={{
                label: "Drop-off",
                icon: "calendar-",
              }}
            />
            <div className="flex items-end">
              <button
                className="w-full py-2 rounded bg-orange-600 hover:shadow-lg hover:shadow-orange-500 text-white font-bold text-lg"
                type="button"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
