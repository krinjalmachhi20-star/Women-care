import { useParams } from "react-router-dom";
import Hygiene from "../components/hygine";
function PersonalHygiene() {
  const { id } = useParams();

  return (
    <div>
      <h1>Personal Hygiene</h1>
      <p>Topic ID: {id}</p>
      <p>Learn about daily hygiene and healthy habits.</p>
      <Hygiene/>
    </div>
  );
}

export default PersonalHygiene;