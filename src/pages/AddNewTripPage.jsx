import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTrips } from "../context/TripContext";
import { FaTimes } from "react-icons/fa";

export default function AddNewTripPage() {
  const { addTrip } = useTrips();
  const navigate = useNavigate();

  // Stato iniziale per il nuovo viaggio
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
  });

  // Gestore input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTrip(formData);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 popup">
        <Link to="/" className="ms-auto">
          <FaTimes className="text-danger" />
        </Link>
        <h2 className="text-primary mb-4">Aggiungi Nuovo Viaggio</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Destinazione</label>
            <input
              type="text"
              name="destination"
              className="form-control"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Data Inizio</label>
            <input
              type="date"
              name="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Data Fine</label>
            <input
              type="date"
              name="endDate"
              className="form-control"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Salva Viaggio
          </button>
        </form>
      </div>
    </div>
  );
}
