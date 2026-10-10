import { useState } from "react";
import "./wellBeing.css";

function WellBeing() {
  const [selectedMood, setSelectedMood] = useState("");
  const [showTip, setShowTip] = useState(false);

  const wellbeingTopics = [
    {
      id: 1,
      title: "Manage Stress",
      icon: "🌿",
      image: "/images/stress-management.png",
      text: "Take small breaks, plan your tasks, and make time for activities you enjoy.",
      color: "mint"
    },
    {
      id: 2,
      title: "Healthy Sleep",
      icon: "🌙",
      image: "/images/healthy-sleep.png",
      text: "Follow a regular sleep routine and give your body enough time to rest.",
      color: "lavender"
    },
    {
      id: 3,
      title: "Stay Connected",
      icon: "💗",
      image: "/images/social-support.png",
      text: "Connect with trusted friends, family, teachers, or people who support you.",
      color: "peach"
    },
    {
      id: 4,
      title: "Self-Care",
      icon: "🌸",
      image: "/images/self-care.png",
      text: "Enjoy your hobbies, creativity, relaxation, and activities that help you recharge.",
      color: "pink"
    }
  ];

  const moods = [
    { label: "Good", emoji: "😊", message: "Great! Make some time for activities you enjoy." },
    { label: "Okay", emoji: "🙂", message: "It's okay to have an ordinary day. Take things one step at a time." },
    { label: "Neutral", emoji: "😐", message: "Pause for a moment and notice what you need today." },
    { label: "Stressed", emoji: "😟", message: "Try a quiet break and consider talking with someone you trust." }
  ];

  const habits = [
    { icon: "🛌", title: "Rest well", text: "Keep a regular sleep routine." },
    { icon: "🥗", title: "Eat well", text: "Enjoy balanced, regular meals." },
    { icon: "🚶", title: "Keep moving", text: "Take comfortable movement breaks." },
    { icon: "🎨", title: "Enjoy hobbies", text: "Make room for creativity and fun." },
    { icon: "💬", title: "Stay connected", text: "Share your feelings with someone trusted." },
    { icon: "📱", title: "Screen breaks", text: "Step away from screens when needed." }
  ];

  const selectedMoodInfo = moods.find(
    (mood) => mood.label === selectedMood
  );

  return (
    <main className="mental-page">

      <section className="mental-hero">
        <div className="hero-decoration hero-decoration-one"></div>
        <div className="hero-decoration hero-decoration-two"></div>

        <div className="mental-hero-text">
          <span className="mental-eyebrow">
            YOUR MIND MATTERS
          </span>

          <h1>
            Make Your Mind
            <br />
            a <span>Peaceful Place.</span>
          </h1>

          <p>
            Your mental wellbeing deserves care, kindness, and attention.
            Discover simple ways to feel supported and create a healthier
            everyday routine.
          </p>

          <button
            type="button"
            className="mental-primary-btn"
            onClick={() => setShowTip(!showTip)}
            aria-expanded={showTip}
          >
            {showTip ? "Hide Self-Care Tip" : "✨ Discover Self-Care"}
            <span>{showTip ? "↑" : "→"}</span>
          </button>

          {showTip && (
            <div className="tip-box">
              <span className="tip-icon">💜</span>
              <div>
                <strong>A little reminder for you</strong>
                <p>
                  Take a short break, breathe comfortably, drink some water,
                  or spend a few minutes doing something you love.
                </p>
              </div>
            </div>
          )}

          <div className="hero-note">
            <span>♡</span>
            Small steps. Gentle care. Better days.
          </div>
        </div>

        <div className="mental-hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/mental-wellbeing.png"
              alt="Illustration representing mental wellbeing"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="hero-image-fallback">🧠 🌸</div>
          </div>

          <div className="floating-note note-top">
            <span>🌷</span>
            Be kind to yourself
          </div>

          <div className="floating-note note-bottom">
            <span>☁️</span>
            You deserve a pause
          </div>
        </div>
      </section>

      <section className="mental-intro">
        <div className="intro-icon">🧠</div>
        <div>
          <span className="section-kicker">UNDERSTAND YOURSELF</span>
          <h2>What Is Mental Wellbeing?</h2>
          <p>
            Mental wellbeing is about how we think, feel, handle everyday
            challenges, and connect with other people. It does not mean
            feeling happy all the time. It means learning to care for
            yourself and seek support when you need it.
          </p>
        </div>
      </section>

      <section className="wellbeing-section">
        <div className="section-heading">
          <span className="section-kicker">LITTLE THINGS THAT HELP</span>
          <h2>Ways to Care for Your Mind</h2>
          <p>
            Explore simple habits that can support your everyday wellbeing.
          </p>
        </div>

        <div className="wellbeing-grid">
          {wellbeingTopics.map((topic) => (
            <article
              className={`wellbeing-card ${topic.color}`}
              key={topic.id}
            >
              <div className="topic-top">
                <span className="topic-icon">{topic.icon}</span>
                <span className="topic-number">
                  0{topic.id}
                </span>
              </div>

              <div className="topic-image">
                <img
                  src={topic.image}
                  alt={topic.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <h3>{topic.title}</h3>
              <p>{topic.text}</p>

              <div className="topic-bottom">
                <span>YOUR WELLBEING</span>
                <span className="topic-heart">♡</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mood-section">
        <div className="mood-content">
          <span className="section-kicker">PAUSE AND CHECK IN</span>
          <h2>How Are You Feeling Today?</h2>
          <p>
            There is no right or wrong answer. Choose the option that
            best describes how you feel right now.
          </p>

          <div className="mood-buttons">
            {moods.map((mood) => (
              <button
                type="button"
                key={mood.label}
                className={`mood-button ${
                  selectedMood === mood.label ? "selected" : ""
                }`}
                onClick={() => setSelectedMood(mood.label)}
                aria-pressed={selectedMood === mood.label}
              >
                <span className="mood-emoji">{mood.emoji}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>

          {selectedMoodInfo && (
            <div className="mood-result" aria-live="polite">
              <span className="result-emoji">
                {selectedMoodInfo.emoji}
              </span>
              <div>
                <strong>Your check-in: {selectedMoodInfo.label}</strong>
                <p>{selectedMoodInfo.message}</p>
                <small>
                  This is a simple reflection activity, not a mental-health diagnosis.
                </small>
              </div>
            </div>
          )}
        </div>

        <div className="mood-decoration" aria-hidden="true">
          <span>☁️</span>
          <div>♡</div>
          <span>🌷</span>
        </div>
      </section>

      <section className="habits-section">
        <div className="section-heading">
          <span className="section-kicker">YOUR DAILY RESET</span>
          <h2>Simple Habits, Gentle Days</h2>
          <p>
            You do not need to do everything at once. Start with one small step.
          </p>
        </div>

        <div className="habit-grid">
          {habits.map((habit, index) => (
            <article className="habit-card" key={habit.title}>
              <div className="habit-icon">{habit.icon}</div>
              <div className="habit-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{habit.title}</h3>
              <p>{habit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="support-banner">
        <div className="support-banner-icon">💗</div>
        <div>
          <span className="section-kicker">A GENTLE REMINDER</span>
          <h2>You Don't Have to Do Everything Alone.</h2>
          <p>
            Asking for support is a healthy step. If difficult feelings
            continue or affect your daily life, consider talking with a
            trusted adult, college counsellor, doctor, or qualified
            mental-health professional.
          </p>
        </div>
      </section>

      <footer className="mental-footer">
        <div className="footer-brand">🌸 Women Care</div>
        <p>Care for your mind. Be gentle with yourself.</p>
        <span>Small steps toward a healthier you ♡</span>
      </footer>

    </main>
  );
}

export default WellBeing;
