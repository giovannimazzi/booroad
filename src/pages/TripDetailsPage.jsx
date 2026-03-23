import { useParams } from "react-router-dom";

export default function TripDetailsPage() {
  const { idT } = useParams();

  return (
    <>
      <h2 className="h1 text-primary">VIAGGIO n.{idT}</h2>
      <h3 className="text-secondary">RUBRICA PARTECIPANTI</h3>
    </>
  );
}
