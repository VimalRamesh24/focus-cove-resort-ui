import "./Amenities.css";
const Amenities = () => {
  return (
    <section className="amenities">
      <div className="amenities-container">
        <h2 className="amenities-title">Amenities & Experiences</h2>
        <p className="amenities-subtitle">
          Curated experiences designed for relaxation, comfort, and indulgence
        </p>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon">🧖</div>
            <h3>Luxury Spa</h3>
            <p>Rejuvenating wellness treatments for mind and body</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">🏊</div>
            <h3>Infinity Pool</h3>
            <p>Scenic poolside relaxation with breathtaking views</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">🍽️</div>
            <h3>Fine Dining</h3>
            <p>Gourmet multi-cuisine dining curated by expert chefs</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">🏖️</div>
            <h3>Private Beach</h3>
            <p>Exclusive beach access for serene coastal experiences</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">🧘</div>
            <h3>Yoga & Meditation</h3>
            <p>Guided wellness sessions in peaceful natural settings</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon">🌿</div>
            <h3>Outdoor Activities</h3>
            <p>Nature walks, adventure activities, and exploration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
