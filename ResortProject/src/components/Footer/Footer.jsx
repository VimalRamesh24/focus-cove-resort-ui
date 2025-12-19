import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-premium">

      <div className="footer-divider"></div>


      <div className="footer-main">

        <div className="footer-brand">
          <h2 className="footer-logo">Focus Cove</h2>
          <p className="footer-tagline">
            A sanctuary where luxury meets serenity.  
            Designed for unforgettable resort experiences.
          </p>
        </div>


        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li>About</li>
            <li>Rooms & Suites</li>
            <li>Amenities</li>
            <li>Gallery</li>
            <li>Testimonials</li>
          </ul>
        </div>


        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>Yelagiri Hills, Tamil Nadu</p>
          <p>+91 98765 43210</p>
          <p>info@focuscove.com</p>
        </div>


        <div className="footer-extra">
          <h4>Experience Focus Cove</h4>
          <p>
            Reserve your escape into nature, elegance, and peace.
            Discover a destination crafted for comfort and class.
          </p>
        </div>
      </div>

      <div className="footer-bottom-premium">
        <span>
          © {new Date().getFullYear()} Focus Cove. All rights reserved.
        </span>
        <span className="footer-note">
          Crafted with care & attention to detail
        </span>
      </div>
    </footer>
  );
};

export default Footer;
