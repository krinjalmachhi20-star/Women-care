import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./menstrualHealth.css";

function MenstrualHealth() {
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

  const phases = [
    {
      name: "Menstruation",
      days: "Days 1–5 (approx.)",
      image: "/images/menstruation.png",
      icon: "🩸",
      color: "#e76b91",
      info: "The uterine lining sheds and leaves the body as menstrual bleeding.",
      tip: "Stay hydrated, rest when needed, and change menstrual products regularly."
    },
    {
      name: "Follicular Phase",
      days: "Starts on Day 1",
      image: "/images/follicular.png",
      icon: "🌱",
      color: "#a47bd3",
      info: "Follicles develop in the ovary, and the uterine lining starts building again.",
      tip: "Eat balanced meals and pay attention to changes in your energy levels."
    },
    {
      name: "Ovulation",
      days: "Timing varies",
      image: "/images/ovulation.png",
      icon: "🥚",
      color: "#e5a23c",
      info: "An egg is released from an ovary. The timing can vary between people and cycles.",
      tip: "Cycle-day estimates cannot reliably predict ovulation or prevent pregnancy."
    },
    {
      name: "Luteal Phase",
      days: "After ovulation",
      image: "/images/luteal.png",
      icon: "🌼",
      color: "#62a99b",
      info: "Hormonal changes support the uterine lining. If pregnancy does not occur, menstruation usually begins again.",
      tip: "Get enough sleep and note recurring symptoms or mood changes."
    }
  ];

  const [selectedPhase, setSelectedPhase] = useState(0);
  const [cycleDay, setCycleDay] = useState(1);

  const activePhase = phases[selectedPhase];

  function handleCycleDayChange(value) {
    const day = Number(value);
    setCycleDay(day);

    if (day <= 5) {
      setSelectedPhase(0);
    } else if (day <= 13) {
      setSelectedPhase(1);
    } else if (day === 14) {
      setSelectedPhase(2);
    } else {
      setSelectedPhase(3);
    }
  }

const healthProblems = [
  {
    id: 1,
    name: "PCOS",
    fullName: "Polycystic Ovary Syndrome",
    icon: "🌸",
    description:
      "PCOS is a hormonal condition that can affect ovulation and menstrual cycles.",
    symptoms: [
      "Irregular or missed periods",
      "Acne or increased facial hair",
      "Difficulty with ovulation"
    ],
    causes:
      "It is associated with hormonal changes and metabolic factors. The exact cause is not fully understood.",
    advice:
      "Consult a healthcare professional if your periods are persistently irregular or you notice other concerning changes."
  },
  {
    id: 2,
    name: "Endometriosis",
    fullName: "Understanding Endometriosis",
    icon: "🩺",
    description:
      "Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus.",
    symptoms: [
      "Severe menstrual cramps",
      "Pelvic pain",
      "Pain during bowel movements or urination around periods"
    ],
    causes:
      "The exact cause is unknown. Several biological and hormonal factors may contribute.",
    advice:
      "Seek medical assessment for severe period pain, persistent pelvic pain, or pain that affects daily activities."
  },
  {
    id: 3,
    name: "Painful Periods",
    fullName: "Menstrual Cramps",
    icon: "💗",
    description:
      "Menstrual cramps are pains in the lower abdomen that occur before or during a period.",
    symptoms: [
      "Lower abdominal cramps",
      "Lower back discomfort",
      "Nausea or headache in some people"
    ],
    causes:
      "The uterus produces substances called prostaglandins that help it contract. Higher levels can contribute to cramps.",
    advice:
      "Talk to a healthcare professional if pain is severe, worsening, or prevents normal daily activities."
  },
  {
    id: 4,
    name: "Irregular Periods",
    fullName: "Changes in Menstrual Cycles",
    icon: "📅",
    description:
      "Periods may come earlier or later than expected, or the time between periods may vary.",
    symptoms: [
      "Unexpected cycle changes",
      "Occasionally missed periods",
      "Changes in bleeding patterns"
    ],
    causes:
      "Possible reasons include adolescence, stress, changes in weight, thyroid conditions, PCOS, and other health factors.",
    advice:
      "Keep a record of your periods and consult a healthcare professional if irregularity persists or you miss several periods."
  },
  {
    id: 5,
    name: "Heavy Bleeding",
    fullName: "Heavy Menstrual Bleeding",
    icon: "🩸",
    description:
      "Heavy menstrual bleeding means bleeding is excessive, prolonged, or interferes with daily life.",
    symptoms: [
      "Needing to change menstrual products very frequently",
      "Bleeding lasting longer than usual",
      "Unusual tiredness or weakness"
    ],
    causes:
      "Possible causes include hormonal changes, fibroids, bleeding disorders, and other medical conditions.",
    advice:
      "Seek medical advice for heavy or prolonged bleeding. Seek urgent care if bleeding is accompanied by fainting, chest pain, difficulty breathing, or severe weakness."
  },
  {
    id: 6,
    name: "PMS",
    fullName: "Premenstrual Syndrome",
    icon: "🌿",
    description:
      "PMS refers to physical or emotional symptoms that occur before menstruation.",
    symptoms: [
      "Bloating or breast tenderness",
      "Mood changes or irritability",
      "Headaches or tiredness"
    ],
    causes:
      "Symptoms are associated with changes in hormones and how the body responds to them during the menstrual cycle.",
    advice:
      "Track recurring symptoms and consult a healthcare professional if they significantly affect school, work, relationships, or daily life."
  }
];

const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <div className="menstrual-page">
      
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
            Welcome, {user.name}
          </div>
        )}
      </nav>

      <div className="breadcrumb-nav-strip">
        <Link to="/health_Info">← Back to Health Information</Link>
        <span>• Menstrual Cycle & Reproductive Wellness</span>
      </div>
      <section className="menstrual-header">
        <span className="header-tag">WOMEN CARE • HEALTH EDUCATION</span>

        <h1>Understanding Your Menstrual Cycle</h1>

        <p>
          Learn about your menstrual cycle, its phases, healthy habits,
          and when to seek medical advice.
        </p>
      </section>

      <section className="interactive-cycle">
        <div className="interactive-heading">
          <h2>🔄 Explore the Menstrual Cycle</h2>
          <p>
            Click a phase in the diagram or move the slider
            to explore a sample cycle.
          </p>
        </div>

        <div className="cycle-interactive-layout">

          <div className="cycle-diagram">

            <div className="cycle-center">
              <span>CYCLE DAY</span>
              <strong>{cycleDay}</strong>
              <small>of 28 (example)</small>
            </div>

            {phases.map((phase, index) => (
              <button
                type="button"
                key={phase.name}
                className={`cycle-phase phase-${index + 1} ${
                  selectedPhase === index ? "active" : ""
                }`}
                style={{ "--phase-color": phase.color }}
                onClick={() => setSelectedPhase(index)}
                aria-pressed={selectedPhase === index}
                aria-label={`Explore ${phase.name}`}
              >
                <span className="phase-icon">{phase.icon}</span>
                <span className="phase-name">{phase.name}</span>
              </button>
            ))}

          </div>

          <div className="cycle-details">
            <span
              className="phase-label"
              style={{ backgroundColor: activePhase.color }}
            >
              Phase {selectedPhase + 1}
            </span>

            <h3>
              {activePhase.icon} {activePhase.name}
            </h3>

            <p className="phase-days">{activePhase.days}</p>

            <p>{activePhase.info}</p>

            <div className="phase-tip">
              <strong>💡 Helpful Tip</strong>
              <p>{activePhase.tip}</p>
            </div>

            <label htmlFor="cycle-day">
              Explore a cycle day: <strong>Day {cycleDay}</strong>
            </label>

            <input
              id="cycle-day"
              className="cycle-day-slider"
              type="range"
              min="1"
              max="28"
              value={cycleDay}
              onChange={(event) =>
                handleCycleDayChange(event.target.value)
              }
            />

            <div className="slider-labels">
              <span>Day 1</span>
              <span>Day 14</span>
              <span>Day 28</span>
            </div>

            <p className="cycle-note">
              Educational example only. Actual cycle length and
              ovulation timing vary. The phases are not strictly
              separate; the follicular phase overlaps menstruation.
            </p>
          </div>

        </div>
      </section>

      <section className="cycle-section">
        <h2>🌷 The Four Main Phases</h2>

        <p className="section-description">
          Select any phase in the circular diagram above to learn more.
        </p>

        <div className="phase-container">
          {phases.map((phase, index) => (
            <button
              type="button"
              className={`phase-card ${
                selectedPhase === index ? "selected-card" : ""
              }`}
              key={phase.name}
              onClick={() => setSelectedPhase(index)}
              style={{ "--phase-color": phase.color }}
            >
              <img
                src={phase.image}
                alt={phase.name}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <span className="card-icon">{phase.icon}</span>

              <h3>{phase.name}</h3>

              <span className="phase-card-days">{phase.days}</span>

              <p>{phase.info}</p>

              <span className="learn-more">Explore phase →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="cycle-fact">
        <span className="fact-icon">💡</span>
        <div>
          <h2>Did You Know?</h2>
          <p>
            A menstrual cycle is not always exactly 28 days.
            Its length and ovulation timing can vary from person
            to person and from one cycle to another.
          </p>
        </div>
      </section>

      <section className="healthy-section">
        <h2>🌿 Healthy Period Habits</h2>

        <p className="section-description">
          Simple habits can support your comfort and wellbeing.
        </p>

        <div className="habit-container">

          <div className="habit-card">
            <span>💧</span>
            <h3>Stay Hydrated</h3>
            <p>Drink water regularly throughout the day.</p>
          </div>

          <div className="habit-card">
            <span>🥗</span>
            <h3>Balanced Food</h3>
            <p>Eat a variety of nutritious foods, including iron-rich foods.</p>
          </div>

          <div className="habit-card">
            <span>🛌</span>
            <h3>Enough Sleep</h3>
            <p>Get sufficient rest and allow yourself time to relax.</p>
          </div>

          <div className="habit-card">
            <span>🧼</span>
            <h3>Menstrual Hygiene</h3>
            <p>Change menstrual products according to their instructions and wash your hands.</p>
          </div>

        </div>
      </section>

      <section className="help-section">
        <div className="help-icon">🩺</div>

        <div>
          <h2>When Should You Talk to a Doctor?</h2>

          <p>
            Seek medical advice if you experience unusually heavy
            bleeding, severe pain, persistent irregular periods,
            dizziness with bleeding, or other concerning changes.
          </p>

          <p className="help-note">
            Health information on this page is educational and does
            not replace advice from a qualified healthcare professional.
          </p>
        </div>
      </section>

<section className="health-problems-section">
  <div className="health-problems-heading">
    <span className="health-section-tag">
      MENSTRUAL HEALTH AWARENESS
    </span>

    <h2>🩺 Common Menstrual Health Problems</h2>

    <p>
      Learn about common menstrual concerns, their symptoms,
      possible causes, and when to seek medical advice.
    </p>
  </div>

  <div className="health-problems-grid">
    {healthProblems.map((problem) => (
      <button
        type="button"
        key={problem.id}
        className={`health-problem-card ${
          selectedProblem?.id === problem.id ? "problem-selected" : ""
        }`}
        onClick={() =>
          setSelectedProblem(
            selectedProblem?.id === problem.id ? null : problem
          )
        }
        aria-expanded={selectedProblem?.id === problem.id}
      >
        <span className="problem-icon">{problem.icon}</span>

        <h3>{problem.name}</h3>

        <p>{problem.description}</p>

        <span className="problem-action">
          {selectedProblem?.id === problem.id
            ? "Hide details ↑"
            : "Learn more →"}
        </span>
      </button>
    ))}
  </div>

  {selectedProblem && (
    <div className="health-problem-details">
      <button
        type="button"
        className="close-problem-details"
        onClick={() => setSelectedProblem(null)}
        aria-label="Close health problem details"
      >
        ✕
      </button>

      <span className="problem-detail-icon">
        {selectedProblem.icon}
      </span>

      <h3>{selectedProblem.fullName}</h3>

      <p>{selectedProblem.description}</p>

      <h4>Common symptoms</h4>
      <ul>
        {selectedProblem.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>

      <h4>Possible causes</h4>
      <p>{selectedProblem.causes}</p>

      <div className="medical-advice-box">
        <strong>When to seek medical advice</strong>
        <p>{selectedProblem.advice}</p>
      </div>

      <p className="medical-disclaimer">
        This information is for education only. Symptoms alone
        cannot confirm a diagnosis. A qualified healthcare
        professional can assess your concerns and recommend
        appropriate tests or treatment.
      </p>
    </div>
  )}
</section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Women Care</h3>
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

export default MenstrualHealth;
