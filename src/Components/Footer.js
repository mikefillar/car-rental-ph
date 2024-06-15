import React from "react";
import Promo2 from "./Promo2";

const Footer = () => {
  return (
    <>
      <Promo2 />
      <footer className="mt-14 px-5 md:px-10 py-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 bg-white">
          <div className="w-full text-center lg:text-left flex flex-col gap-3">
            <h1 className="font-bold text-2xl uppercase">Car Rental PH</h1>
            <p className="text-gray-600">
              We offer a big range of vehicles and We have the perfect car to
              meet all of your driving needs.
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2 font-semibold hover:text-orange-600 cursor-pointer mt-3">
              <span className="font-semibold text-orange-600 text-xl">
                <ion-icon name="call-outline"></ion-icon>
              </span>{" "}
              (123) 456-789
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2 font-semibold hover:text-orange-600 cursor-pointer">
              <span className="font-semibold text-orange-600 text-xl">
                <ion-icon name="mail-outline"></ion-icon>
              </span>{" "}
              carrentalph@gmail.com
            </p>
          </div>
          <div className="w-full text-center lg:text-left flex flex-col gap-3 lg:px-14">
            <h1 className="font-bold text-2xl uppercase">Company</h1>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-orange-600 cursor-pointer text-gray-600">
                Malolos, Bulacan
              </li>
              <li className="hover:text-orange-600 cursor-pointer text-gray-600">
                Careers
              </li>
              <li className="hover:text-orange-600 cursor-pointer text-gray-600">
                Mobile
              </li>
              <li className="hover:text-orange-600 cursor-pointer text-gray-600">
                Blogs
              </li>
              <li className="hover:text-orange-600 cursor-pointer text-gray-600">
                How we work
              </li>
            </ul>
          </div>
          <div className="w-full text-center lg:text-lef flex flex-col gap-3">
            <h1 className="font-bold text-2xl uppercase">Working Hours</h1>
            <p className="text-gray-600">
              Mon - Fri :{" "}
              <span className="block sm:inline-block">9:00AM - 9:00PM</span>
            </p>
            <p className="text-gray-600">
              Sat - Sun :{" "}
              <span className="block sm:inline-block">10:00AM - 7:00PM</span>
            </p>
          </div>
          <div className="w-full text-center lg:text-lef flex flex-col gap-3">
            <h1 className="font-bold text-2xl uppercase">Subscription</h1>
            <p className="text-gray-600">
              Subscribe your email address for latest news and update
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="border rounded px-3 py-2 border-gray-400 text-gray-600"
            />
            <button
              type="button"
              className="text-white bg-orange-600 font-bold px-10 py-4 rounded"
            >
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
