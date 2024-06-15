import React, { useState } from "react";
import logo from "./img/smart-car.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      link: "Home",
      href: "/",
    },
    {
      link: "About",
      href: "/About",
    },
    {
      link: "Vehicle",
      href: "/Vehicle",
    },
    {
      link: "Testimonial",
      href: "/Testimonial",
    },
    {
      link: "Our Team",
      href: "/Team",
    },
    {
      link: "Contact",
      href: "/Contact",
    },
  ];
  return (
    <header className="flex justify-between items-center py-4 px-5 md:py-5 md:px-10">
      <div className=" flex justify-center items-center gap-2">
        <img className="h-14 hover:cursor-pointer" src={logo} alt="Cars.PH" />
        <h1 className="text-2xl font-bold text-gray-800 hover:cursor-pointer hidden sm:block">
          Cars.PH
        </h1>
      </div>
      <nav>
        <ul
          className={`absolute lg:static left-0 top-0 w-screen h-screen lg:w-auto lg:h-auto bg-white flex flex-col lg:flex-row justify-center items-center gap-5 
            ${
              open
                ? "translate-x-0 transition-transform ease-linear duration-300 lg:transition-none"
                : "-translate-x-full lg:translate-x-0 transition-transform ease-linear duration-300 lg:transition-none"
            }`}
        >
          {links.map((link) => (
            <li key={link.link}>
              <a
                className="text-gray-700 font-bold hover:text-orange-600 transition-all ease-linear duration-300"
                href={link.href}
              >
                {link.link}
              </a>
            </li>
          ))}
          <div className="block lg:hidden">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 border  border-orange-500 rounded px-5 py-3">
              <a
                className="text-gray-600 hover:text-orange-500 font-bold cursor-pointer"
                href="/"
              >
                Sign In
              </a>
              <button
                type="button"
                className="text-gray-600 hover:text-orange-500 font-bold"
              >
                Register
              </button>
            </div>
          </div>
        </ul>
      </nav>
      <div className="absolute z-10 right-5 md:right-10 top:10 block lg:hidden">
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
            href="/"
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
