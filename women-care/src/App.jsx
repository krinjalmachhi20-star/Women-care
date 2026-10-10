import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import HealthDetail from "./pages/healthDetails.jsx";
import Prescription from "./pages/prescription.jsx";
import Registration from "./pages/registration.jsx";
import Login from "./pages/login.jsx";
import HealthInfo from "./pages/health_Info";
import Reminders from "./pages/reminder.jsx";
import Doctors from "./pages/doctors.jsx";
import Nutrition from "./pages/nutrition.jsx";
import MenstrualHealth from "./pages/menstrualHealth.jsx";
import MentalWellBeing from "./pages/mentalWell.jsx";
import PersonalHygiene from "./pages/personalHygiene.jsx";

function Home() {
  const [user, setUser] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Women Care and how does it help me?",
      a: "Women Care is a dedicated health awareness platform created to empower women with accessible, reliable health education, medication dosage simplifications, local specialist directories, and personal health tracking tools."
    },
    {
      q: "Are the health guides written from verified sources?",
      a: "Yes. Our topics are written and structured from established medical guidelines and health awareness resources. Content is presented in simple, reassuring language to help you understand your body and make informed choices."
    },
    {
      q: "How do the health and medicine reminders work?",
      a: "You can schedule custom reminders for medication times, upcoming doctor appointments, hydration, and cycle check-ins on our Reminders page. All reminders are saved securely in your browser so they remain available whenever you visit."
    },
    {
      q: "Is my personal data and reminder information private?",
      a: "Yes, completely. Your account details and custom health reminders are stored locally in your browser's private local storage. We do not transmit or sell your personal information to third parties."
    },
    {
      q: "When should I consult a doctor immediately?",
      a: "If you experience severe or sudden abdominal or pelvic pain, unusually heavy bleeding, persistent high fever, or signs of severe emotional distress, please seek immediate clinical care or visit your nearest medical facility."
    }
  ];

  return (
    <div className="app">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info"> Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors">Doctors Directory</Link>
          <Link to="/prescription">Prescription Simplifier </Link>
          <Link to="/registration">Register </Link>
          <Link to="/login">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name}
          </div>
        )}
      </nav>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <span className="hero-badge">Comprehensive Women's Health & Clinical Guidance</span>
            <h1>Women Care & Health Awareness</h1>
            <p>
              Simple, reliable and accessible health information for women.
            </p>
            <div className="hero-actions">
              <a href="#how-we-help" onClick={(e) => scrollToSection(e, "how-we-help")}>
                <button className="hero-btn">
                  Explore Health Information
                </button>
              </a>
              <Link to="/health_Info" className="hero-secondary-link">
                View All Guides →
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="/images/hero_women.jpg" 
              alt="Women's Healthcare and Holistic Wellness" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="features" id="how-we-help">
        <div className="section-header">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2>How We Can Help</h2>
          <p className="section-desc">
            Explore our thoughtfully designed tools and guides to support your everyday health journey.
          </p>
        </div>

        <div className="feature-container">
          
          <Link to="/health_Info" className="feature-card-link">
            <div className="feature-card">
              <div className="feature-icon-badge">📚</div>
              <h3>Health Information</h3>
              <p>
                Learn about important women's health topics including menstrual wellness, nutrition, and personal hygiene in simple language.
              </p>
              <div className="feature-card-cta">
                <span>Learn More</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          <Link to="/reminder" className="feature-card-link">
            <div className="feature-card">
              <div className="feature-icon-badge">⏰</div>
              <h3>Health Reminders</h3>
              <p>
                Keep track of important health-related tasks: schedule medicine dosages, doctor appointments, and hydration check-ins.
              </p>
              <div className="feature-card-cta">
                <span>Set Reminders</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          <Link to="/doctors" className="feature-card-link">
            <div className="feature-card">
              <div className="feature-icon-badge">🩺</div>
              <h3>Doctors Directory</h3>
              <p>
                Connect with verified specialists—browse certified Gynecologists and Dermatologists with complete clinic addresses and contact numbers.
              </p>
              <div className="feature-card-cta">
                <span>Find Doctors</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>

          <Link to="/prescription" className="feature-card-link">
            <div className="feature-card">
              <div className="feature-icon-badge">💊</div>
              <h3>Prescription Simplifier</h3>
              <p>
                Quickly decode medical abbreviations such as OD, BD, TDS, HS, and understand dosage schedules clearly and safely.
              </p>
              <div className="feature-card-cta">
                <span>Simplify Rx</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-header">
          <span className="section-subtitle">KNOWLEDGE HUB</span>
          <h2>Women's Health Categories</h2>
          <p className="section-desc">
            Explore focused care guides crafted for each essential stage of a woman's health.
          </p>
        </div>

        <div className="categories-grid">
          
          <div className="category-card">
            <div className="category-header">
              <span className="category-icon">🌸</span>
              <h3>Menstrual Health</h3>
            </div>
            <p>
              Understand cycle biology, the 4 key cycle phases, symptom management, and effective menstrual hygiene practices.
            </p>
            <Link to="/menstrual-health/1" className="category-link">
              Explore Menstrual Health <span>→</span>
            </Link>
          </div>

          <div className="category-card">
            <div className="category-header">
              <span className="category-icon">🤰</span>
              <h3>Pregnancy Care</h3>
            </div>
            <p>
              Essential prenatal guidance, maternal nutrition, trimester milestones, and recommended healthcare checkups.
            </p>
            <Link to="/health_Info" className="category-link">
              Explore Pregnancy Care <span>→</span>
            </Link>
          </div>

          <div className="category-card">
            <div className="category-header">
              <span className="category-icon">🥗</span>
              <h3>Nutrition & Diet</h3>
            </div>
            <p>
              Discover balanced eating plans, iron and calcium rich foods, and daily habits that fuel energy and immunity.
            </p>
            <Link to="/nutrition/2" className="category-link">
              Explore Nutrition <span>→</span>
            </Link>
          </div>

          <div className="category-card">
            <div className="category-header">
              <span className="category-icon">🧘</span>
              <h3>Mental Health</h3>
            </div>
            <p>
              Techniques for stress reduction, emotional resilience, guided calm breathing, and when to seek compassionate professional support.
            </p>
            <Link to="/mental-wellbeing/3" className="category-link">
              Explore Mental Health <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="articles-section" id="popular-topics">
        <div className="section-header">
          <span className="section-subtitle">FEATURED ARTICLES</span>
          <h2>Popular Health Topics</h2>
          <p className="section-desc">
            Read comprehensive, easy-to-understand educational articles written to support your wellness.
          </p>
        </div>

        <div className="articles-grid">
          
          <article className="article-card">
            <div className="article-img-wrap">
              <img 
                src="/images/menstrual_cycle.jpg" 
                alt="Understanding Your Menstrual Cycle" 
                className="article-img"
              />
              <span className="article-tag">Cycle Awareness</span>
            </div>
            <div className="article-content">
              <h3>Understanding Your Menstrual Cycle</h3>
              <p>
                Demystifying the follicular, ovulation, and luteal phases so you can recognize your body's natural rhythms and optimize self-care.
              </p>
              <Link to="/menstrual-health/1" className="article-read-btn">
                Read Article <span>→</span>
              </Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-img-wrap">
              <img 
                src="/images/pregnancy_care.jpg" 
                alt="Healthy Pregnancy Tips" 
                className="article-img"
              />
              <span className="article-tag">Maternal Care</span>
            </div>
            <div className="article-content">
              <h3>Healthy Pregnancy Tips</h3>
              <p>
                Fundamental principles of prenatal nourishment, gentle movement routines, and scheduling essential diagnostic consultations.
              </p>
              <Link to="/health_Info" className="article-read-btn">
                Read Article <span>→</span>
              </Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-img-wrap">
              <img 
                src="/images/nutrition_women.jpg" 
                alt="Nutrition for Women" 
                className="article-img"
              />
              <span className="article-tag">Diet & Wellness</span>
            </div>
            <div className="article-content">
              <h3>Nutrition for Women</h3>
              <p>
                How wholesome leafy greens, iron, calcium, and consistent hydration foster hormonal balance, strong bones, and vibrant health.
              </p>
              <Link to="/nutrition/2" className="article-read-btn">
                Read Article <span>→</span>
              </Link>
            </div>
          </article>

          <article className="article-card">
            <div className="article-img-wrap">
              <img 
                src="/images/stress_relief.jpg" 
                alt="Managing Stress and Anxiety" 
                className="article-img"
              />
              <span className="article-tag">Mind & Calm</span>
            </div>
            <div className="article-content">
              <h3>Managing Stress and Anxiety</h3>
              <p>
                Practical mindfulness techniques, restorative breathing practices, and daily relaxation rituals to alleviate tension.
              </p>
              <Link to="/mental-wellbeing/3" className="article-read-btn">
                Read Article <span>→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="tools-section" id="health-tools">
        <div className="section-header">
          <span className="section-subtitle">ORGANIZED LIVING</span>
          <h2>Health Tools & Reminders</h2>
          <p className="section-desc">
            Stay on top of your medical schedules with intuitive tracking tools built directly into Women Care.
          </p>
        </div>

        <div className="tools-grid">
          
          <div className="tool-card">
            <div className="tool-top">
              <span className="tool-icon">🩸</span>
              <span className="tool-status status-active">Available</span>
            </div>
            <h3>Period & Cycle Reminders</h3>
            <p>
              Log cycle milestones, record menstrual dates, and receive timely alerts to stay prepared for upcoming periods.
            </p>
            <Link to="/reminder" className="tool-btn">
              Open Reminder Tool <span>→</span>
            </Link>
          </div>

          <div className="tool-card">
            <div className="tool-top">
              <span className="tool-icon">💊</span>
              <span className="tool-status status-active">Available</span>
            </div>
            <h3>Medication Reminders</h3>
            <p>
              Organize daily dosages, set morning, afternoon, and night alerts, and never skip prescribed treatments.
            </p>
            <Link to="/reminder" className="tool-btn">
              Set Medicine Alert <span>→</span>
            </Link>
          </div>

          <div className="tool-card">
            <div className="tool-top">
              <span className="tool-icon">📅</span>
              <span className="tool-status status-active">Available</span>
            </div>
            <h3>Appointment Reminders</h3>
            <p>
              Schedule alerts for gynecologist visits, routine blood tests, ultrasound screenings, and doctor check-ups.
            </p>
            <Link to="/reminder" className="tool-btn">
              Add Appointment <span>→</span>
            </Link>
          </div>

          <div className="tool-card tool-coming-soon">
            <div className="tool-top">
              <span className="tool-icon">💧</span>
              <span className="tool-status status-upcoming">Coming Soon</span>
            </div>
            <h3>General Wellness Tracking</h3>
            <p>
              Track daily hydration goals, sleep duration, and mood check-ins. Feature currently under active development.
            </p>
            <Link to="/reminder" className="tool-btn">
              Preview Active Tools <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="doctor-spotlight" id="find-doctor">
        <div className="doctor-spotlight-card">
          <div className="doctor-spotlight-content">
            <span className="doctor-badge">🩺 SPECIALIST DIRECTORY</span>
            <h2>Find Trusted Women's Health Doctors</h2>
            <p>
              Access our curated directory of certified medical specialists in Mumbai. Filter by specialty—including Gynecologists and Dermatologists—with direct clinic addresses and telephone numbers.
            </p>
            <div className="doctor-features-list">
              <span className="doc-pill">✓ Verified Clinic Addresses</span>
              <span className="doc-pill">✓ Direct Phone Contacts</span>
              <span className="doc-pill">✓ Gynecologists & Skin Clinics</span>
            </div>
            <Link to="/doctors">
              <button className="doctor-action-btn">
                Browse Doctors Directory →
              </button>
            </Link>
          </div>
          <div className="doctor-spotlight-visual">
            <div className="doctor-stat-box">
              <span className="stat-number">25+</span>
              <span className="stat-label">Verified Specialists</span>
            </div>
            <div className="doctor-stat-box">
              <span className="stat-number">Mumbai</span>
              <span className="stat-label">Andheri, Khar & More</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-header">
          <span className="section-subtitle">GOT QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
          <p className="section-desc">
            Find quick answers about navigating Women Care, utilizing our reminders, and understanding health information.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                className={`faq-item ${isOpen ? "faq-open" : ""}`} 
                key={idx}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer" id={`faq-answer-${idx}`}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-disclaimer-box">
          <p>
            ⚠️ <strong>Medical Disclaimer:</strong> Women Care provides educational health information. 
            The content on this website does not substitute professional clinical diagnosis, 
            prescriptions, or personal medical consultation. Always consult a qualified healthcare professional 
            for medical advice or treatment.
          </p>
        </div>
      </section>

      <section className="final-cta-section" id="final-cta">
        <div className="final-cta-card">
          <h2>Your Health, Our Priority</h2>
          <p>
            Take charge of your wellness journey today with reliable guides, timely reminders, and simplified healthcare tools.
          </p>
          <div className="cta-buttons">
            <Link to="/registration">
              <button className="cta-btn-primary">
                Get Started
              </button>
            </Link>
            <Link to="/health_Info">
              <button className="cta-btn-secondary">
                Explore Guides
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Women Care</h3>
            <p>Simple, reliable and accessible health information for women.</p>
          </div>
          <div className="footer-nav">
            <Link to="/home">Home</Link>
            <Link to="/health_Info">Health Information</Link>
            <Link to="/reminder">Reminders</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/prescription">Prescriptions</Link>
            <Link to="/registration">Register</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Women Care © 2026. Dedicated to women's healthcare and awareness.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

 <Route path="/" element={<Navigate to="/registration" replace />} />
 <Route path="/home" element={<Home />} />

<Route path="/registration" element={<Registration />} />

<Route path="/login" element={<Login />} />
<Route path="/prescription" element={<Prescription />} />

<Route path="/health_Info" element={<HealthInfo />}/>

<Route path="/health-info/:id" element={<HealthDetail />}/>

<Route path="/nutrition/:id" element={<Nutrition />}/>

<Route path="/menstrual-health/:id" element={<MenstrualHealth/>}/>

<Route path="/personal-hygiene/:id" element={<PersonalHygiene />}/>

<Route path="/mental-wellbeing/:id" element={<MentalWellBeing/>}/>

 <Route path="/reminder" element={<Reminders />} />

 <Route path="/doctors" element={<Doctors />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
