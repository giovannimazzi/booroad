import { Link } from "react-router-dom";

import { FaCirclePlus } from "react-icons/fa6";
import { useTrips } from "../context/TripContext";
import TripCard from "../components/TripCard";

export default function HomePage() {
  const { trips } = useTrips();

  const currentDate = new Date();
  const currentTrips = trips.filter(
    (trip) =>
      new Date(trip?.startDate + "T00:00:00") <= currentDate &&
      new Date(trip?.endDate + "T23:59:59") >= currentDate,
  );

  const futureTrips = trips.filter(
    (trip) => new Date(trip?.startDate + "T00:00:00") > currentDate,
  );

  const pastTrips = trips.filter(
    (trip) => new Date(trip?.endDate + "T23:59:59") < currentDate,
  );

  return (
    <>
      <header className="mb-5">
        <h1 className="display-4 fw-bold text-primary">BOOROAD</h1>
        <p className="lead text-secondary">
          Gestione Viaggi per Guide Turistiche
        </p>
        <Link to="/add-trip" className="btn btn-success btn-lg shadow-sm">
          <FaCirclePlus className="me-2" /> Aggiungi Viaggio
        </Link>
      </header>

      <section className="mb-5 text-start">
        <h3 className="border-bottom pb-2 mb-4 text-info">
          Viaggi in corso...
        </h3>
        <div className="row">
          {currentTrips?.map((trip) => (
            <TripCard key={trip?.id} trip={trip} />
          ))}
        </div>
      </section>

      <section className="mb-5 text-start">
        <h3 className="border-bottom pb-2 mb-4 text-secondary">
          Prossimi Viaggi
        </h3>
        <div className="row">
          {futureTrips?.map((trip) => (
            <TripCard key={trip?.id} trip={trip} />
          ))}
        </div>
      </section>

      <section className="text-start">
        <h3 className="border-bottom pb-2 mb-4 text-muted">Viaggi Conclusi</h3>
        <div className="row">
          {pastTrips?.map((trip) => (
            <TripCard key={trip?.id} trip={trip} />
          ))}
        </div>
      </section>
    </>
  );
}
