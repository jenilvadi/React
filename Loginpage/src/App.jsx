import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameStyle, setUsernameStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Update style based on username input
    setUsernameStyle({
      backgroundColor: e.target.value ? "lightgreen" : "red",
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Update style based on password input
    setPasswordStyle({
      backgroundColor: e.target.value ? "lightgreen" : "red",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              style={usernameStyle} // Apply dynamic style
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={passwordStyle} // Apply dynamic style
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <br />
              <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
