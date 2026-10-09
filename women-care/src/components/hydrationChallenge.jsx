import { useState } from "react";
import "./hydrationChallenge.css";

function HydrationChallenge() {

  // Today's hydration count
  const [waterCount, setWaterCount] = useState(0);

  // Previous hydration history
  const [history, setHistory] = useState([
    { day: "Mon", cups: 5 },
    { day: "Tue", cups: 6 },
    { day: "Wed", cups: 4 },
    { day: "Thu", cups: 7 },
    { day: "Fri", cups: 5 }
  ]);

  // Add water
  const addWater = () => {
    if (waterCount < 8) {
      setWaterCount(waterCount + 1);
    }
  };

  // Remove water
  const removeWater = () => {
    if (waterCount > 0) {
      setWaterCount(waterCount - 1);
    }
  };

  // XP calculation
  const score = waterCount * 10;

  // Progress percentage
  const progress = (waterCount / 8) * 100;

  return (
    <div className="hydration-page">

      {/* Header */}
      <section className="hydration-header">
        <span>💧 WOMEN CARE</span>

        <h1>Hydration Challenge 💦</h1>

        <p>
          Make hydration learning fun by completing today's challenge.
        </p>
      </section>


      {/* Today's Challenge */}
      <section className="challenge-card">

        <div className="challenge-title">
          <h2>🎮 Today's Challenge</h2>

          <span>+10 XP / Drop</span>
        </div>


        {/* Water Drops */}
        <div className="water-display">

          {Array.from({ length: 8 }).map((_, index) => (

            <div
              key={index}
              className={
                index < waterCount
                  ? "water-drop active"
                  : "water-drop"
              }
            >
              💧
            </div>

          ))}

        </div>


        {/* Count */}
        <h2 className="water-count">
          {waterCount} / 8
        </h2>


        {/* Progress Bar */}
        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>


        <p>
          Challenge Progress: {Math.round(progress)}%
        </p>


        {/* Buttons */}
        <div className="water-buttons">

          <button onClick={addWater}>
            💧 Add Water
          </button>

          <button onClick={removeWater}>
            ↩ Remove
          </button>

        </div>


        {/* XP */}
        <div className="score-box">
          ⭐ {score} XP
        </div>


        {/* Completed Message */}
        {waterCount === 8 && (

          <div className="complete-message">

            <h2>🎉 Challenge Completed!</h2>

            <p>
              Amazing! You completed today's hydration game.
            </p>

            <strong>
              🏆 Hydration Explorer
            </strong>

          </div>

        )}

      </section>


      {/* Hydration Fact */}
      <section className="hydration-fact">

        <div className="fact-icon">
          💡
        </div>

        <div>

          <h2>Did You Know?</h2>

          <p>
            Water is important for many normal body functions.
            Your hydration needs can vary depending on activity,
            weather and individual circumstances.
          </p>

        </div>

      </section>


      {/* History */}
      <section className="history-section">

        <h2>📅 Hydration History</h2>

        <p>
          See your previous hydration records.
        </p>


        <div className="history-cards">

          {history.map((record, index) => (

            <div
              className="history-card"
              key={index}
            >

              <h3>
                {record.day}
              </h3>

              <div className="history-water">
                💧
              </div>

              <strong>
                {record.cups}
              </strong>

              <p>
                entries
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CSS Visual Chart */}
      <section className="chart-section">

        <h2>📊 Hydration Progress</h2>

        <p>
          Visual history of your hydration activity
        </p>


        <div className="chart">

          {history.map((record, index) => (

            <div
              className="chart-column"
              key={index}
            >

              {/* Number above bar */}
              <span className="chart-value">
                {record.cups}
              </span>


              {/* Bar */}
              <div
                className="chart-bar"
                style={{
                  height: `${record.cups * 30}px`
                }}
              >
                💧
              </div>


              {/* Day */}
              <span className="chart-day">
                {record.day}
              </span>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default HydrationChallenge;