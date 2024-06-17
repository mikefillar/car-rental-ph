import React from "react";

const VehicleComponent = (props) => {
  return (
    <div
      className="flex flex-col justify-center items-center border shadow-lg shadow-gray-400 p-2 sm:p-5 rounded object-contain"
      key={props.data.id}
    >
      <img
        className="border-b w-full h-full"
        src={props.data.car}
        alt="vehicle"
      />
      <div className="flex w-full items-end justify-between py-10 h-full">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{props.data.model}</h1>
          <div>
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
          </div>
          <p className="flex gap-1 md:px-3">
            <span className="text-xl">
              <ion-icon name="car-sport-outline"></ion-icon>
            </span>
            {props.data.mark}
          </p>
          <p className="flex gap-1 md:px-3">
            <span className="text-xl">
              <ion-icon name="car-sport-outline"></ion-icon>
            </span>
            {props.data.transmission}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-right">
          <h1 className="font-bold text-2xl">&#x20B1; {props.data.price}</h1>
          <p>per day</p>
          <p className="flex gap-1 justify-end md:px-3">
            <span className="text-xl">
              <ion-icon name="checkmark-outline"></ion-icon>
            </span>
            {props.data.door} Door
          </p>
          <p className="flex gap-1 justify-end md:px-3">
            <span className="text-xl">
              <ion-icon name="checkmark-outline"></ion-icon>
            </span>
            {props.data.fuel}
          </p>
        </div>
      </div>
      <div className="flex w-full items-end h-full">
        <a
          href="/car-rental-ph/#book"
          className="w-full flex items-center justify-center py-3 bg-orange-600 text-white gap-1"
        >
          Book Ride
          <span className="text-xl mt-1">
            <ion-icon name="checkmark-outline"></ion-icon>
          </span>
        </a>
      </div>
    </div>
  );
};

export default VehicleComponent;
