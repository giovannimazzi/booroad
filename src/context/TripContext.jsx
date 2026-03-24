import { createContext, useState, useContext } from "react";
import Trips from "../data/trips";

const TripContext = createContext();

const initialTrips = Trips?.length === 0 ? [] : Trips;

// Provider --> per  distribuire i dati
export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState(initialTrips);

  /** Funzione che aggiunge un viaggio all'array
   * ....
   *
   * @param {object} newTrip
   */
  const addTrip = (newTripData) => {
    const maxId =
      trips.length > 0 ? Math.max(...trips.map((trip) => trip.id)) : 0;

    // oggetto finale con l'ID incrementato
    const finalTrip = {
      ...newTripData,
      id: maxId + 1,
      participants: [], // un viaggio appena inserito sarà sempre vuoto
    };
    setTrips([...trips, finalTrip]);
  };

  return (
    <TripContext.Provider value={{ trips, addTrip }}>
      {children}
    </TripContext.Provider>
  );
};

//^ Custom hook
export const useTrips = () => useContext(TripContext);
