import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
