import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">WEBNOVA</h2>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/about">🌆 About</Link>
          </li>
          <li>
            <Link to="/dashboard">📊 Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">👤 My Profile</Link>
          </li>
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <div className="home-container">
        <h1>Welcome Mahathi👋</h1>
        <p>We Build and Innovate 🚀</p>
      </div>

      <div className="home-content">
        <div className="item">
          <Link to="/">
            <img src="./19005371.gif" alt="Dashboard" />
          </Link>
          <h3>Dashboard</h3>
        </div>

        <div className="item">
          <Link to="/profile">
            <img src="./profile.gif" alt="Profile" />
          </Link>
          <h3>Profile</h3>
        </div>

        <div className="item">
          <Link to="/documentation">
            <img src="./documentation.gif" alt="Documentation" />
          </Link>
          <h3>Documentation</h3>
        </div>
      </div>

      <footer>
        <h4>@2025 Copyrights</h4>
      </footer>
    </div>
  );
}
