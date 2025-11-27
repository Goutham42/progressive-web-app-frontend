
import { useState } from "react";
import "../styles/login.css";

export default function Login({ onLogin }) {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
  const u = username.toLowerCase();
  const p = password.toLowerCase();

  if (u === "mahathi".toLowerCase() && p === "1234".toLowerCase()) {
    onLogin();
  } else {
    setError("Invalid username or password 🙃");
  }
};

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

//Login Page..