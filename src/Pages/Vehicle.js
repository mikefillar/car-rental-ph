import React from "react";
import VehicleComponent from "../Components/VehicleComponent";
import CarData from "../Components/CarData";
import audi from "../Components/img/cars/audi.jpg";
import golf from "../Components/img/cars/golf6.jpg";
import camry from "../Components/img/cars/camry.jpg";
import modern from "../Components/img/cars/320.jpg";
import mercedes from "../Components/img/cars/mercedes.jpg";
import passat from "../Components/img/cars/passat.jpg";
import Footer from "../Components/Footer";

const Vehicle = () => {
  const carArray = [audi, golf, camry, modern, mercedes, passat];
  return (
    <section className=" mt-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-3 sm:px-5 md:px-10 lg:px-16 xl:px-32 gap-5 md:gap-10">
        {CarData.map((car) => (
          <VehicleComponent
            data={{
              model: car.Model,
              mark: car.Mark,
              transmission: car.Transmission,
              door: car.Door,
              fuel: car.Fuel,
              price: car.price,
              car: carArray[car.id - 1],
            }}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Vehicle;
