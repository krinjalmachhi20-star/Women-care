
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser = localStorage.getItem("womenCareUser");


    // Check if user has registered
    if (!savedUser) {

      setMessage("No account found. Please register first.");

      return;
    }


    const user = JSON.parse(savedUser);


    // Check email and password
    if (
      email === user.email &&
      password === user.password
    ) {

      localStorage.setItem("isLoggedIn", "true");

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {

      setMessage("Invalid email or password.");

    }

  };


  return (

    <div className="login-page">

      <div className="login-card">

        <h1>
          🌸 Women Care
        </h1>

        <h2>
          Login
        </h2>


        <form onSubmit={handleLogin}>

          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />


          <button type="submit">
            Login
          </button>

        </form>


        {message && (
          <p>
            {message}
          </p>
        )}


        <p>

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/registration")}
            style={{ cursor: "pointer" }}
          >
            Register
          </span>

        </p>

      </div>

    </div>

  );

}


export default Login;

