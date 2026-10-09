import { useParams } from "react-router-dom";
import WellBeing from "../components/wellBeing";
function MentalWellBeing() {
  const { id } = useParams();

  return (
    <div>
      <h1>Personal Hygiene</h1>
      <p>Topic ID: {id}</p>
      <p>Learn about daily hygiene and healthy habits.</p>
      <WellBeing/>
    </div>
  );
}

export default MentalWellBeing;