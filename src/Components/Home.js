import React from "react";
import About from "./About";
import Services from "./Services";
import Destination from "./Destination";
import { useLocation } from "react-router-dom";
import Packages from "./Packages";
import Booking from "./Booking";
import Team from '../Components/Team.js'
import Footer from "./Footer.jsx";

const Home = () => {
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === "/"; // Check if it's the home page

  const pageTitle =
    location.pathname === "/about"
      ? "About Us"
      : location.pathname === "/services"
      ? "Our Services"
      : location.pathname === '/Destination' ? 'Choose your Destination':
      location.pathname === '/Packages' ? 'Packages we Provide':
            location.pathname === '/Booking' ? 'Book a Tour':

      "Enjoy Your Vacation With Us";

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img src="/images/bg-hero.jpg" alt="Background" className="hero-bg" />
        <div className="hero-content">
          <h1>{pageTitle}</h1>
          {isHomePage && (
            <>
              <p>
                Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
                lorem sit
              </p>
              <div className="search-bar">
                <input type="text" placeholder="Eg: Thailand" />
                <button>Search</button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Conditional Rendering of Sections */}
      {isHomePage ? (
        <>
          <About />
          <div>
            <Services />
          </div>
          {/* Add Destination section to the homepage */}
          <div>
            <Destination />
          </div>

          <div >
            <Packages />
          </div>
           <div>
            <Booking />
          </div>

           <div>
            <Team />
          </div>

          <div>
            <Footer />
          </div>
          
          
        </>
      ) : location.pathname === "/about" ? (
        <About />
      ) : location.pathname === "/services" ? (
        <Services />
      ) : location.pathname === "/Destination" ? (
        <Destination />
      ) : 
        location.pathname === "/Packages" ? (
          <Packages />
        ):
        location.pathname === "/Booking" ? (
          <Booking />
        
        ): 
        location.pathname === "/Booking" ? (
          <Team /> ):
          location.pathname === "/Footer" ? (
        <Footer /> ): null }

    </div>
  );
};

export default Home;
