
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
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
// ================= HOME PAGE =================

function Home() {

  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {

    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }

  }, []);


  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2>Women Care</h2>

        <div className="nav-links">

           <Link to="/">Home</Link>
           <Link to="/health_Info"> Health Information</Link>
           <Link to="/reminder">Reminders</Link>
           <Link to="/doctors">Doctors Directory</Link>
           <Link to="/prescription">Prescription Simplifier </Link>
           <Link to="/registration">Register </Link>
           <Link to="/login">Login</Link>
        </div>


        {/* Welcome message */}

        {user && (
          <div className="welcome-user">
            Welcome, {user.name} 🌸
          </div>
        )}

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-text">

          <h1>
            Women Care & Health Awareness
          </h1>
          <p>
            Simple, reliable and accessible health
            information for women.
          </p>

          <Link to="/health_Info">
            <button>
              Explore Health Information
            </button>
          </Link>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <h2>
          How We Can Help
        </h2>


        <div className="feature-container">


          {/* Health Information */}

          <div className="feature-card">

            <h3>
              Health Information
            </h3>

            <p>
              Learn about important women's health
              topics in simple language.
            </p>

          </div>


          {/* Health Reminders */}

          <div className="feature-card">

            <h3>
              Health Reminders
            </h3>

            <p>
              Keep track of important health-related
              reminders.
            </p>

          </div>


          {/* Health Services */}

          <div className="feature-card">

            <h3>
              Health Services
            </h3>

            <p>
              Find useful information about available
              health services and resources.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          Women Care © 2026
        </p>

      </footer>

    </div>
  );
}



// ================= MAIN APP =================

function App() {

  return (

    <BrowserRouter>

      <Routes>

 <Route path="/"  element={<Home />}/>

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
