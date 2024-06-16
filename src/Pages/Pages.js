import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Vehicle from "./Vehicle";
import OurTeam from "./OurTeam";
import Review from "./Review";
import Contact from "./Contact";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Vehicle" element={<Vehicle />} />
        <Route exact path="/Review" element={<Review />} />
        <Route exact path="/Team" element={<OurTeam />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Pages;
