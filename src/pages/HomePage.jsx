import { Link } from "react-router-dom";
import trips from "../data/trips";
import { FaCirclePlus } from "react-icons/fa6";
import { formatDate } from "../utils/utilities";

export default function HomePage() {
  const currentDate = new Date();
  const currentTrips = trips.filter(
    (trip) =>
      new Date(trip.startDate + "T00:00:00") <= currentDate &&
      new Date(trip.endDate + "T23:59:59") >= currentDate,
  );

  const futureTrips = trips.filter(
    (trip) => new Date(trip.startDate + "T00:00:00") > currentDate,
  );

  return (
    <>
      <h1 className="text-primary">BOOROAD</h1>
      <h2 className="text-info">Gestione Viaggi</h2>

      <button className="btn btn-primary mt-5">
        <FaCirclePlus /> Aggiungi Viaggio
      </button>

      <div className="bg-info my-5">
        <h3>Viaggi in corso...</h3>
        <ul>
          {currentTrips.map((trip) => (
            <Link key={trip.id} to={`${trip.id}`}>
              <li>{`Viaggio a ${trip.destination}\n dal: ${formatDate(trip.startDate)} - al: ${formatDate(trip.endDate)}\n n.partecipanti: ${trip.participants.length}`}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bg-info">
        <h3>Viaggi in programma...</h3>
        <ul>
          {futureTrips.map((trip) => (
            <Link key={trip.id} to={`${trip.id}`}>
              <li
                key={trip.id}
              >{`Viaggio a ${trip.destination}\n dal: ${formatDate(trip.startDate)} - al: ${formatDate(trip.endDate)}\n n.partecipanti: ${trip.participants.length}`}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
