import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTrips } from "../context/TripContext";
import { FaTimes } from "react-icons/fa";

export default function AddNewParticipantPage() {
    const { idT } = useParams();
    const { addParticipant } = useTrips();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        taxCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addParticipant(parseInt(idT), formData);
        navigate(`/${idT}`);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 popup">
                <Link to={`/${idT}`} className="ms-auto">
                    <FaTimes className="text-danger" />
                </Link>
                <h2 className="text-primary mb-4">Aggiungi Partecipante</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Cognome</label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Telefono</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Codice Fiscale</label>
                        <input
                            type="text"
                            name="taxCode"
                            className="form-control text-uppercase"
                            value={formData.taxCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100 mt-3"
                    >
                        Salva Partecipante
                    </button>
                </form>
            </div>
        </div>
    );
}
