import { useEffect, useState } from "react";
import "./calmBreathe.css";

const SESSION_DURATION = 60;
const CYCLE_DURATION = 12;

function getBreathingPhase(elapsed) {
  const position = elapsed % CYCLE_DURATION;

  if (position < 4) {
    return {
      name: "Breathe In",
      instruction: "Gently breathe in through your nose",
      duration: 4,
      className: "inhale",
    };
  }

  if (position < 6) {
    return {
      name: "Hold",
      instruction: "Pause comfortably. Don't force your breath",
      duration: 2,
      className: "hold",
    };
  }

  return {
    name: "Breathe Out",
    instruction: "Slowly breathe out at a comfortable pace",
    duration: 6,
    className: "exhale",
  };
}

function CalmBreathe() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const isComplete = elapsed >= SESSION_DURATION;
  const phase = getBreathingPhase(elapsed);
  const remaining = Math.max(0, SESSION_DURATION - elapsed);
  const completedCycles = Math.floor(elapsed / CYCLE_DURATION);
  const progress = (elapsed / SESSION_DURATION) * 100;

  useEffect(() => {
    if (!isRunning || isComplete) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setElapsed((previous) =>
        Math.min(previous + 1, SESSION_DURATION)
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [isRunning, elapsed, isComplete]);

  useEffect(() => {
    if (isComplete) {
      setIsRunning(false);
    }
  }, [isComplete]);

  function handleStart() {
    if (isComplete) {
      setElapsed(0);
    }

    setIsRunning(true);
  }

  function handleRestart() {
    setIsRunning(false);
    setElapsed(0);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  }

  let statusMessage = "Ready when you are";

  if (isComplete) {
    statusMessage = "Beautiful work! Session completed";
  } else if (isRunning) {
    statusMessage = "Follow the circle at your own pace";
  } else if (elapsed > 0) {
    statusMessage = "Your session is paused";
  }

  return (
    <section className="calm-game">
      <div className="calm-game-header">
        <span className="calm-eyebrow">
          ✨ YOUR LITTLE MOMENT OF PEACE
        </span>

        <h2>Calm & Breathe</h2>

        <p>
          Take a break from your busy day. Follow the gentle
          breathing guide and give yourself a quiet moment.
        </p>
      </div>

      <div className="calm-game-card">
        <div className="calm-stats">
          <div className="calm-stat">
            <span className="calm-stat-icon">⏱️</span>
            <div>
              <small>Time left</small>
              <strong>{formatTime(remaining)}</strong>
            </div>
          </div>

          <div className="calm-stat">
            <span className="calm-stat-icon">🌸</span>
            <div>
              <small>Cycles completed</small>
              <strong>{completedCycles} / 5</strong>
            </div>
          </div>
        </div>

        <div
          className={`breathing-area ${
            isRunning ? "is-running" : ""
          } ${isComplete ? "is-complete" : ""}`}
        >
          <div
            className={`breathing-circle ${
              isRunning && !isComplete ? phase.className : ""
            }`}
            aria-label={
              isComplete
                ? "Breathing session completed"
                : phase.name
            }
          >
            <div className="breathing-circle-inner">
              {isComplete ? (
                <>
                  <span className="breathing-symbol">🌷</span>
                  <strong>Well done!</strong>
                  <small>You did it</small>
                </>
              ) : (
                <>
                  <span className="breathing-symbol">
                    {phase.className === "inhale"
                      ? "🌸"
                      : phase.className === "hold"
                      ? "♡"
                      : "☁️"}
                  </span>

                  <strong>
                    {isRunning ? phase.name : "Find Your Calm"}
                  </strong>

                  <small>
                    {isRunning
                      ? `${phase.duration - (
                          elapsed %
                            CYCLE_DURATION <
                          4
                            ? elapsed % CYCLE_DURATION
                            : elapsed % CYCLE_DURATION < 6
                            ? (elapsed % CYCLE_DURATION) - 4
                            : (elapsed % CYCLE_DURATION) - 6
                        )} seconds`
                      : "One breath at a time"}
                  </small>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="breathing-guidance" aria-live="polite">
          <h3>
            {isComplete
              ? "You made time for yourself 💗"
              : isRunning
              ? phase.name
              : "Ready to unwind?"}
          </h3>

          <p>
            {isComplete
              ? "Take this peaceful moment with you into the rest of your day."
              : isRunning
              ? phase.instruction
              : "Sit comfortably, relax your shoulders, and breathe naturally."}
          </p>
        </div>

        <div
          className="calm-progress-track"
          role="progressbar"
          aria-label="Breathing session progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="calm-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="calm-progress-labels">
          <span>Session progress</span>
          <strong>{Math.round(progress)}%</strong>
        </div>

        <div className="calm-controls">
          {!isRunning && !isComplete && (
            <button
              type="button"
              className="calm-btn calm-btn-primary"
              onClick={handleStart}
            >
              {elapsed > 0 ? "▶ Resume Session" : "▶ Start Breathing"}
            </button>
          )}

          {isRunning && (
            <button
              type="button"
              className="calm-btn calm-btn-primary"
              onClick={() => setIsRunning(false)}
            >
              ⏸ Pause
            </button>
          )}

          {isComplete && (
            <button
              type="button"
              className="calm-btn calm-btn-primary"
              onClick={handleRestart}
            >
              ↻ Play Again
            </button>
          )}

          {!isComplete && (
            <button
              type="button"
              className="calm-btn calm-btn-secondary"
              onClick={handleRestart}
            >
              ↻ Restart
            </button>
          )}
        </div>

        <div className="calm-status">
          <span className={isRunning ? "status-dot active" : "status-dot"} />
          {statusMessage}
        </div>
      </div>

      <div className="calm-reminder">
        <span>💜</span>
        <p>
          <strong>Remember:</strong> Keep your breathing gentle and
          comfortable. You can pause or stop at any time. If you feel
          dizzy or uncomfortable, return to your normal breathing.
        </p>
      </div>
    </section>
  );
}

export default CalmBreathe;
