import { useParams } from "react-router-dom";

export default function ContactDetailsPage() {
  const { idT, idC } = useParams();

  return (
    <>
      <h2 className="h1 text-primary">VIAGGIO n.{idT}</h2>
      <h2 className="h1 text-primary">PARTECIPANTE n.{idC}</h2>
    </>
  );
}
