import React from "react";
import "../style/About.css";

const About = ({ className }) => {
  return (
    <section className={`about-section ${className}`}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/images/about.jpg" alt="About" />
          </div>
          <div className="about-content">
            <h3>About Us</h3>
            <h2>
              Welcome to <span>Tourist</span>
            </h2>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <ul className="features">
              <li>First Class Flights</li>
              <li>5 Star Accommodations</li>
              <li>150 Premium City Tours</li>
              <li>Handpicked Hotels</li>
              <li>Latest Model Vehicles</li>
              <li>24/7 Service</li>
            </ul>
            <button className="btn-read-more">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
