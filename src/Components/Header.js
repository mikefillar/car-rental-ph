import React, { useState } from "react";
import logo from "./img/smart-car.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const toggleActive = (id) => {
    setActive((active) => (active = id));
  };
  const isActive = (id) => {
    if (active === id) {
      return "text-orange-600 border-b-2 border-gray-600";
    } else {
      return "text-gray-600";
    }
  };
  const links = [
    {
      id: 1,
      link: "Home",
      href: "/car-rental-ph/",
    },
    {
      id: 2,
      link: "About",
      href: "/car-rental-ph/about",
    },
    {
      id: 3,
      link: "Vehicle",
      href: "/car-rental-ph/vehicle",
    },
    {
      id: 4,
      link: "Review",
      href: "/car-rental-ph/review",
    },
    {
      id: 5,
      link: "Our Team",
      href: "/car-rental-ph/team",
    },
    {
      id: 6,
      link: "Contact",
      href: "/car-rental-ph/contact",
    },
  ];
  return (
    <header className="flex justify-between items-center py-4 px-5 md:py-5 md:px-10">
      <div className=" flex justify-center items-center gap-2">
        <img className="h-14 hover:cursor-pointer" src={logo} alt="Cars.PH" />
        <a
          href="/car-rental-ph/"
          className="text-2xl font-bold text-gray-800 hover:cursor-pointer"
        >
          Cars.PH
        </a>
      </div>
      <>
        <ul
          className={`absolute z-20 lg:static left-0 top-0 w-full h-screen lg:w-auto lg:h-auto bg-white flex flex-col lg:flex-row justify-center items-center gap-5 
            ${
              open
                ? "translate-x-0 transition-transform ease-linear duration-300 lg:transition-none"
                : "-translate-x-full lg:translate-x-0 transition-transform ease-linear duration-300 lg:transition-none"
            }`}
        >
          {links.map((link) => (
            <li key={link.link}>
              <Link
                className={` font-bold ${isActive(
                  link.id
                )} text-gray-600 hover:text-orange-600 transition-all ease-linear duration-300 cursor-pointer`}
                onClick={() => {
                  toggleActive(link.id);
                  setOpen(!open);
                }}
                to={link.href}
              >
                {link.link}
              </Link>
            </li>
          ))}
          <div className="block lg:hidden">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 border-t  border-orange-500 px-5 py-3">
              <a
                className="text-gray-700 font-bold hover:text-orange-600 transition-all ease-linear duration-300"
                href="/car-rental-ph/"
              >
                Sign In
              </a>
              <button
                type="button"
                className="font-bold px-5 py-3 rounded text-white bg-orange-600 hover:shadow-lg hover:shadow-orange-500 transition-all ease-linear duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </ul>
      </>
      <div className="absolute z-30 right-5 md:right-10 top:10 block lg:hidden">
        <span
          className="text-3xl cursor-pointer text-gray-600"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ion-icon name={open ? "close-sharp" : "menu-sharp"}></ion-icon>
        </span>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center gap-5">
          <a
            className="text-gray-700 font-bold hover:text-orange-600 transition-all ease-linear duration-300"
            href="/car-rental-ph/"
          >
            Sign In
          </a>
          <button
            type="button"
            className="font-bold px-5 py-3 rounded text-white bg-orange-600 hover:shadow-lg hover:shadow-orange-500 transition-all ease-linear duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
