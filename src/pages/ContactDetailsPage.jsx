import { Link, useParams } from "react-router-dom";
import { useTrips } from "../context/TripContext";
import { formatDate } from "../utils/utilities";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaUser,
} from "react-icons/fa6";

export default function ContactDetailsPage() {
  const { idT, idC } = useParams();
  const { trips } = useTrips();

  // il viaggio e il partecipante con i parametri dell'URL
  const trip = trips.find((trip) => trip?.id === parseInt(idT));

  // se il viaggio non esiste
  if (!trip)
    return (
      <div className="container mt-5 text-center">Viaggio non trovato.</div>
    );

  const participant = trip.participants?.find(
    (participant) => participant?.id === parseInt(idC),
  );

  return (
    <div className="container text-start py-4">
      {/* Link per tornare alla rubrica del viaggio */}
      <Link
        to={`/${trip.id}`}
        className="btn btn-link p-0 mb-4 text-decoration-none text-primary fw-bold"
      >
        <FaArrowLeft className="me-2" /> Torna alla rubrica di{" "}
        {trip.destination}
      </Link>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            {/* Header della Card */}
            <div className="card-header bg-info text-dark py-4 text-center border-0">
              <div className="bg-white d-inline-block rounded-circle p-3 mb-3 shadow-sm">
                <FaUser size={40} className="text-info" />
              </div>
              <h2 className="fw-bold mb-0">
                {participant?.firstName} {participant?.lastName}
              </h2>
              <p className="text-uppercase small fw-bold mb-0 opacity-75">
                Scheda Partecipante
              </p>
            </div>

            <div className="card-body p-4">
              <h5 className="text-muted mb-4 border-bottom pb-2">
                Informazioni di Contatto
              </h5>

              <div className="d-flex align-items-center mb-3">
                <div className="btn btn-light rounded-circle me-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <small className="text-muted d-block">Email</small>
                  <a
                    href={`mailto:${participant?.email}`}
                    className="text-dark fw-bold text-decoration-none"
                  >
                    {participant?.email}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="btn btn-light rounded-circle me-3">
                  <FaPhone className="text-success" />
                </div>
                <div>
                  <small className="text-muted d-block">Telefono</small>
                  <a
                    href={`tel:${participant?.phone}`}
                    className="text-dark fw-bold text-decoration-none"
                  >
                    {participant?.phone}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="btn btn-light rounded-circle me-3">
                  <FaIdCard className="text-danger" />
                </div>
                <div>
                  <small className="text-muted d-block">Codice Fiscale</small>
                  <span className="text-dark fw-bold">
                    {participant?.taxCode}
                  </span>
                </div>
              </div>

              <div className="bg-light p-3 rounded-3 mt-4">
                <small className="text-muted d-block mb-1">
                  Riferimento Viaggio
                </small>
                <span className="fw-bold text-primary">
                  {trip.destination} ({formatDate(trip.startDate)})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
