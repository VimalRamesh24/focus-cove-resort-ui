import { useState } from "react";
import "./Hero.css";

import heroVideo from "../../assets/videos/ResortHeroVd.mp4";
import heroImage from "../../assets/images/HeroImg.png";
import logo from "../../assets/images/logo_white.png";

import BookingModal from "../BookingModal/BookingModal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="hero">
      <img src={logo} className="logo-main" alt="Focus Cove Logo" />

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 className="hero-title">Focus Cove</h1>

        <p className="hero-subtitle">
          Experience luxury, serenity, and nature in perfect harmony
        </p>

        <button
          className="book-now-btn"
          type="button"
          onClick={() => setOpen(true)}
        >
          <div className="text">
            <span>Book</span>
            <span>Now</span>
          </div>

          <div className="clone">
            <span>Book</span>
            <span>Now</span>
          </div>

          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <BookingModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
};

export default Hero;
