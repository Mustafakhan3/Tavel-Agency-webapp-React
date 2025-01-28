
import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Top Contact Bar */}
      <div className="top-navbar">
        <div className="container">
          <div className="contact-info">
            <span>
              <i className="fa-solid fa-location-dot"></i> 123 Street, New York, USA
            </span>
            <span>
              <i className="fa fa-phone"></i> +012 345 6789
            </span>
            <span>
              <i className="fa fa-envelope"></i> info@example.com
            </span>
          </div>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <i className="fa-solid fa-location-dot"></i> Tourist
            </Link>
          </div>
          <nav>
          <ul className="nav-menu">
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/Destination">Destination</a>
            </li>
            <li>
              <a href="/Packages">Packages</a>
            </li>
             <li>
              <a href="/Booking">Booking</a>
            </li>
           
          </ul>
          </nav>
          <a href="#" className="btn btn-register">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
