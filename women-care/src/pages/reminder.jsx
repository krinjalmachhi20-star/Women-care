import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./reminder.css";

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Medicine");
  const [filter, setFilter] = useState("All");
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

  useEffect(() => {
    const savedReminders = localStorage.getItem("healthReminders");
    if (savedReminders) {
      try {
        setReminders(JSON.parse(savedReminders));
      } catch (e) {
        console.error(e);
      }
    } else {
      
      const initialSamples = [
        {
          id: 1,
          text: "Iron & Folic Acid tablet after breakfast",
          date: new Date().toISOString().split("T")[0],
          time: "09:00",
          type: "Medicine",
          completed: false,
        },
        {
          id: 2,
          text: "Hydration check: Drink 2 glasses of water",
          date: new Date().toISOString().split("T")[0],
          time: "14:00",
          type: "Hydration",
          completed: false,
        },
        {
          id: 3,
          text: "Annual Gynecologist Health Review",
          date: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
          time: "11:30",
          type: "Appointment",
          completed: false,
        },
      ];
      setReminders(initialSamples);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("healthReminders", JSON.stringify(reminders));
  }, [reminders]);

  const loadPreset = (presetText, presetType, timeOffsetHours = 1) => {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const targetHours = String((today.getHours() + timeOffsetHours) % 24).padStart(2, "0");
    const timeStr = `${targetHours}:00`;

    setText(presetText);
    setType(presetType);
    setDate(dateStr);
    setTime(timeStr);
  };

  const addReminder = (e) => {
    if (e) e.preventDefault();

    if (!text.trim() || !date || !time || !type) {
      alert("Please fill in the reminder title, date, time, and type.");
      return;
    }

    const newReminder = {
      id: Date.now(),
      text: text.trim(),
      date: date,
      time: time,
      type: type,
      completed: false,
    };

    setReminders([newReminder, ...reminders]);
    setText("");
    setDate("");
    setTime("");
    setType("Medicine");
  };

  const toggleComplete = (id) => {
    setReminders(
      reminders.map((r) =>
        r.id === id ? { ...r, completed: !r.completed } : r
      )
    );
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  const filteredReminders =
    filter === "All"
      ? reminders
      : filter === "Completed"
        ? reminders.filter((r) => r.completed)
        : reminders.filter((r) => r.type === filter);

  const getIcon = (itemType) => {
    switch (itemType) {
      case "Medicine":
        return "💊";
      case "Appointment":
        return "🩺";
      case "Check-up":
        return "🏥";
      case "Hydration":
        return "💧";
      case "Cycle":
        return "🩸";
      default:
        return "📌";
    }
  };

  const counts = {
    total: reminders.length,
    medicine: reminders.filter((r) => r.type === "Medicine").length,
    appointment: reminders.filter((r) => r.type === "Appointment").length,
    completed: reminders.filter((r) => r.completed).length,
  };

  return (
    <div className="reminder-page-wrapper">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
          <Link to="/reminder" className="active-nav-link">Reminders</Link>
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

      <section className="reminder-hero">
        <div className="reminder-hero-content">
          <span className="reminder-badge">Medication & Health Schedules</span>
          <h1>Women's Health Reminders</h1>
          <p>
            Stay on top of your medications, doctor visits, cycle milestones, and daily hydration
            with private, browser-saved health reminders.
          </p>
        </div>
      </section>

      <div className="reminder-main-container">
        
        <section className="reminder-stats-grid">
          <div className="stat-card total-card">
            <div className="stat-icon-wrap">📋</div>
            <div className="stat-info">
              <h3>{counts.total}</h3>
              <p>Total Reminders</p>
            </div>
          </div>

          <div className="stat-card med-card">
            <div className="stat-icon-wrap">💊</div>
            <div className="stat-info">
              <h3>{counts.medicine}</h3>
              <p>Medications</p>
            </div>
          </div>

          <div className="stat-card appt-card">
            <div className="stat-icon-wrap">🩺</div>
            <div className="stat-info">
              <h3>{counts.appointment}</h3>
              <p>Appointments</p>
            </div>
          </div>

          <div className="stat-card comp-card">
            <div className="stat-icon-wrap">✅</div>
            <div className="stat-info">
              <h3>{counts.completed}</h3>
              <p>Completed Tasks</p>
            </div>
          </div>
        </section>

        <div className="reminder-layout">
          
          <section className="reminder-form-card">
            <div className="form-title-row">
              <h2>➕ Schedule a Reminder</h2>
              <span className="form-subtitle">Choose a quick preset or customize</span>
            </div>

            <div className="presets-box">
              <span className="presets-label">Quick Suggestions:</span>
              <div className="preset-chips">
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() => loadPreset("Take Iron / Vitamin Supplement", "Medicine", 1)}
                >
                  💊 Take Iron Tablet
                </button>
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() => loadPreset("Hydration Check: 1 Large Glass", "Hydration", 2)}
                >
                  💧 Drink Water
                </button>
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() => loadPreset("Doctor Follow-up Consultation", "Appointment", 24)}
                >
                  🩺 Doctor Follow-up
                </button>
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() => loadPreset("Log Period Cycle Day 1 Symptoms", "Cycle", 24)}
                >
                  🩸 Period Log
                </button>
              </div>
            </div>

            <form onSubmit={addReminder} className="reminder-inputs-grid">
              <div className="input-group full-width">
                <label>Reminder Title / Description</label>
                <input
                  type="text"
                  placeholder="e.g. Thyroid medicine before food"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Category</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="Medicine">💊 Medicine / Supplement</option>
                  <option value="Appointment">🩺 Doctor Appointment</option>
                  <option value="Check-up">🏥 Health Screening / Lab Test</option>
                  <option value="Hydration">💧 Daily Hydration</option>
                  <option value="Cycle">🩸 Cycle & Period Care</option>
                  <option value="Other">📌 Other Wellbeing</option>
                </select>
              </div>

              <div className="input-group">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

              <div className="input-group action-group">
                <button type="submit" className="save-reminder-btn">
                  Save Reminder
                </button>
              </div>
            </form>
          </section>

          <section className="reminder-list-section">
            <div className="list-header-row">
              <h2>📋 Your Reminders</h2>

              <div className="filter-pill-bar">
                {["All", "Medicine", "Appointment", "Hydration", "Cycle", "Completed"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`filter-pill ${filter === tab ? "active-pill" : ""}`}
                    onClick={() => setFilter(tab)}
                  >
                    {tab === "All" && "All"}
                    {tab === "Medicine" && "💊 Meds"}
                    {tab === "Appointment" && "🩺 Visits"}
                    {tab === "Hydration" && "💧 Water"}
                    {tab === "Cycle" && "🩸 Cycle"}
                    {tab === "Completed" && "✅ Done"}
                  </button>
                ))}
              </div>
            </div>

            <div className="cards-wrapper">
              {filteredReminders.length === 0 ? (
                <div className="empty-reminders-box">
                  <span className="empty-icon">📅</span>
                  <h3>No Reminders in "{filter}"</h3>
                  <p>You're all caught up! Use the form or quick presets to schedule your next wellness reminder.</p>
                </div>
              ) : (
                filteredReminders.map((reminder) => (
                  <div
                    key={reminder.id}
                    className={`reminder-card-item ${reminder.completed ? "is-completed" : ""}`}
                  >
                    <button
                      type="button"
                      className="completion-toggle"
                      onClick={() => toggleComplete(reminder.id)}
                      title={reminder.completed ? "Mark as pending" : "Mark as done"}
                    >
                      {reminder.completed ? "✓" : ""}
                    </button>

                    <div className="reminder-item-icon">
                      {getIcon(reminder.type)}
                    </div>

                    <div className="reminder-item-body">
                      <div className="reminder-meta-top">
                        <span className="reminder-tag-badge">{reminder.type}</span>
                        {reminder.completed && <span className="status-badge-done">Completed</span>}
                      </div>
                      <h4 className="reminder-title-text">{reminder.text}</h4>
                      <div className="reminder-timestamp">
                        <span>📅 {reminder.date}</span>
                        <span>⏰ {reminder.time}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="delete-icon-btn"
                      onClick={() => deleteReminder(reminder.id)}
                      title="Delete reminder"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        <section className="reminder-tip-strip">
          <span className="tip-bulb">💡</span>
          <div>
            <strong>Daily Habit Pro-Tip:</strong>
            <p>
              Pairing medication schedules with existing habits (like breakfast or brushing teeth)
              increases consistency by up to 70%. Keep a reusable water bottle near your workspace
              for easy hydration reminders.
            </p>
          </div>
        </section>
      </div>

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

export default Reminders;
