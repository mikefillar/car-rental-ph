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
        <Route exact path="/car-rental-ph/" element={<Home />} />
        <Route path="/car-rental-ph/about" element={<About />} />
        <Route path="/car-rental-ph/vehicle" element={<Vehicle />} />
        <Route path="/car-rental-ph/review" element={<Review />} />
        <Route path="/car-rental-ph/team" element={<OurTeam />} />
        <Route path="/car-rental-ph/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Pages;
