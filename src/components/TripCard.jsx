// COMPONENENTE CARD

import { Link } from "react-router-dom";
import { formatDate } from "../utils/utilities";

export default function TripCard({ trip }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 bg-light">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-primary text-uppercase fw-bold">
            {trip?.destination}
          </h5>
          <p className="card-text mb-1">
            <span className="fw-bold">Inizio:</span>{" "}
            {formatDate(trip?.startDate)}
          </p>
          <p className="card-text mb-3">
            <span className="fw-bold">Fine:</span> {formatDate(trip?.endDate)}
          </p>
          <div className="mt-auto">
            <Link to={`/${trip?.id}`} className="btn btn-outline-primary w-100">
              Partecipanti ({trip?.participants.length})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
