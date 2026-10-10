import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import WellBeing from "../components/wellBeing";

function MentalWellBeing() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (savedUser && loggedIn === "true") {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <div className="subtopic-page-wrapper">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info" className="active-nav-link">Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors">Doctors Directory</Link>
          <Link to="/prescription">Prescription Simplifier</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name} 🌸
          </div>
        )}
      </nav>

      <div className="subtopic-hero">
        <div className="subtopic-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/health_Info">← Back to Health Information</Link>
            <span>• Topic ID: {id || "mental-wellbeing"}</span>
          </div>
          <span className="subtopic-badge">🌿 Mental Wellbeing & Emotional Balance</span>
          <h1>Mental Wellbeing & Mind Care</h1>
          <p>
            Gentle guidance on navigating stress, nurturing emotional resilience, 
            healthy sleep patterns, and mindful everyday self-care habits.
          </p>
        </div>
      </div>

      <div className="subtopic-container">
        <WellBeing />
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>🌸 Women Care</h3>
            <p>Empowering women through accessible health education, tools, and personalized tracking.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/health_Info">Health Information</Link></li>
              <li><Link to="/reminder">Reminders</Link></li>
              <li><Link to="/doctors">Doctors Directory</Link></li>
              <li><Link to="/prescription">Prescription Simplifier</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Women Care © 2026. Dedicated to women's healthcare and awareness.</p>
        </div>
      </footer>
    </div>
  );
}

export default MentalWellBeing;
