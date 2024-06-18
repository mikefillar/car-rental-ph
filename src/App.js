import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vehicle from "./Pages/Vehicle";
import Header from "./Components/Header";
import Review from "./Pages/Review";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="font-body bg-color-body">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/car-rental-ph/" element={<Home />} />
          <Route exact path="/car-rental-ph/about" element={<About />} />
          <Route exact path="/car-rental-ph/vehicle" element={<Vehicle />} />
          <Route exact path="/car-rental-ph/review" element={<Review />} />
          <Route exact path="/car-rental-ph/team" element={<OurTeam />} />
          <Route exact path="/car-rental-ph/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
