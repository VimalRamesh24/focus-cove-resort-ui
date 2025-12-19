import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "An absolutely serene experience. The rooms were luxurious and the staff made us feel special.",
    name: "Arjun R",
    place: "Bangalore",
  },
  {
    text: "Perfect getaway destination. The infinity pool and dining experience were world-class.",
    name: "Meera S",
    place: "Chennai",
  },
  {
    text: "Focus Cove redefines luxury and peace. Highly recommended for couples and families.",
    name: "Rahul K",
    place: "Hyderabad",
  },
  {
    text: "Beautiful location, premium rooms, and excellent hospitality. Will visit again.",
    name: "Sneha M",
    place: "Coimbatore",
  },
  {
    text: "One of the best resort experiences I’ve had in South India. Truly relaxing.",
    name: "Vikram P",
    place: "Bangalore",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Guest Experiences</h2>
      <p className="testimonials-subtitle">
        What our guests say about their stay at Focus Cove
      </p>

      <div className="testimonial-slider">
        <button className="testimonial-arrow left" onClick={prev}>
          ‹
        </button>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “{testimonials[index].text}”
          </p>
          <h4 className="testimonial-name">
            {testimonials[index].name}
          </h4>
          <span className="testimonial-role">
            {testimonials[index].place}
          </span>
          <div className="testimonial-stars">★★★★★</div>
        </div>

        <button className="testimonial-arrow right" onClick={next}>
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
