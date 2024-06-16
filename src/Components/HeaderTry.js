import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HeaderTry = () => {
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
    <nav>
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
  );
};

export default HeaderTry;
