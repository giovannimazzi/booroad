import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { TripProvider } from "./context/TripContext";
import AddNewTripPage from "./pages/AddNewTripPage";
import AddNewParticipantPage from "./pages/AddNewParticipantPage";

export default function App() {
    return (
        <TripProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index Component={HomePage} />
                        <Route path="/:idT" Component={TripDetailsPage} />
                        <Route
                            path="/:idT/:idC"
                            Component={ContactDetailsPage}
                        />
                        <Route
                            path="/:idT/add-participant"
                            Component={AddNewParticipantPage}
                        ></Route>
                        <Route
                            path="/add-trip"
                            Component={AddNewTripPage}
                        ></Route>
                        <Route path="*" Component={NotFoundPage} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TripProvider>
    );
}
