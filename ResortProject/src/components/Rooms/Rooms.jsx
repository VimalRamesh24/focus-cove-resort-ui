import "./Rooms.css";

import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="rooms-container">

        <h2 className="rooms-title">Rooms & Suites</h2>
        <p className="rooms-subtitle">
          Luxury spaces designed for comfort, elegance, and serenity
        </p>

        <div className="rooms-grid">
          <div className="room-card">
            <img src={room1} alt="Deluxe Room" className="room-image" />
            <div className="room-content">
              <h3>Deluxe Room</h3>
              <p className="room-price">₹6,500 / night</p>
              <ul>
                <li>King Size Bed</li>
                <li>Sea View Balcony</li>
                <li>Free Wi-Fi</li>
              </ul>
            </div>
          </div>

          <div className="room-card">
            <img src={room2} alt="Executive Suite" className="room-image" />
            <div className="room-content">
              <h3>Executive Suite</h3>
              <p className="room-price">₹9,500 / night</p>
              <ul>
                <li>Private Lounge</li>
                <li>Premium Interior</li>
                <li>Complimentary Breakfast</li>
              </ul>
            </div>
          </div>

          <div className="room-card">
            <img src={room3} alt="Luxury Villa" className="room-image" />
            <div className="room-content">
              <h3>Luxury Villa</h3>
              <p className="room-price">₹14,000 / night</p>
              <ul>
                <li>Private Pool</li>
                <li>Garden View</li>
                <li>Personal Butler Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
