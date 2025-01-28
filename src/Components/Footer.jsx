import React from "react";
import "../style/Footer.css";
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js" defer></script>


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Company Section */}
        <div>
          <h2 className="company">Company</h2>
          <ul>
            <div className="list-items">
            <li><a href="#about"> About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Condition</a></li>
            <li><a href="#faq">FAQs & Help</a></li>
          </div>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2>Contact</h2>
          <div className="icons-alignment">
          <p><i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA</p>
          <p> <i class="fa-solid fa-phone"></i> +012 345 67890</p>
          <p> <i class="fa-regular fa-envelope"></i> info@example.com</p>
          </div>
          <div className="social-icons">
           <a href="#twitter"> <i class="fa-brands fa-twitter"></i></a>
            <a href="#facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="#youtube"><i class="fa-brands fa-youtube"></i></a>
            <a href="#linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h2>Gallery</h2>
          <div className="gallery">
            <img src="/images/package-1.jpg" alt="Gallery 1" />
            <img src="/images/package-2.jpg" alt="Gallery 2" />
            <img src="/images/package-3.jpg" alt="Gallery 3" />
            <img src="/images/package-2.jpg" alt="Gallery 4" />
            <img src="/images/package-3.jpg" alt="Gallery 5" />
            <img src="/images/package-1.jpg" alt="Gallery 6" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2>Newsletter</h2>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
