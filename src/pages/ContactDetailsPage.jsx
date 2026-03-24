import { Link, useParams } from "react-router-dom";
import trips from "../data/trips";
import { formatDate } from "../utils/utilities";

export default function ContactDetailsPage() {
  const { idT, idC } = useParams();

  const trip = trips.find((trip) => trip.id === parseInt(idT));
  const participant = trip.participants.find(
    (participant) => participant.id === parseInt(idC),
  );

  return (
    <>
      <Link to={`/${trip?.id}`}>
        <h2 className="h1 text-primary">VIAGGIO a {trip?.destination}</h2>
      </Link>
      <h2 className="text-primary">
        dal {formatDate(trip?.startDate)} al {formatDate(trip?.endDate)}
      </h2>
      <h3 className="text-secondary">DETTAGLIO PARTECIPANTE</h3>
      <h4 className="text-info">
        {participant?.firstName} {participant?.lastName}
      </h4>
      <p>
        <strong>email:</strong> {participant?.email}
      </p>
      <p>
        <strong>phone:</strong> {participant?.phone}
      </p>
      <p>
        <strong>taxCode:</strong> {participant?.taxCode}
      </p>
    </>
  );
}
