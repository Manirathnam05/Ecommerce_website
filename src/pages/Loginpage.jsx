import React, { useState } from "react";
import "./css/Loginpage.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { signup, login } from "../config/Firebase";

const Loginpage = () => {
  const [curstate, setCurstate] = useState("Sign up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = (message, type) => {
    toast(message, {
      style: {
        backgroundColor: type === "success" ? "green" : "red",
        color: "white",
        border: "1px solid black",
      },
    });
  };

  const submithandler = async (event) => {
    event.preventDefault();

    if (curstate === "Sign up") {
      try {
        await signup(username, email, password);
        showToast("Registered successfully!", "success");
      } catch (error) {
        showToast(`Signup failed: ${error.message}`, "error");
      }
    } else if (curstate === "Login") {
      try {
        await login(email, password);
        showToast("Login successful!", "success");
      } catch (error) {
        showToast(`Login failed: ${error.message}`, "error");
      }
    }
  };

  return (
    <div className="loginpage">
      <form className="login-form" onSubmit={submithandler}>
        <h2>{curstate}</h2>
        {curstate === "Sign up" && (
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Enter your name"
            required
          />
        )}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email address"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        />
        <button type="submit">
          {curstate === "Sign up" ? "Create account" : "Login now"}
        </button>
        <ToastContainer />

        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {curstate === "Sign up" ? (
            <p className="toggle">
              Already have an account?{" "}
              <span onClick={() => setCurstate("Login")}>Login here</span>
            </p>
          ) : (
            <p className="toggle">
              Create an account?{" "}
              <span onClick={() => setCurstate("Sign up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
