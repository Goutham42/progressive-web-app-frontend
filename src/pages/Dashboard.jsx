import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [showStats, setShowStats] = useState(true);
  const [notifications, setNotifications] = useState([
    "Welcome to WebNova PWA!",
    "Your profile is 80% complete",
    "New features added!"
  ]);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome back, Mahathi!! Your PWA is ready to use offline and on mobile.</p>

      <div className="dashboard-actions">
        <button onClick={toggleStats}>
          {showStats ? "Hide Status" : "Show Status"}
        </button>
        <Link to="/profile" className="dashboard-link">Go to Profile</Link>
        <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
      </div>

      {showStats && (
        <div className="stats-section">
          <h2>Quick Stats</h2>
          <ul>
            <li>Tasks Completed: 12</li>
            <li>Messages: 5</li>
            <li>Projects: 3</li>
          </ul>
        </div>
      )}

      <div className="notifications-section">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
