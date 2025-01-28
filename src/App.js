import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
        <Route path={process.env.PUBLIC_URL + "/About"} element={<Home/>} />
        <Route path={process.env.PUBLIC_URL + "/Services"} element={<Home/>} />

                <Route path={process.env.PUBLIC_URL + "/Destination"} element={<Home/>} />
                <Route path={process.env.PUBLIC_URL + "/Packages"} element={<Home/>} />

                <Route path={process.env.PUBLIC_URL + "/Booking"} element={<Home/>} />

                <Route path={process.env.PUBLIC_URL + "/Team"} element={<Home/>} />

                <Route path={process.env.PUBLIC_URL + "/Footer"} element={<Home/>} />






      </Routes>
    </Router>
  );
};

export default App;
