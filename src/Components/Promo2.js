import React from "react";

const Promo2 = () => {
  return (
    <div className="mt-14 text-center bg-gray-800 text-white px-5 sm:px-10 md:px-20 lg:px-32 py-16 flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl md:text-4xl text-white flex justify-center items-center flex-col xl:flex-row gap-4">
        Book a car by getting in touch with us{" "}
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold flex items-center justify-center text-orange-600">
        <ion-icon name="call-outline"></ion-icon> (123) 456-789
      </p>
    </div>
  );
};

export default Promo2;
