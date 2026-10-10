import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HydrationChallenge from "../components/hydrationChallenge";
import "./nutrition.css";

function Nutrition() {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);
  const [claimedXp, setClaimedXp] = useState({});
  const [activePlateGroup, setActivePlateGroup] = useState("all");

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const nutrients = [
    {
      id: "iron",
      icon: "🥬",
      name: "Iron",
      description: "Iron is important for making healthy blood.",
      tipIcon: "🍊",
      foods: "Leafy vegetables, beans, lentils and fortified foods."
    },
    {
      id: "calcium",
      icon: "🥛",
      subIcon: "🧀",
      name: "Calcium",
      description: "Calcium helps support healthy bones and teeth.",
      tipIcon: "🥛",
      foods: "Milk, curd, cheese and some fortified foods."
    },
    {
      id: "protein",
      icon: "🥚",
      subIcon: "🫘",
      name: "Protein",
      description: "Protein helps the body grow and repair tissues.",
      tipIcon: "🫘",
      foods: "Eggs, pulses, beans, dairy products, nuts and seeds."
    },
    {
      id: "vitaminc",
      icon: "🍊",
      name: "Vitamin C",
      description:
        "Vitamin C supports normal immune function and helps the body absorb iron from plant foods.",
      tipIcon: "🍊",
      foods: "Oranges, guava, tomatoes and other fruits and vegetables."
    }
  ];

  const handleClaimXp = (id) => {
    if (!claimedXp[id]) {
      setClaimedXp((prev) => ({ ...prev, [id]: true }));
      setScore((prev) => prev + 10);
    }
  };

  const plateGroups = [
    {
      id: "vegetables",
      name: "Vegetables",
      benefit: "give vitamins & fibre",
      icon: "🥦",
      colorClass: "badge-vegetables",
      details: "Aim to fill half your plate with colorful veggies like spinach, carrots, bell peppers, and broccoli."
    },
    {
      id: "fruits",
      name: "Fruits",
      benefit: "give vitamins",
      icon: "🍎",
      colorClass: "badge-fruits",
      details: "Fresh fruits like berries, apples, and citrus provide natural hydration, antioxidants, and digestive fibre."
    },
    {
      id: "grains",
      name: "Grains",
      benefit: "give energy",
      icon: "🌾",
      colorClass: "badge-grains",
      details: "Choose whole grains like brown rice, oats, whole wheat, and quinoa for sustained daytime stamina."
    },
    {
      id: "protein",
      name: "Protein",
      benefit: "builds & repairs",
      icon: "🫘",
      colorClass: "badge-protein",
      details: "Include quality plant and dairy proteins like lentils, paneer, tofu, beans, and eggs for muscle health."
    }
  ];

  const quizQuestions = [
    {
      question: "Which option represents a balanced eating pattern?",
      options: [
        { text: "🍟 Eating only packaged snacks", value: "a" },
        { text: "🥗 Eating a variety of nutritious foods", value: "b" },
        { text: "🥤 Having only one type of drink", value: "c" }
      ],
      answer: "b"
    },
    {
      question: "Which food is a good source of protein?",
      options: [
        { text: "🥚 Eggs & lentils", value: "a" },
        { text: "🍬 Candy", value: "b" },
        { text: "🥤 Soft drink", value: "c" }
      ],
      answer: "a"
    },
    {
      question: "Why is water important for our daily wellbeing?",
      options: [
        { text: "💧 It supports bodily functions and energy", value: "a" },
        { text: "🍔 It replaces all solid food", value: "b" },
        { text: "🥤 It provides no benefit", value: "c" }
      ],
      answer: "a"
    },
    {
      question: "Which food group can provide important vitamins and minerals?",
      options: [
        { text: "🍎 Fruits and vegetables", value: "a" },
        { text: "🍬 Candy only", value: "b" },
        { text: "🥤 Soft drinks only", value: "c" }
      ],
      answer: "a"
    }
  ];

  const checkAnswer = () => {
    if (selectedAnswer === "") {
      alert("Please select an answer first.");
      return;
    }
    const correctAnswer = quizQuestions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 10);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer("");
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setQuizFinished(false);
  };

  return (
    <div className="nutrition-page">
      
      <nav className="navbar">
        <Link to="/home">
          <h2>Women Care</h2>
        </Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
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

      <main className="nutrition-container">
        
        <section className="nutrition-hero-card">
          <div className="hero-content-col">
            <span className="hero-top-tag">
              🌸 WOMEN CARE
            </span>

            <h1 className="hero-main-title">
              Nutrition <br />
              Adventure 🍎
            </h1>

            <p className="hero-tagline">
              Learn about healthy nutrition through simple, colourful and interactive activities.
            </p>

            <div className="hero-interactive-badges">
              <span className="hero-pill-badge">
                <span className="pill-icon">⭐</span> Learn
              </span>
              <span className="hero-pill-badge">
                <span className="pill-icon">🥗</span> Explore
              </span>
              <span className="hero-pill-badge">
                <span className="pill-icon">🏆</span> Earn Points ({score} XP)
              </span>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-img-frame">
              <img
                src="/images/nutrition_hero.jpg"
                alt="Colorful Buddha Bowl with fresh nutritious foods"
                className="hero-bowl-img"
              />
              <span className="doodle-sparkle-top">✨</span>
              <span className="doodle-sparkle-bottom">♡</span>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <div className="journey-header">
            <h2>
              <span className="plant-icon">🌱</span> Start Your Nutrition Journey
            </h2>
            <p>
              Explore the important nutrients your body needs.
            </p>
          </div>

          <div className="nutrients-grid">
            {nutrients.map((item) => {
              const isClaimed = claimedXp[item.id];
              return (
                <div className="nutrient-card" key={item.id}>
                  
                  <div className="nutrient-icon-display">
                    <span className="main-emoji">{item.icon}</span>
                    {item.subIcon && (
                      <span className="sub-emoji">{item.subIcon}</span>
                    )}
                    <span className="sparkle-line left">\</span>
                    <span className="sparkle-line right">/</span>
                  </div>

                  <h3 className="nutrient-title">{item.name}</h3>
                  <p className="nutrient-desc">{item.description}</p>

                  <div className="nutrient-food-bubble">
                    <span className="bubble-icon">{item.tipIcon}</span>
                    <p className="bubble-text">{item.foods}</p>
                  </div>

                  <div className="nutrient-btn-row">
                    <button
                      className={`xp-button ${isClaimed ? "xp-claimed" : ""}`}
                      onClick={() => handleClaimXp(item.id)}
                    >
                      {isClaimed ? "✓ +10 XP Earned" : "+10 XP"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="healthy-plate-section">
          <div className="plate-header">
            <div className="plate-title-row">
              <span className="cutlery-icon">🍽️</span>
              <h2>Build Your Healthy Plate</h2>
            </div>
            <p className="plate-subtitle">
              Combine different food groups to get a balanced diet and stay healthy.
            </p>
          </div>

          <div className="plate-interactive-container">
            
            <div className="plate-pointers-col left-col">
              
              <div
                className={`plate-badge-item badge-vegetables ${
                  activePlateGroup === "vegetables" ? "active-badge" : ""
                }`}
                onClick={() =>
                  setActivePlateGroup(
                    activePlateGroup === "vegetables" ? "all" : "vegetables"
                  )
                }
              >
                <div className="badge-pill">
                  <span className="badge-icon">🥦</span>
                  <strong>Vegetables</strong>
                  <span className="badge-hint">(give vitamins & fibre)</span>
                </div>
                <span className="pointer-arrow right-arrow">→</span>
              </div>

              <div
                className={`plate-badge-item badge-fruits ${
                  activePlateGroup === "fruits" ? "active-badge" : ""
                }`}
                onClick={() =>
                  setActivePlateGroup(
                    activePlateGroup === "fruits" ? "all" : "fruits"
                  )
                }
              >
                <div className="badge-pill">
                  <span className="badge-icon">🍎</span>
                  <strong>Fruits</strong>
                  <span className="badge-hint">(give vitamins)</span>
                </div>
                <span className="pointer-arrow right-arrow">→</span>
              </div>
            </div>

            <div className="plate-center-display">
              <div className="plate-image-wrapper">
                <img
                  src="/images/healthy_plate.jpg"
                  alt="Balanced Healthy Plate divided into four food groups"
                  className="healthy-plate-img"
                />
              </div>
            </div>

            <div className="plate-pointers-col right-col">
              
              <div
                className={`plate-badge-item badge-grains ${
                  activePlateGroup === "grains" ? "active-badge" : ""
                }`}
                onClick={() =>
                  setActivePlateGroup(
                    activePlateGroup === "grains" ? "all" : "grains"
                  )
                }
              >
                <span className="pointer-arrow left-arrow">←</span>
                <div className="badge-pill">
                  <span className="badge-icon">🌾</span>
                  <strong>Grains</strong>
                  <span className="badge-hint">(give energy)</span>
                </div>
              </div>

              <div
                className={`plate-badge-item badge-protein ${
                  activePlateGroup === "protein" ? "active-badge" : ""
                }`}
                onClick={() =>
                  setActivePlateGroup(
                    activePlateGroup === "protein" ? "all" : "protein"
                  )
                }
              >
                <span className="pointer-arrow left-arrow">←</span>
                <div className="badge-pill">
                  <span className="badge-icon">🫘</span>
                  <strong>Protein</strong>
                  <span className="badge-hint">(builds & repairs)</span>
                </div>
              </div>
            </div>
          </div>

          {activePlateGroup !== "all" && (
            <div className="plate-group-detail-card">
              {(() => {
                const group = plateGroups.find((g) => g.id === activePlateGroup);
                if (!group) return null;
                return (
                  <p>
                    <strong>
                      {group.icon} {group.name}:
                    </strong>{" "}
                    {group.details}
                  </p>
                );
              })()}
            </div>
          )}
        </section>

        <section className="interactive-hydration-section">
          <HydrationChallenge />
        </section>

        <section className="quiz-game-section">
          <div className="quiz-header-banner">
            <span className="quiz-tag">KNOWLEDGE REVIEW</span>
            <h2>Clinical Nutrition Knowledge Review</h2>
            <p>Test key takeaways regarding daily nutrient intake and balanced meals.</p>
          </div>

          {!quizFinished ? (
            <div className="quiz-card-box">
              <p className="question-count-text">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>

              <h3 className="current-question-text">
                {quizQuestions[currentQuestion].question}
              </h3>

              <div className="quiz-options-list">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <label
                    key={option.value}
                    className={`quiz-option-label ${
                      selectedAnswer === option.value ? "selected-option" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={option.value}
                      checked={selectedAnswer === option.value}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                    />
                    <span>{option.text}</span>
                  </label>
                ))}
              </div>

              {!showResult ? (
                <button className="quiz-action-btn" onClick={checkAnswer}>
                  Check Answer 🚀
                </button>
              ) : (
                <div className="result-feedback-wrap">
                  <div className="feedback-message">
                    {selectedAnswer === quizQuestions[currentQuestion].answer ? (
                      <p className="feedback-correct">
                        🎉 Correct! You earned +10 XP.
                      </p>
                    ) : (
                      <p className="feedback-incorrect">
                        💡 Not quite! The correct answer is:{" "}
                        <strong>
                          {
                            quizQuestions[currentQuestion].options.find(
                              (opt) =>
                                opt.value === quizQuestions[currentQuestion].answer
                            )?.text
                          }
                        </strong>
                      </p>
                    )}
                  </div>

                  <button className="quiz-action-btn" onClick={nextQuestion}>
                    {currentQuestion === quizQuestions.length - 1
                      ? "Finish Quiz 🏆"
                      : "Next Question →"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="quiz-card-box quiz-finished-card">
              <h2>🎉 Quiz Completed!</h2>
              <p>You completed all {quizQuestions.length} questions.</p>
              <div className="total-score-badge">
                🏆 Total Score: {score} XP
              </div>
              <button className="quiz-action-btn" onClick={resetQuiz}>
                Play Again 🔄
              </button>
            </div>
          )}
        </section>

        <section className="score-summary-bar">
          <div className="trophy-icon">🏆</div>
          <div className="score-text-wrap">
            <h3>Your Nutrition Adventure Score</h3>
            <p>Keep exploring and interacting with food groups to earn badges!</p>
          </div>
          <div className="score-counter-pill">{score} XP</div>
        </section>
      </main>

      <footer className="nutrition-footer">
        <p>Women Care © 2026. Dedicated to women's healthcare and awareness.</p>
      </footer>
    </div>
  );
}

export default Nutrition;
