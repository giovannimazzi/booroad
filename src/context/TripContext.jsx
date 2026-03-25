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

    const addParticipant = (tripId, newParticipantInfo) => {
        setTrips((prevTrips) =>
            prevTrips.map((trip) => {
                if (trip.id === tripId) {
                    const maxId =
                        trip.participants.length > 0
                            ? Math.max(...trip.participants.map((p) => p.id))
                            : 0;

                    const newParticipant = {
                        ...newParticipantInfo,
                        id: maxId + 1,
                    };

                    return {
                        ...trip,
                        participants: [...trip.participants, newParticipant],
                    };
                }
                return trip;
            }),
        );
    };

    return (
        <TripContext.Provider value={{ trips, addTrip, addParticipant }}>
            {children}
        </TripContext.Provider>
    );
};

//^ Custom hook
export const useTrips = () => useContext(TripContext);
