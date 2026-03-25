import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTrips } from "../context/TripContext";
import { formatDate } from "../utils/utilities";
import ParticipantCard from "../components/PartecipantCard";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

export default function TripDetailsPage() {
  const { idT } = useParams();
  const { trips } = useTrips();
  const [searchTerm, setSearchTerm] = useState("");

  const trip = trips.find((trip) => trip?.id === parseInt(idT));

  // se il viaggio non esiste
  if (!trip)
    return (
      <div className="container mt-5 text-center">Viaggio non trovato.</div>
    );

  // LOGICA DEL FILTRO
  const filteredParticipants = trip.participants?.filter((p) => {
    const fullName = `${p?.firstName} ${p?.lastName}`.toLowerCase();
    return fullName?.includes(searchTerm.toLowerCase().trim());
  });

  return (
    <div className="container text-start">
      {/* Intestazione */}
      <Link to="/" className="btn btn-link p-0 mb-3 text-decoration-none">
        <FaArrowLeft /> Torna ai viaggi
      </Link>

      <div className="bg-primary text-white p-4 rounded-4 shadow-sm mb-5">
        <h1 className="display-5 fw-bold">Viaggio a {trip.destination}</h1>
        <p className="lead mb-0">
          Dal {formatDate(trip.startDate)} al {formatDate(trip.endDate)}
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold m-0 text-secondary">Rubrica Partecipanti</h3>
        <div className="d-flex  align-items-center gap-2">
          <span className="badge bg-secondary rounded-pill px-3">
            {filteredParticipants?.length} presenti
          </span>
          <Link to={`/${trip.id}/add-participant`}>
            <FaCirclePlus className="text-success fs-2" />
          </Link>
        </div>
      </div>

      {/* BARRA DI RICERCA */}
      <div className="input-group mb-4 shadow-sm">
        <span className="input-group-text bg-white border-end-0">
          <FaMagnifyingGlass className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control border-start-0 ps-0"
          placeholder="Cerca per nome o cognome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* GRIGLIA PARTECIPANTI */}
      <div className="row">
        {filteredParticipants?.length > 0 ? (
          filteredParticipants?.map((p) => (
            <ParticipantCard key={p?.id} participant={p} />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted">
              {"Nessun partecipante trovato" +
                (searchTerm.trim() !== "" ? ` per "${searchTerm}"` : "")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
