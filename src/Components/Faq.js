import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(1);
  const toggleOpen = (id) => {
    setOpen((open) => (open = id));
  };
  const openStyle = (id) => {
    if (open === id) {
      return "bg-orange-600 text-white shadow-lg shadow-orange-400";
    } else {
      return "";
    }
  };
  const displayP = (id) => {
    if (open === id) {
      return "block";
    } else {
      return "hidden";
    }
  };
  return (
    <section className="mt-20 mb-14 px-3 sm:px-5 md:px-10">
      <div className="flex items-center justify-center flex-col">
        <div className="text-center lg:w-3/4 xl:2/3 flex flex-col gap-4">
          <h2 className="font-semibold text-xl">FAQ</h2>
          <h1 className="font-bold text-3xl lg:text-4xl">
            Frequently asked questions
          </h1>
          <p className="text-gray-600">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="w-full lg:w-3/4 mt-14 shadow-xl">
          <div className="">
            <button
              type="button"
              className={`font-semibold ${openStyle(
                1
              )} px-10 py-5 w-full flex items-center justify-between `}
              onClick={() => {
                toggleOpen(1);
              }}
            >
              1. What is special about comparing rental car deals?{" "}
              <span className="text-xl">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <p
              className={` transition-all ease-in duration-200 px-10 py-5 text-gray-600 text-sm ${displayP(
                1
              )}`}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className={`font-semibold ${openStyle(
                2
              )} px-10 py-5 w-full flex items-center justify-between`}
              onClick={() => {
                toggleOpen(2);
              }}
            >
              2. How do I find the car rental deals?{" "}
              <span className="text-xl">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <p
              className={`transition-all ease-in duration-200 px-10 py-5 text-gray-600 text-sm ${displayP(
                2
              )}`}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className={`font-semibold ${openStyle(
                3
              )} px-10 py-5 w-full flex items-center justify-between`}
              onClick={() => {
                toggleOpen(3);
              }}
            >
              3. How do I find such low rental car prices?{" "}
              <span className="text-xl">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <p
              className={`transition-all ease-in duration-200 px-10 py-5 text-gray-600 text-sm ${displayP(
                3
              )}`}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
