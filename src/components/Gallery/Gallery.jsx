import { useState, useEffect } from "react";
import "./Gallery.css";

import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";
import img4 from "../../assets/images/gallery4.jpg";
import img5 from "../../assets/images/gallery5.jpg";
import img6 from "../../assets/images/gallery6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-subtitle">
        A glimpse into luxury, serenity, and unforgettable moments
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setActiveIndex(index)}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
            <div className="gallery-overlay">View</div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-modal"
          onClick={() => setActiveIndex(null)}
        >
          <span
            className="close"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </span>

          <button
            className="slider-arrow left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <div className="image-wrapper">
    <img
      key={activeIndex}  
      src={images[activeIndex]}
      className="modal-image"
      alt="preview"
      onClick={(e) => e.stopPropagation()}
    />
</div>


          <button
            className="slider-arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
