import { useState, useEffect } from "react";
import "./BookingModal.css";

const BookingModal = ({ isOpen, onClose }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [room, setRoom] = useState("Standard Room");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!checkIn || !checkOut || !guests) {
      alert("Please fill all booking details.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    alert(
      `Booking Confirmed!\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nRoom: ${room}`
    );
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Book Your Stay</h2>

        <input
          type="date"
          value={checkIn}
          min={today}
          onChange={(e) => setCheckIn(e.target.value)}
        />

        <input
          type="date"
          value={checkOut}
          min={checkIn || today}
          onChange={(e) => setCheckOut(e.target.value)}
        />

        <input
          type="number"
          placeholder="Guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option>Standard Room</option>
          <option>Deluxe Room</option>
          <option>Suite</option>
        </select>

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Booking
        </button>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
