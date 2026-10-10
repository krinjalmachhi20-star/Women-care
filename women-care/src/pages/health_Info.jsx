import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./healthInfo.css";

const healthTopics = [
  {
    id: 1,
    title: "Menstrual Health",
    icon: "🌸",
    tag: "Cycle Awareness",
    path: "/menstrual-health/1",
    description:
      "Learn essential facts about your menstrual cycle, cycle phases, hormonal rhythms, menstrual hygiene, and common period concerns.",
    highlights: [
      "4 Cycle Phases (Menstrual, Follicular, Ovulation, Luteal)",
      "Safe hygiene practices & product management",
      "Managing cramps & pre-menstrual symptoms"
    ]
  },
  {
    id: 2,
    title: "Nutrition & Diet",
    icon: "🥗",
    tag: "Daily Vitality",
    path: "/nutrition/2",
    description:
      "Discover the power of wholesome nutrition: learn which foods supply iron, calcium, and protein for sustained energy and hormonal balance.",
    highlights: [
      "Key nutrients: Iron, Calcium, Protein & Vitamin C",
      "Interactive 'Build Your Healthy Plate' guide",
      "Hydration tracking & nutrition mini-game challenge"
    ]
  },
  {
    id: 3,
    title: "Mental Wellbeing",
    icon: "🧘",
    tag: "Mind & Calm",
    path: "/mental-wellbeing/3",
    description:
      "Explore compassionate strategies for stress relief, emotional balance, mindfulness, restorative sleep, and knowing when to seek support.",
    highlights: [
      "Guided calm breathing & mindfulness techniques",
      "Restorative sleep hygiene practices",
      "Mood check-in & emotional resilience tips"
    ]
  },
  {
    id: 4,
    title: "Personal Hygiene",
    icon: "✨",
    tag: "Everyday Wellness",
    path: "/personal-hygiene/4",
    description:
      "Master essential daily hygiene habits, intimate wellness care, skin protection, and preventive routines for a healthy lifestyle.",
    highlights: [
      "Gentle skin & body cleansing principles",
      "Intimate hygiene best practices",
      "Hand washing, oral care & infection prevention"
    ]
  }
];

function HealthInfo() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const filteredTopics = healthTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="health-page">
      
      <nav className="navbar">
        <Link to="/home">
          <h2>Women Care</h2>
        </Link>
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

      <main className="health-content-container">
        
        <header className="health-hero-banner">
          <span className="health-subtag">KNOWLEDGE & EDUCATION HUB</span>
          <h1>Women's Health Information</h1>
          <p>
            Explore simple, accessible, and medically grounded guides covering every essential aspect of women's wellness.
          </p>

          <div className="health-search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search topics (e.g. cycle, nutrition, stress, hygiene)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="health-search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>
        </header>

        <section className="topics-section">
          <div className="topics-grid">
            {filteredTopics.map((topic) => (
              <article className="topic-card" key={topic.id}>
                <div className="topic-card-header">
                  <div className="topic-icon-badge">{topic.icon}</div>
                  <span className="topic-tag-pill">{topic.tag}</span>
                </div>

                <h2 className="topic-title">{topic.title}</h2>
                <p className="topic-desc">{topic.description}</p>

                <div className="topic-highlights">
                  <span className="highlights-label">What You'll Learn:</span>
                  <ul>
                    {topic.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="topic-action-footer">
                  <Link to={topic.path} className="topic-read-btn">
                    <span>Read Full Guide</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="no-topics-found">
              <span className="no-topics-icon">🔍</span>
              <h3>No health topics found</h3>
              <p>We couldn't find any guide matching "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery("")}
                className="reset-search-btn"
              >
                View All Topics
              </button>
            </div>
          )}
        </section>

        <section className="wellness-tips-section">
          <div className="tips-header">
            <h3>💡 Daily Health Foundations</h3>
            <p>Simple daily routines that foster lifelong vitality and balance.</p>
          </div>

          <div className="tips-cards-grid">
            <div className="tip-card">
              <span className="tip-emoji">💧</span>
              <h4>Consistent Hydration</h4>
              <p>Aim for 6–8 glasses of water daily to support circulation, kidney function, and cognitive focus.</p>
            </div>

            <div className="tip-card">
              <span className="tip-emoji">🛌</span>
              <h4>Restorative Sleep</h4>
              <p>Prioritize 7–8 hours of consistent sleep nightly to allow cellular repair and hormone balance.</p>
            </div>

            <div className="tip-card">
              <span className="tip-emoji">🚶</span>
              <h4>Gentle Movement</h4>
              <p>Incorporate 20–30 minutes of walking, yoga, or stretching to elevate mood and reduce tension.</p>
            </div>
          </div>
        </section>

        <div className="health-disclaimer-box">
          <span className="disclaimer-icon">⚠️</span>
          <p>
            <strong>Medical Notice:</strong> Content provided by Women Care is for educational awareness and informational purposes only. It is not intended to be a substitute for professional clinical diagnosis or personalized medical advice. Always consult a qualified physician or healthcare provider.
          </p>
        </div>
      </main>

      <footer className="health-footer">
        <p>Women Care © 2026. Dedicated to women's healthcare and awareness.</p>
      </footer>
    </div>
  );
}

export default HealthInfo;
