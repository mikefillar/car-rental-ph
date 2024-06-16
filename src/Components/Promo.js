import React from "react";

const Promo = () => {
  return (
    <div className="text-center bg-gray-800 text-white px-10 sm:px-20 md:px-32 lg:px-48 py-16 flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
        Save big with our cheapest car rental!
      </h1>
      <p className=" text-xl lg:text-2xl">
        “Unlock Adventure:{" "}
        <span className="text-orange-600">
          Drive Your Dreams with Our Fleet!
        </span>
        ”
      </p>
    </div>
  );
};

export default Promo;
