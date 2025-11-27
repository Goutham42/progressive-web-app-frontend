import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="about-page">
      <h1>About Our App</h1>
      <p>Welcome to WebNova Progressive Web App!! This app works offline and can be installed on your device.</p>

      <button onClick={toggleInfo}>
        {infoVisible ? "Hide Details" : "Show Details"}
      </button>

      {infoVisible && (
        <div className="details">
          <h2>Features:</h2>
          <ul>
            <li>Works offline</li>
            <li>Responsive design</li>
            <li>Fast and reliable</li>
            <li>Installable on mobile devices</li>
          </ul>
        </div>
      )}

      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}
