import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={HomePage} />
          <Route path="/:idT" Component={TripDetailsPage} />
          <Route path="/:idT/:idC" Component={ContactDetailsPage} />
          <Route path="*" Component={NotFoundPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
