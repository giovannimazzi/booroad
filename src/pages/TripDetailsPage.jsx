import { Link, useParams } from "react-router-dom";
import trips from "../data/trips";
import { formatDate } from "../utils/utilities";

export default function TripDetailsPage() {
  const { idT } = useParams();

  const trip = trips.find((trip) => trip.id === parseInt(idT));

  return (
    <>
      <h2 className="h1 text-primary">VIAGGIO a {trip.destination}</h2>
      <h2 className="text-primary">
        dal {formatDate(trip.startDate)} al {formatDate(trip.endDate)}
      </h2>
      <h3 className="text-secondary">RUBRICA PARTECIPANTI</h3>

      <div className="my-5 fw-bold">TODO: FILTRO RICERCA</div>

      <ul>
        {trip.participants.map((participant) => (
          <Link key={participant.id} to={`${participant.id}`}>
            <li>
              {participant.firstName} {participant.lastName}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
