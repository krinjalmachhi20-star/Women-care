import { useState } from "react";
import "./hygine.css";

function Hygiene() {
  const [checked, setChecked] = useState([]);

  const hygieneTips = [
    {
      id: 1,
      title: "Hand Hygiene",
      image: "/images/hand-hygiene.png",
      text: "Wash your hands regularly, especially before eating and after using the toilet."
    },
    {
      id: 2,
      title: "Oral Hygiene",
      image: "/images/oral-hygiene.png",
      text: "Brush your teeth regularly and maintain good oral care."
    },
    {
      id: 3,
      title: "Skin Care",
      image: "/images/skin-hygiene.png",
      text: "Keep your skin clean and choose products that suit your skin."
    },
    {
      id: 4,
      title: "Hair Hygiene",
      image: "/images/hair-hygiene.png",
      text: "Keep your scalp and hair clean according to your hair type."
    },
    {
      id: 5,
      title: "Menstrual Hygiene",
      image: "/images/period-hygiene.png",
      text: "Change menstrual products regularly and maintain proper hygiene."
    },
    {
      id: 6,
      title: "Clothing Hygiene",
      image: "/images/clothing-hygiene.png",
      text: "Wear clean clothes and change undergarments regularly."
    }
  ];

  const dailyTasks = [
    "Wash hands regularly",
    "Brush teeth",
    "Take a bath or shower",
    "Wear clean clothes",
    "Keep nails clean",
    "Maintain menstrual hygiene"
  ];

  const toggleTask = (task) => {
    if (checked.includes(task)) {
      setChecked(checked.filter((item) => item !== task));
    } else {
      setChecked([...checked, task]);
    }
  };

  const progress = Math.round(
    (checked.length / dailyTasks.length) * 100
  );

  return (
    <div className="hygiene-page">

      {/* HERO SECTION */}

      <section className="hygiene-hero">

        <div className="hero-content">

          <h1>🌸 Personal Hygiene for Women</h1>

          <p>
            Small daily hygiene habits can help support
            cleanliness, comfort and overall wellbeing.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("hygiene-tips")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Hygiene Tips ↓
          </button>

        </div>

        <img
          src="/images/woman-hygiene.png"
          alt="Personal hygiene"
          className="hero-image"
        />

      </section>


      {/* INTRODUCTION */}

      <section className="intro-section">

        <h2>✨ Why Personal Hygiene Matters</h2>

        <p>
          Personal hygiene means taking care of your body and
          keeping yourself clean through healthy daily habits.
          Good hygiene can help maintain comfort, cleanliness
          and confidence.
        </p>

      </section>


      {/* HYGIENE CARDS */}

      <section id="hygiene-tips" className="tips-section">

        <h2>🧼 Important Hygiene Areas</h2>

        <p className="section-subtitle">
          Explore different areas of personal hygiene.
        </p>

        <div className="hygiene-grid">

          {hygieneTips.map((tip) => (

            <div className="hygiene-card" key={tip.id}>

              <img
                src={tip.image}
                alt={tip.title}
              />

              <div className="card-content">

                <h3>{tip.title}</h3>

                <p>{tip.text}</p>

                <button
                  onClick={() =>
                    alert(`Tip: ${tip.text}`)
                  }
                >
                  💡 Quick Tip
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* DID YOU KNOW */}

      <section className="fact-section">

        <div className="fact-icon">💡</div>

        <div>

          <h2>Did You Know?</h2>

          <p>
            Hand hygiene is one of the simplest ways to reduce
            the spread of many germs.
          </p>

        </div>

      </section>


      {/* DAILY CHECKLIST */}

      <section className="checklist-section">

        <h2>✅ My Daily Hygiene Checklist</h2>

        <p>
          Complete your daily hygiene habits and track your progress.
        </p>

        <div className="progress-box">

          <div className="progress-text">
            <span>Today's Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>

          </div>

        </div>


        <div className="task-list">

          {dailyTasks.map((task) => (

            <label className="task" key={task}>

              <input
                type="checkbox"
                checked={checked.includes(task)}
                onChange={() => toggleTask(task)}
              />

              <span>{task}</span>

            </label>

          ))}

        </div>

      </section>


      {/* HYGIENE REMINDERS */}

      <section className="reminder-section">

        <h2>🌷 Simple Hygiene Reminders</h2>

        <div className="reminder-container">

          <div>
            <span>🧴</span>
            <h3>Keep Clean</h3>
            <p>
              Follow a regular personal hygiene routine.
            </p>
          </div>

          <div>
            <span>🧼</span>
            <h3>Wash Hands</h3>
            <p>
              Clean your hands at important times during the day.
            </p>
          </div>

          <div>
            <span>🩸</span>
            <h3>Period Hygiene</h3>
            <p>
              Use menstrual products safely and change them regularly.
            </p>
          </div>

        </div>

      </section>


      {/* WHEN TO SEEK HELP */}

      <section className="medical-section">

        <h2>🩺 When Should You Seek Medical Advice?</h2>

        <p>
          If you notice persistent unusual symptoms, significant
          changes in your normal health, or have concerns that do
          not improve, consider talking with a qualified healthcare
          professional.
        </p>

      </section>


      {/* FOOTER */}

      <footer className="hygiene-footer">

        <h3>🌸 Women Care</h3>

        <p>
          Learn • Care • Stay Healthy
        </p>

      </footer>

    </div>
  );
}

export default Hygiene;