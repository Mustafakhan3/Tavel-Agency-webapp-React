import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/Destination" element={<Home />} />
        <Route path="/Packages" element={<Home />} />
        <Route path="/Booking" element={<Home />} />
        <Route path="/Team" element={<Home />} />
        <Route path="/Footer" element={<Home />} />





      </Routes>
    </Router>
  );
};

export default App;
