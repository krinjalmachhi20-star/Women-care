import { useParams } from "react-router-dom";

const healthDetails = [
  {
    id: 1,
    title: "Menstrual Health",
    description:
      "Menstrual health includes understanding the menstrual cycle, menstrual hygiene, common concerns, and healthy period habits.",
  },

  {
    id: 2,
    title: "Nutrition",
    description:
      "Good nutrition provides the body with the nutrients needed for energy, growth, immunity, and overall health.",
  },

  {
    id: 3,
    title: "Mental Wellbeing",
    description:
      "Mental wellbeing includes managing stress, emotions, relationships, sleep, and seeking support when needed.",
  },

  {
    id: 4,
    title: "Personal Hygiene",
    description:
      "Personal hygiene includes regular bathing, hand washing, oral care, clean clothing, and other healthy daily habits.",
  },
];

function HealthDetail() {
  const { id } = useParams();

  const topic = healthDetails.find(
    (item) => item.id === Number(id)
  );

  if (!topic) {
    return <h2>Health topic not found</h2>;
  }

  return (
    <div>
      <h1>{topic.title}</h1>

      <p>{topic.description}</p>
    </div>
  );
}

export default HealthDetail;