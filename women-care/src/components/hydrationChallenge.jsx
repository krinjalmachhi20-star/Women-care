import { useState } from "react";
import "./hydrationChallenge.css";

function HydrationChallenge() {
  
  const [waterCount, setWaterCount] = useState(3);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const [history, setHistory] = useState([
    { day: "Mon", cups: 5, target: 8 },
    { day: "Tue", cups: 6, target: 8 },
    { day: "Wed", cups: 4, target: 8 },
    { day: "Thu", cups: 7, target: 8 },
    { day: "Fri", cups: 8, target: 8 },
  ]);

  const hydrationTips = [
    {
      icon: "🌸",
      title: "Hormonal Balance & Cramp Relief",
      text: "Staying properly hydrated helps reduce bloating, eases menstrual cramps, and supports smooth estrogen and progesterone metabolism."
    },
    {
      icon: "✨",
      title: "Skin Radiance & Elasticity",
      text: "Drinking 2 liters of water daily helps flush cellular toxins and promotes natural collagen elasticity for a vibrant skin glow."
    },
    {
      icon: "⚡",
      title: "Energy & Brain Focus",
      text: "Even mild dehydration of 1–2% can trigger fatigue, brain fog, and midday headaches. A morning glass of water boosts alertness instantly."
    },
    {
      icon: "💧",
      title: "Kidney & Urinary Wellness",
      text: "Adequate fluid intake is the #1 natural preventative habit against recurring urinary tract infections (UTIs) in women."
    }
  ];

  const addWater = () => {
    if (waterCount < 8) {
      setWaterCount((prev) => prev + 1);
    }
  };

  const removeWater = () => {
    if (waterCount > 0) {
      setWaterCount((prev) => prev - 1);
    }
  };

  const resetWater = () => {
    setWaterCount(0);
  };

  const setExactGlasses = (target) => {
    setWaterCount(target);
  };

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % hydrationTips.length);
  };

  const score = waterCount * 10;
  const targetLiters = 2.0;
  const currentMl = waterCount * 250;
  const progressPercent = Math.min(100, Math.round((waterCount / 8) * 100));

  const getBadgeTitle = () => {
    if (waterCount === 8) return "Optimal Intake Met (8/8)";
    if (waterCount >= 6) return "Well Hydrated (6/8)";
    if (waterCount >= 4) return "Moderate Intake (4/8)";
    if (waterCount >= 1) return "Initial Intake (1-3 glasses)";
    return "Intake Needed (0/8)";
  };

  const avgCups = (history.reduce((acc, h) => acc + h.cups, 0) / history.length).toFixed(1);

  return (
    <div className="hydration-challenge-wrapper">
      
      <div className="hydro-header">
        <span className="hydro-badge">HYDRATION & FLUID BALANCE</span>
        <h2>Daily Hydration Tracker</h2>
        <p>
          Fuel your energy, skin glow, and hormone balance. Tap the droplets or use the buttons
          below to log your 8 daily glasses (2,000 ml).
        </p>
      </div>

      <div className="hydro-main-card">
        
        <div className="hydro-card-top">
          <div className="hydro-status-group">
            <span className="hydro-game-icon">🎮</span>
            <div>
              <h3>Today's Water Tracker</h3>
              <span className="hydro-rank-badge">{getBadgeTitle()}</span>
            </div>
          </div>

          <div className="hydro-xp-pill">
            <span className="xp-star">⭐</span>
            <strong>{score} XP</strong>
            <span className="xp-rate">(250 ml / glass)</span>
          </div>
        </div>

        <div className="hydro-droplets-rack">
          {Array.from({ length: 8 }).map((_, index) => {
            const isFilled = index < waterCount;
            const glassNumber = index + 1;
            return (
              <button
                type="button"
                key={index}
                className={`hydro-droplet-btn ${isFilled ? "filled" : "empty"}`}
                onClick={() => setExactGlasses(isFilled && waterCount === glassNumber ? glassNumber - 1 : glassNumber)}
                title={`Glass ${glassNumber} (250ml) - Tap to toggle`}
              >
                <div className="droplet-shape">
                  <span className="droplet-emoji">{isFilled ? "💧" : "🫧"}</span>
                  <span className="droplet-num">{glassNumber}</span>
                </div>
                <span className="droplet-sublabel">{glassNumber * 250}ml</span>
              </button>
            );
          })}
        </div>

        <div className="hydro-progress-block">
          <div className="hydro-progress-labels">
            <div className="hydro-metric-main">
              <strong className="current-count">{waterCount}</strong>
              <span className="total-target">/ 8 glasses</span>
              <span className="ml-equiv">({currentMl} ml of 2,000 ml)</span>
            </div>
            <div className="hydro-percentage-tag">{progressPercent}% Completed</div>
          </div>

          <div className="hydro-progress-track">
            <div
              className="hydro-progress-fill"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="progress-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="hydro-buttons-row">
          <button
            type="button"
            className="hydro-btn add-btn"
            onClick={addWater}
            disabled={waterCount >= 8}
          >
            <span className="btn-icon">💧</span>
            <span>Add 1 Glass (250ml)</span>
          </button>

          <button
            type="button"
            className="hydro-btn remove-btn"
            onClick={removeWater}
            disabled={waterCount <= 0}
          >
            <span className="btn-icon">↩</span>
            <span>Remove Glass</span>
          </button>

          <button
            type="button"
            className="hydro-btn reset-btn"
            onClick={resetWater}
            title="Reset today's water count"
          >
            <span>Reset</span>
          </button>
        </div>

        {waterCount === 8 && (
          <div className="hydro-celebrate-card">
            <div className="celebrate-icon">🎉</div>
            <div className="celebrate-text">
              <h4>Daily Hydration Goal Accomplished!</h4>
              <p>
                Magnificent work! You've met your optimal 2-liter daily water intake.
                Your body, mind, and skin thank you today!
              </p>
              <span className="achievement-chip">Recommended Daily Fluid Intake Reached (2,000 ml)</span>
            </div>
          </div>
        )}
      </div>

      <div className="hydro-fact-card">
        <div className="fact-badge-icon">{hydrationTips[currentTipIndex].icon}</div>
        <div className="fact-body">
          <div className="fact-header-row">
            <h4>{hydrationTips[currentTipIndex].title}</h4>
            <button type="button" className="next-fact-btn" onClick={nextTip}>
              Next Health Tip →
            </button>
          </div>
          <p>{hydrationTips[currentTipIndex].text}</p>
        </div>
      </div>

      <div className="hydro-history-container">
        <div className="section-title-wrap">
          <span className="sec-icon">📅</span>
          <div>
            <h3>Weekly Hydration Log</h3>
            <p>Review your recent daily intake and consistency.</p>
          </div>
          <div className="avg-metric-badge">
            Avg: <strong>{avgCups}</strong> glasses / day
          </div>
        </div>

        <div className="history-cards-grid">
          {history.map((record, index) => {
            const isCompleted = record.cups >= 8;
            const pct = Math.round((record.cups / 8) * 100);
            return (
              <div
                key={index}
                className={`history-pill-card ${isCompleted ? "goal-met" : ""}`}
              >
                <div className="history-card-top">
                  <span className="hist-day">{record.day}</span>
                  <span className="hist-pct">{pct}%</span>
                </div>
                <div className="hist-icon-wrap">
                  {isCompleted ? "🌟" : "💧"}
                </div>
                <div className="hist-data">
                  <strong>{record.cups}</strong>
                  <span className="hist-target">/ 8 cups</span>
                </div>
                <div className="hist-ml">{record.cups * 250} ml</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hydro-chart-container">
        <div className="chart-header-row">
          <div className="chart-title-left">
            <span className="sec-icon">📊</span>
            <div>
              <h3>Weekly Progress Analytics</h3>
              <p>Visual breakdown of daily intake vs 8-glass recommended benchmark</p>
            </div>
          </div>
          <div className="chart-legend">
            <span className="legend-indicator"></span>
            <span>Target Goal: 8 Glasses (2,000ml)</span>
          </div>
        </div>

        <div className="chart-stage">
          
          <div className="benchmark-line">
            <span className="benchmark-label">8 Glasses Goal</span>
          </div>

          <div className="chart-bars-wrap">
            {history.map((record, index) => {
              const heightPercent = Math.min(100, Math.round((record.cups / 8) * 100));
              const isGoal = record.cups >= 8;
              return (
                <div className="chart-column-item" key={index}>
                  <div className="column-top-val">{record.cups} 💧</div>
                  <div className="column-track">
                    <div
                      className={`column-bar-fill ${isGoal ? "perfect-bar" : ""}`}
                      style={{ height: `${heightPercent}%` }}
                    >
                      <div className="bar-glow"></div>
                    </div>
                  </div>
                  <span className="column-day-label">{record.day}</span>
                  <span className="column-ml-label">{record.cups * 250}ml</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HydrationChallenge;
