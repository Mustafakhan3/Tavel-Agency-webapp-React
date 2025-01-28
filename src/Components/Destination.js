import React from "react";
import "../style/Destination.css";

const Destination = () => {
  const destinations = [
    {
      img: "/images/destination-1.jpg",
      discount: "30% OFF",
      label: "Thailand",
    },
    {
      img: "/images/destination-2.jpg",
      discount: "20% OFF",
      label: "Indonesia",
    },
    {
      img: "/images/destination-3.jpg",
      discount: "25% OFF",
      label: "Malaysia",
    },
    {
      img: "/images/destination-4.jpg",
      discount: "35% OFF",
      label: "Australia",
    },
  ];

  return (
    <section className="popular-destination-section">
      {/* Heading */}
      <div className="heading">
        
        <h2>Popular Destination</h2>
      </div>

      {/* Destinations Grid */}
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.img} alt={destination.label} />
            <div className="destination-info">
              <span className="discount">{destination.discount}</span>
              <span className="label">{destination.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
