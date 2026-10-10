import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const healthDetails = [
  {
    id: 1,
    title: "Menstrual Health & Cycle Awareness",
    path: "/menstrual-health/1",
    icon: "🩸",
    description:
      "Understanding the 4 menstrual phases, common symptoms, PMS and PCOS management, hygiene practices, and healthy habits.",
  },
  {
    id: 2,
    title: "Women's Nutrition & Balanced Living",
    path: "/nutrition/2",
    icon: "🥗",
    description:
      "Fueling your body through every life stage with iron-rich foods, calcium, hydration tracking, and wholesome recipes.",
  },
  {
    id: 3,
    title: "Mental Wellbeing & Emotional Care",
    path: "/mental-wellbeing/3",
    icon: "🌿",
    description:
      "Managing stress, emotional equilibrium, calming breathing exercises, quality sleep, and daily mindfulness routines.",
  },
  {
    id: 4,
    title: "Personal Hygiene & Intimate Wellness",
    path: "/personal-hygiene/4",
    icon: "🧼",
    description:
      "Everyday body hygiene, intimate skin care, clothing care, safe product choices, and an interactive daily checklist.",
  },
];

function HealthDetail() {
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

  const topic = healthDetails.find((item) => item.id === Number(id));

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
            <span>• Topic Overview</span>
          </div>
          <span className="subtopic-badge">📚 Health Topic Overview</span>
          <h1>{topic ? topic.title : "Health Topic Not Found"}</h1>
          <p>
            {topic
              ? topic.description
              : "The requested topic could not be found. Please return to the Health Information directory."}
          </p>
        </div>
      </div>

      <div className="subtopic-container">
        {topic ? (
          <div style={{ textAlign: "center", margin: "40px auto", maxWidth: "600px" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>{topic.icon}</div>
            <h2 style={{ color: "#4b1a5e", marginBottom: "16px" }}>Explore the Full Interactive Guide</h2>
            <p style={{ color: "#6b5475", lineHeight: "1.6", marginBottom: "28px" }}>{topic.description}</p>
            <Link
              to={topic.path}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #cf3486, #7d2a9c)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "24px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "16px",
                boxShadow: "0 6px 18px rgba(180, 40, 120, 0.25)",
              }}
            >
              Open Interactive Guide →
            </Link>
          </div>
        ) : (
          <div style={{ textAlign: "center", margin: "50px auto" }}>
            <Link to="/health_Info" style={{ color: "#ba3888", fontWeight: "700" }}>
              Return to All Health Topics →
            </Link>
          </div>
        )}
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

export default HealthDetail;
