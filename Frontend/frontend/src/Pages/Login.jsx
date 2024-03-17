import React, { useState } from "react";
import "../Styles/Login.modules.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "Login Successful") {
          alert(res.msg);
          navigate("/");
        }
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        <h1>Login </h1>

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="email-input"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="password-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </>
  );
};

export { Login };
