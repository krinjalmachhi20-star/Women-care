import "./nutrition.css";
import { useState } from "react";
import HydrationChallenge from "../components/hydrationChallenge";

function Nutrition() {

  /* =========================
     QUIZ STATE
  ========================= */

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);


  /* =========================
     NUTRIENTS
  ========================= */

  const nutrients = [
    {
      icon: "🥬",
      name: "Iron",
      description:
        "Iron is important for making healthy blood.",
      foods:
        "Leafy vegetables, beans, lentils and fortified foods."
    },

    {
      icon: "🥛",
      name: "Calcium",
      description:
        "Calcium helps support healthy bones and teeth.",
      foods:
        "Milk, curd, cheese and some fortified foods."
    },

    {
      icon: "🥚",
      name: "Protein",
      description:
        "Protein helps the body grow and repair tissues.",
      foods:
        "Eggs, pulses, beans, dairy products, nuts and seeds."
    },

    {
      icon: "🍊",
      name: "Vitamin C",
      description:
        "Vitamin C supports normal immune function and helps the body absorb iron from plant foods.",
      foods:
        "Oranges, guava, tomatoes and other fruits and vegetables."
    }
  ];


  /* =========================
     FOOD CATEGORIES
  ========================= */

  const foodCategories = [
    {
      icon: "🍎",
      title: "Fruits",
      text:
        "Fruits provide vitamins, minerals and fibre."
    },

    {
      icon: "🥦",
      title: "Vegetables",
      text:
        "Vegetables provide many important nutrients and fibre."
    },

    {
      icon: "🌾",
      title: "Whole Grains",
      text:
        "Whole grains can provide carbohydrates, fibre and other nutrients."
    },

    {
      icon: "🥜",
      title: "Nuts & Seeds",
      text:
        "Nuts and seeds provide protein, healthy fats and other nutrients."
    }
  ];


  /* =========================
     QUIZ QUESTIONS
  ========================= */

  const quizQuestions = [

    {
      question:
        "Which option represents a balanced eating pattern?",

      options: [
        {
          text: "🍟 Eating only packaged snacks",
          value: "a"
        },
        {
          text: "🥗 Eating a variety of nutritious foods",
          value: "b"
        },
        {
          text: "🥤 Having only one type of drink",
          value: "c"
        }
      ],

      answer: "b"
    },


    {
      question:
        "Which food is a good source of protein?",

      options: [
        {
          text: "🥚 Eggs",
          value: "a"
        },
        {
          text: "🍬 Candy",
          value: "b"
        },
        {
          text: "🥤 Soft drink",
          value: "c"
        }
      ],

      answer: "a"
    },


    {
      question:
        "Which nutrient helps support healthy bones and teeth?",

      options: [
        {
          text: "🍭 Sugar",
          value: "a"
        },
        {
          text: "🥛 Calcium",
          value: "b"
        },
        {
          text: "🧂 Salt",
          value: "c"
        }
      ],

      answer: "b"
    },


    {
      question:
        "Which food is a good source of iron?",

      options: [
        {
          text: "🥬 Leafy vegetables",
          value: "a"
        },
        {
          text: "🍭 Candy",
          value: "b"
        },
        {
          text: "🥤 Soda",
          value: "c"
        }
      ],

      answer: "a"
    },


    {
      question:
        "Which vitamin helps the body absorb iron from plant foods?",

      options: [
        {
          text: "🍊 Vitamin C",
          value: "a"
        },
        {
          text: "🧈 Vitamin D",
          value: "b"
        },
        {
          text: "🥛 Vitamin B12",
          value: "c"
        }
      ],

      answer: "a"
    },


    {
      question:
        "Which food is a good source of fibre?",

      options: [
        {
          text: "🍎 Fruits and vegetables",
          value: "a"
        },
        {
          text: "🍬 Candy",
          value: "b"
        },
        {
          text: "🥤 Soft drinks",
          value: "c"
        }
      ],

      answer: "a"
    },


    {
      question:
        "Why is drinking water important?",

      options: [
        {
          text: "💧 It supports normal body functions",
          value: "a"
        },
        {
          text: "🍔 It replaces all food",
          value: "b"
        },
        {
          text: "🥤 It provides no benefit",
          value: "c"
        }
      ],

      answer: "a"
    },


    {
      question:
        "Which food group can provide important vitamins and minerals?",

      options: [
        {
          text: "🍎 Fruits and vegetables",
          value: "a"
        },
        {
          text: "🍬 Candy only",
          value: "b"
        },
        {
          text: "🥤 Soft drinks only",
          value: "c"
        }
      ],

      answer: "a"
    }

  ];


  /* =========================
     CHECK ANSWER
  ========================= */

  const checkAnswer = () => {

    if (selectedAnswer === "") {
      alert("Please select an answer.");
      return;
    }

    const correctAnswer =
      quizQuestions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {

      setScore((previousScore) => previousScore + 10);

    }

    setShowResult(true);
  };


  /* =========================
     NEXT QUESTION
  ========================= */

  const nextQuestion = () => {

    if (currentQuestion < quizQuestions.length - 1) {

      setCurrentQuestion(
        (previousQuestion) => previousQuestion + 1
      );

      setSelectedAnswer("");
      setShowResult(false);

    } else {

      setQuizFinished(true);

    }
  };


  return (

    <div className="nutrition-page">


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="nutrition-hero">

        <div className="hero-text">

          <span className="small-title">
            🌸 WOMEN CARE
          </span>

          <h1>
            Nutrition
            <span> Adventure 🍎</span>
          </h1>

          <p>
            Learn about healthy nutrition through simple,
            colourful and interactive activities.
          </p>

          <div className="hero-badges">

            <span className="sp">⭐ Learn</span>
            <span className="sp">🥗 Explore</span>
            <span className="sp">🏆 Earn Points</span>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="Healthy nutritious food"
          />

        </div>

      </section>



      {/* =========================
          NUTRITION JOURNEY
      ========================= */}

      <section className="journey">

        <h2>
          🌱 Start Your Nutrition Journey
        </h2>

        <p className="section-intro">
          Explore the important nutrients your body needs.
        </p>


        <div className="nutrient-grid">

          {nutrients.map((nutrient, index) => (

            <div
              className="nutrient-card"
              key={index}
            >

              <div className="nutrient-icon">
                {nutrient.icon}
              </div>

              <h3>
                {nutrient.name}
              </h3>

              <p>
                {nutrient.description}
              </p>

              <div className="food-tip">
                🍽️ {nutrient.foods}
              </div>

              <span className="learn-badge">
                +10 XP
              </span>

            </div>

          ))}

        </div>

      </section>



      {/* =========================
          FOOD CATEGORIES
      ========================= */}

      <section className="food-section">

        <h2>
          🍽️ Build Your Healthy Plate
        </h2>

        <p className="section-intro">
          Explore different food groups.
        </p>


        <div className="food-grid">

          {foodCategories.map((food, index) => (

            <div
              className="food-card"
              key={index}
            >

              <div className="food-icon">
                {food.icon}
              </div>

              <h3>
                {food.title}
              </h3>

              <p>
                {food.text}
              </p>

              <button>
                Explore →
              </button>

            </div>

          ))}

        </div>

      </section>



      {/* =========================
          HYDRATION
      ========================= */}

      <section className="water-section">

        <div className="water-icon">
          💧
        </div>


        <div>

          <h2>
            Hydration Challenge
          </h2>

          <p>
            Water is important for normal body functions.
            Remember to drink fluids regularly throughout
            the day.
          </p>

          <HydrationChallenge />

        </div>


        <div className="water-score">
          💧 💧 💧 💧 💧
        </div>

      </section>



      {/* =========================
          QUIZ
      ========================= */}

      <section className="quiz-section">

        <div className="quiz-header">

          <span>
            🎮 MINI GAME
          </span>

          <h2>
            Nutrition Challenge
          </h2>

          <p>
            Test what you learned!
          </p>

        </div>


        {!quizFinished ? (

          <div className="quiz-card">


            {/* QUESTION NUMBER */}

            <p className="question-number">

              Question {currentQuestion + 1}
              {" "}of{" "}
              {quizQuestions.length}

            </p>


            {/* QUESTION */}

            <h3>

              {
                quizQuestions[currentQuestion].question
              }

            </h3>


            {/* OPTIONS */}

            <div className="quiz-options">

              {
                quizQuestions[currentQuestion].options.map(
                  (option) => (

                    <label
                      key={option.value}
                    >

                      <input
                        type="radio"
                        name="answer"
                        value={option.value}
                        checked={
                          selectedAnswer === option.value
                        }
                        onChange={(e) =>
                          setSelectedAnswer(
                            e.target.value
                          )
                        }
                      />

                      {option.text}

                    </label>

                  )
                )
              }

            </div>


            {/* CHECK ANSWER */}

            {!showResult ? (

              <button
                className="quiz-button"
                onClick={checkAnswer}
              >
                Check Answer 🚀
              </button>

            ) : (

              <>

                {/* RESULT */}

                <div className="quiz-result">

                  {
                    selectedAnswer ===
                    quizQuestions[currentQuestion].answer
                  ? (

                    <>
                      🎉 Correct!
                      <br />
                      You earned +10 XP.
                    </>

                  ) : (

                    <>
                      💡 Not quite!
                      <br />

                      The correct answer is:

                      <br />

                      <strong>

                        {
                          quizQuestions[
                            currentQuestion
                          ].options.find(
                            (option) =>
                              option.value ===
                              quizQuestions[
                                currentQuestion
                              ].answer
                          )?.text
                        }

                      </strong>

                    </>

                  )}

                </div>


                {/* NEXT BUTTON */}

                <button
                  className="quiz-button"
                  onClick={nextQuestion}
                >

                  {
                    currentQuestion ===
                    quizQuestions.length - 1

                    ? "Finish Quiz 🏆"

                    : "Next Question →"
                  }

                </button>

              </>

            )}

          </div>


        ) : (


          /* =========================
             FINAL QUIZ RESULT
          ========================= */

          <div className="quiz-card">

            <h2>
              🎉 Quiz Completed!
            </h2>

            <p>
              You completed all{" "}
              {quizQuestions.length} questions.
            </p>

            <div className="final-score">
              🏆 Your Score: {score} XP
            </div>

          </div>

        )}

      </section>



      {/* =========================
          SCORE
      ========================= */}

      <section className="achievement">

        <div className="trophy">
          🏆
        </div>

        <h2>
          Your Nutrition Score
        </h2>

        <div className="score">
          {score} XP
        </div>

        <p>
          Keep exploring to learn more!
        </p>

      </section>


    </div>

  );
}

export default Nutrition;