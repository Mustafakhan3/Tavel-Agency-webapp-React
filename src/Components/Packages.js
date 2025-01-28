import React from "react";
import "../style/Packages.css";

const Packages = () => {
  const packages = [
    {
      img: "/images/package-1.jpg",
      location: "Thailand",
      duration: "3 days",
      people: "2 Person",
      price: "$149.00",
      description:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.",
    },
    {
      img: "/images/package-2.jpg",
      location: "Indonesia",
      duration: "3 days",
      people: "2 Person",
      price: "$139.00",
      description:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.",
    },
    {
      img: "/images/package-3.jpg",
      location: "Malaysia",
      duration: "3 days",
      people: "2 Person",
      price: "$189.00",
      description:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos.",
    },
  ];

  return (
    <section className="packages-section">
      {/* Heading Section */}
      <div className="heading">
        <h3>
          <span>PACKAGES</span>
        </h3>
        <h2>Awesome Packages</h2>
      </div>

      {/* Packages Grid */}
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <img src={pkg.img} alt={pkg.location} className="package-image" />
            <div className="package-info">
              <div className="package-details">
                <span>
                  <i className="fa fa-map-marker-alt"></i> {pkg.location}
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i> {pkg.duration}
                </span>
                <span>
                  <i className="fa fa-user"></i> {pkg.people}
                </span>
              </div>
              <h3 className="package-price">{pkg.price}</h3>
              <div className="package-price">
              <div className="stars" style={{ color: "#8cc63e", fontSize: "16px" }}>
                 ★ ★ ★ ★ ★
                </div>
                </div>

              <p className="package-description">{pkg.description}</p>
             <div class="package-buttons">
    <button class="btn btn-read-more">Read More</button>
    <button class="btn btn-book-now">Book Now</button>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
