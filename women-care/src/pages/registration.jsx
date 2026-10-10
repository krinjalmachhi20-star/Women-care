import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./registration.css";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: ""
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("⚠️ Password must contain at least 6 characters.");
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      password: formData.password
    };

    localStorage.setItem("womenCareUser", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    setMessage("✓ Registration successful! Redirecting to home page...");

    setTimeout(() => {
      navigate("/home");
    }, 900);
  };

  return (
    <div className="registration-page-wrapper">
      
      <nav className="navbar">
        <h2>Women Care</h2>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors">Doctors Directory</Link>
          <Link to="/prescription">Prescription Simplifier</Link>
          <Link to="/registration" className="active-nav-link">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name}
          </div>
        )}
      </nav>

      <div className="registration-content-container">
        <div className="registration-card">
          <div className="registration-badge-icon">📋</div>

          <div className="registration-header">
            <h1>Create Your Account</h1>
            <p>Join Women Care to organize personal health reminders, medication schedules, and expert health guides.</p>
          </div>

          <form onSubmit={handleSubmit} className="reg-form">
            <div className="form-row-two">
              <div className="reg-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 26"
                  min="12"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="form-row-two">
              <div className="reg-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="reg-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>
            </div>

            <div className="form-row-two">
              <div className="reg-field">
                <label>Create Password</label>
                <div className="password-input-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min 6 characters"
                    required
                  />
                  <button
                    type="button"
                    className="reg-show-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="reg-field">
                <label>Confirm Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  required
                />
              </div>
            </div>

            {message && (
              <div className={`reg-message-box ${message.startsWith("✓") ? "success" : "error"}`}>
                {message}
              </div>
            )}

            <button type="submit" className="reg-primary-btn">
              Create My Free Account
            </button>
          </form>

          <div className="reg-footer-nav">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="reg-accent-link">
                Sign in here →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
