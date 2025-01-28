import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "../style/Booking.css";

function Booking() {
  const location = useLocation(); // Get the current route

  // Apply margin-top only if not on the homepage
  const isHomePage = location.pathname === "/";
  const bookingStyles = isHomePage ? {} : { marginTop: "200px" };

  return (
    <div style={bookingStyles}>
      <div className="booking-section">
        <div className="container">
          {/* Left Section */}
          <div className="booking-text">
            <h5>BOOKING</h5>
            <h1>Online Booking</h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit.
            </p>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <button className="read-more">Read More</button>
          </div>

          {/* Right Section */}
          <div className="booking-form">
            <h1>Book A Tour</h1>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="datetime-local" placeholder="Date & Time" />
                <select>
                  <option>Destination 1</option>
                  <option>Destination 2</option>
                  <option>Destination 3</option>
                </select>
              </div>
              <textarea placeholder="Special Request"></textarea>
              <button type="submit" className="book-now">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
