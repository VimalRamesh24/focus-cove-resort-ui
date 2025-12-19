import "./About.css";
import aboutBg from "../../assets/images/bg-resort.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div
        className="about-bg"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-overlay">
          <h2 className="about-title">About Focus Cove</h2>

          <p className="about-text">
            Nestled amidst nature’s finest landscapes, Focus Cove is a premium
            luxury resort crafted for guests seeking tranquility, comfort, and
            refined elegance.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <span>Luxury Villas</span>
            </div>
            <div>
              <h3>5★</h3>
              <span>Guest Rating</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Serenity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
