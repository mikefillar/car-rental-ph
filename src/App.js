import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="font-body bg-color-body">
        <Routes>
          <Route exact path="/car-rental-ph/" element={<Home />} />
          <Route exact path="/car-rental-ph/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
