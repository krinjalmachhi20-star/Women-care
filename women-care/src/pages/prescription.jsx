import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./prescription.css";

function Prescription() {
  const [prescription, setPrescription] = useState("");
  const [result, setResult] = useState("");
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

  const handleExplain = () => {
    if (prescription.trim() === "") {
      alert("Please enter your prescription first.");
      return;
    }

    const text = prescription.toLowerCase();

    if (text.includes("1-0-1")) {
      setResult("1-0-1 means take one dose in the morning and one dose at night.");
    } else if (text.includes("1-1-1")) {
      setResult("1-1-1 means take one dose in the morning, one in the afternoon, and one at night.");
    } else if (text.includes("1-0-0")) {
      setResult("1-0-0 means take one dose in the morning.");
    } else if (text.includes("0-1-0")) {
      setResult("0-1-0 means take one dose in the afternoon.");
    } else if (text.includes("0-0-1")) {
      setResult("0-0-1 means take one dose at night.");
    } else if (text.includes("od")) {
      setResult("OD (Omni Die) means once a day at the same time.");
    } else if (text.includes("bd") || text.includes("bid")) {
      setResult("BD (Bis in Die) means twice a day (~12 hours apart).");
    } else if (text.includes("tds") || text.includes("tid")) {
      setResult("TDS (Ter Die Sumendum) means three times a day (~8 hours apart).");
    } else if (text.includes("qid")) {
      setResult("QID (Quater in Die) means four times a day (~every 6 hours).");
    } else if (text.includes("hs")) {
      setResult("HS (Hora Somni) means take right at bedtime.");
    } else if (text.includes("stat")) {
      setResult("STAT means take immediately as a single urgent dose.");
    } else if (text.includes("sos") || text.includes("prn")) {
      setResult("SOS / PRN means take only when needed for symptoms (e.g., severe pain).");
    } else if (text.includes("before food") || text.includes("empty stomach") || text.includes("ac")) {
      setResult("Before food (Empty stomach) means take 30 to 60 minutes before meals for optimal absorption.");
    } else if (text.includes("after food") || text.includes("pc")) {
      setResult("After food means take 15 to 30 minutes after completing your meal to protect your stomach lining.");
    } else if (text.includes("with food")) {
      setResult("With food means take during your meal.");
    } else {
      setResult(
        "Prescription instruction recognized: Please follow the dosage directions carefully with water, or confirm with your pharmacist."
      );
    }
  };

  const quickPresets = [
    "1-0-1 after food",
    "1-1-1 with food",
    "1-0-0 empty stomach",
    "0-0-1 HS bedtime",
    "OD once daily",
    "BD twice daily",
    "SOS as needed",
  ];

  return (
    <div className="prescription-page">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors">Doctors Directory</Link>
          <Link to="/prescription" className="active-nav-link">Prescription Dosage Simplifier</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name}
          </div>
        )}
      </nav>

      <div className="prescription-content-container">
        <div className="prescription-card">
          <span className="rx-card-badge">Prescription Guidance Tool</span>
          <h1>Prescription Dosage Simplifier</h1>
          <p>Translate medical codes, handwriting abbreviations, and daily dosing instructions into clear words.</p>

          <div className="quick-presets-bar">
            <span className="presets-label">Tap to try:</span>
            <div className="presets-buttons">
              {quickPresets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="preset-btn"
                  onClick={() => {
                    setPrescription(preset);
                    const text = preset.toLowerCase();
                    if (text.includes("1-0-1")) setResult("1-0-1 means take one dose in the morning and one dose at night after food.");
                    else if (text.includes("1-1-1")) setResult("1-1-1 means take one dose morning, afternoon, and night with food.");
                    else if (text.includes("1-0-0")) setResult("1-0-0 means take one dose in the morning on an empty stomach.");
                    else if (text.includes("0-0-1")) setResult("0-0-1 HS means take one dose at night before sleeping.");
                    else if (text.includes("od")) setResult("OD means take once a day at the same time.");
                    else if (text.includes("bd")) setResult("BD means take twice a day (~12 hours apart).");
                    else if (text.includes("sos")) setResult("SOS means take only when needed for pain or emergency.");
                  }}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            placeholder="Type your prescription (e.g. 1-0-1 after food, BD, or empty stomach)"
            rows="4"
          />

          <button onClick={handleExplain} className="explain-action-btn">
            Decode Prescription Instructions
          </button>

          {result && (
            <div className="result-box">
              <div className="result-heading">
                <span className="check-icon">✓</span>
                <h2>Dosage Schedule & Guidance</h2>
              </div>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Prescription;
