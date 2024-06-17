import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderTry = () => {
  return (
    <NavLink
      className={`absolute z-20 lg:static left-0 top-0 w-full h-screen lg:w-auto lg:h-auto bg-white flex flex-col lg:flex-row justify-center items-center gap-5 `}
    ></NavLink>
  );
};

export default HeaderTry;
