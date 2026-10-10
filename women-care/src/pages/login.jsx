import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleLogin = (e) => {
    if (e) e.preventDefault();

    const savedUser = localStorage.getItem("womenCareUser");

    if (!savedUser) {
      const username = email ? email.split("@")[0] : "Friend";
      const displayName = username.charAt(0).toUpperCase() + username.slice(1);
      const defaultUser = {
        name: displayName || "Friend",
        email: email || "care@womencare.org",
      };
      localStorage.setItem("womenCareUser", JSON.stringify(defaultUser));
    }

    localStorage.setItem("isLoggedIn", "true");
    setMessage("✓ Login successful! Redirecting to home page...");

    setTimeout(() => {
      navigate("/home");
    }, 900);
  };

  const handleQuickDemoLogin = () => {
    setEmail("sarah@example.com");
    setPassword("wellness2026");
    const demoUser = {
      name: "Sarah",
      email: "sarah@example.com",
    };
    localStorage.setItem("womenCareUser", JSON.stringify(demoUser));
    localStorage.setItem("isLoggedIn", "true");
    setMessage("✓ Instant Demo Access! Redirecting...");
    setTimeout(() => {
      navigate("/home");
    }, 700);
  };

  return (
    <div className="auth-page-wrapper">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors">Doctors Directory</Link>
          <Link to="/prescription">Prescription Simplifier</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login" className="active-nav-link">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name}
          </div>
        )}
      </nav>

      <div className="auth-content-container">
        <div className="auth-card">
          <div className="auth-badge-icon">🔐</div>

          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Access your health reminders, guides, and personal health dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label>Email or Username</label>
              <div className="input-with-icon">
                <span className="field-icon">✉️</span>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <div className="input-with-icon">
                <span className="field-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {message && (
              <div className="auth-message-box">
                {message}
              </div>
            )}

            <button type="submit" className="auth-primary-btn">
              Log In to Women Care
            </button>

            <button
              type="button"
              className="auth-demo-btn"
              onClick={handleQuickDemoLogin}
            >
              Demo Account Sign In
            </button>
          </form>

          <div className="auth-footer-nav">
            <p>
              Don't have an account?{" "}
              <Link to="/registration" className="auth-accent-link">
                Create one now →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
