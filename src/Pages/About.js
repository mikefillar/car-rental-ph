import React from "react";
import about from "../Components/img/about.jpg";
import shop from "../Components/img/shop.png";
import outlets from "../Components/img/outlets.png";
import types from "../Components/img/types.png";
import AboutBook from "../Components/AboutBook";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <section className="mt-14">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-48">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={about} alt="About" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="font-semibold lg:text-2xl md:text-xl text-lg">
            About Company
          </h2>
          <h1 className="xl:text-5xl lg:text-4xl font-bold md:text-3xl text-2xl">
            You start the engine and your adventure begins
          </h1>
          <p className="text-gray-600">
            The car rental industry has experienced significant growth due to
            factors like increased travel, convenient online booking, and higher
            maintenance costs for owned cars. With smart technologies and a
            focus on customer experience, the global car rental market is
            projected, Consider long-term rentals or short-term leases for
            flexible vehicle options
          </p>
          <div className="flex w-full text-center md:text-left flex-col md:flex-row items-center justify-center md:justify-between gap-5 md:gap-0 mt-5">
            <div className="flex items-center md:items-start flex-col">
              <img src={types} alt="car-types" />
              <div className="flex flex-col md:flex-row md:gap-2">
                <p className="font-bold text-5xl">20</p>
                <p className="text-gray-600">Car Types</p>
              </div>
            </div>
            <div className="flex items-center md:items-start flex-col">
              <img src={outlets} alt="car-types" />
              <div className="flex flex-col md:flex-row md:gap-2">
                <p className="font-bold text-5xl">85</p>
                <p className="text-gray-600">Rental Outlets</p>
              </div>
            </div>
            <div className="flex items-center md:items-start flex-col">
              <img src={shop} alt="car-types" />
              <div className="flex flex-col md:flex-row md:gap-2">
                <p className="font-bold text-5xl">75</p>
                <p className="text-gray-600">Repair Shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBook />
      <Footer />
    </section>
  );
};

export default About;
