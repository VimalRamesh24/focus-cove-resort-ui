import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2 className="contact-title">Contact & Location</h2>
          <p className="contact-desc">
            Reach out to us for bookings, special arrangements, or any
            inquiries. Our team is always happy to assist you.
          </p>

          <div className="contact-details">
            <p>
              <span>📍</span> Focus Cove Resort, Yelagiri Hills, Tamil Nadu
            </p>
            <p>
              <span>📞</span> +91 98765 43210
            </p>
            <p>
              <span>✉️</span> info@focuscove.com
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Focus Cove Location"
          src="https://maps.google.com/maps?q=Yelagiri%20Hills&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
