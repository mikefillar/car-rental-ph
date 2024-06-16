import React, { useState } from "react";
import Cars from "./Cars";
import audi from "./img/cars/audi.jpg";
import golf from "./img/cars/golf6.jpg";
import camry from "./img/cars/camry.jpg";
import modern from "./img/cars/320.jpg";
import mercedes from "./img/cars/mercedes.jpg";
import passat from "./img/cars/passat.jpg";
import CarData from "./CarData";

const ModelButtons = () => {
  const carArray = [audi, golf, camry, modern, mercedes, passat];
  const [active, isActive] = useState(1);
  const toggleActive = (id) => {
    isActive((active) => (active = id));
  };
  const toggleAtiveStyle = (id) => {
    if (id === active) {
      return "bg-orange-600 text-white";
    } else {
      return "bg-gray-200 hover:bg-orange-600 hover:text-white transition-all duration-200 ease-in";
    }
  };
  let carDetails = CarData.filter((car) => car.id === active);
  let display = carDetails.map((car) => {
    return (
      <>
        <h2 className=" text-center px-4 py-3 bg-orange-500 text-xl text-white">
          <span className="text-2xl font-bold">&#x20B1; {car.price} </span>/ day
        </h2>
        <table className="text-left">
          <tbody className="border border-gray-600">
            <tr key={car.Model}>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Model
              </th>
              <td className="border-b border-gray-600">{car.Model}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Mark
              </th>
              <td className="border-b border-gray-600">{car.Mark}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Year
              </th>
              <td className="border-b border-gray-600">{car.Year}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Door
              </th>
              <td className="border-b border-gray-600">{car.Door}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">AC</th>
              <td className="border-b border-gray-600">{car.AC}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Transmission
              </th>
              <td className="border-b border-gray-600">{car.Transmission}</td>
            </tr>
            <tr>
              <th className="pl-2 sm:pl-5 py-4 border-b border-gray-600">
                Fuel
              </th>
              <td className="border-b border-gray-600">{car.Fuel}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  });
  return (
    <div className="w-full mb-14">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          {Cars.map((car) => (
            <button
              className={`w-full text-left pl-3 py-5 font-bold text-lg ${toggleAtiveStyle(
                car.id
              )}`}
              type="button"
              onClick={() => {
                toggleActive(car.id);
              }}
              key={car.id}
            >
              {car.car}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="flex items-center justify-center w-full">
            <img
              src={carArray[active - 1]}
              key={carArray[active - 1]}
              alt="Audi"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/3 h-full">{display}</div>
        </div>
      </div>
    </div>
  );
};

export default ModelButtons;
