
import "./healthInfo.css";

import { Link } from "react-router-dom";
const healthTopics = [
  {
    id: 1,
    title: "Menstrual Health",
    description:
      "Learn basic information about menstrual health, hygiene, and common concerns.",
   
  },
  {
    id: 2,
    title: "Nutrition",
    description:
      "Learn about balanced nutrition and healthy eating habits.",
   
  },
  {
    id: 3,
    title: "Mental Wellbeing",
    description:
      "Learn about stress management, emotional wellbeing, and when to seek support.",
    
  },
  {
    id: 4,
    title: "Personal Hygiene",
    description:
      "Learn about everyday hygiene practices and healthy habits.",
   
  },
];




function HealthInfo() {
  return ( 
    <div className="health-page">
    <section className="health-header">
      <h1>Health Information</h1>
       <p>
        Explore simple and reliable information about women's health.
      </p>
    </section>
    

    

      <section className="topics"> 
        <h2>Health Topic</h2>
        
        <div className="topic-container">
         {
         healthTopics.map((topic)=>(
           <div className="topic-card" key={topic.id}>
          <h3>{topic.title}</h3>
          <p>{topic.description}</p>


{topic.id === 1 && (
  <Link to={`/menstrual-health/${topic.id}`}>
    <button>Read More</button>
  </Link>
)}

{topic.id === 2 && (
  <Link to={`/nutrition/${topic.id}`}>
    <button>Read More</button>
  </Link>
)}

{topic.id === 3 && (
  <Link to={`/mental-wellbeing/${topic.id}`}>
    <button>Read More</button>
  </Link>
)}

{topic.id === 4 && (
  <Link to={`/personal-hygiene/${topic.id}`}>
    <button>Read More</button>
  </Link>
)}
            
           
            </div>
           
           ))}

        </div>
      </section>

      
       </div>
  );
}

export default HealthInfo;


