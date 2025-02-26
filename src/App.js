import React, { useState } from "react";
import validator from "validator";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const validate = (value) => {
    setPassword(value); // Updates password state

    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  return (
    <div style={{ boxSizing: "border-box", margin: "50px" }}>
      <h2 style={{ textAlign: "center", color: "green", marginBottom: "50px" }}>
        Checking Password Strength in ReactJS
      </h2>
      <form
        style={{ width: "350px", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <label>Enter Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Enter Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => validate(e.target.value)}
          required
        />

        {errorMessage && (
          <span
            style={{
              fontWeight: "bold",
              color: errorMessage === "Strong Password" ? "green" : "red",
              fontSize: "10px",
            }}
          >
            {errorMessage}
          </span>
        )}

        <button
          style={{
            cursor: "pointer",
            margin: "10px 0px",
            width: "100%",
            padding: "8px",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "3px",
            fontWeight: "bold",
            fontSize: "13px",
            color: "white",
            textTransform: "uppercase",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
