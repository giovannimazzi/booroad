import { Link } from "react-router-dom";

export default function ParticipantCard({ participant }) {
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm border-start border-4 border-info">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0 fw-bold text-dark">
              {participant?.firstName} {participant?.lastName}
            </h5>
            <small className="text-muted text-uppercase">
              Partecipante - #{participant?.id}
            </small>
          </div>
          <Link
            to={`${participant?.id}`}
            className="btn btn-sm btn-outline-info rounded-pill"
          >
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}
