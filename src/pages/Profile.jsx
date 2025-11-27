import "../styles/profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      
      <div className="profile-header">
        <img
          src="./avatar.gif"   
          alt="Profile"
          className="profile-photo"
        />
        <h2 className="profile-name">Mahathi</h2>
        <p className="profile-email">mahathi2005@gmail.com</p>
      </div>

      <hr />

      <div className="profile-section">
        <h3>Personal Details</h3>
        <ul>
          <li>📱 <b>Phone:</b> 6382379821</li>
          <li>🧑‍💻 <b>Username:</b> Mahathi</li>
          <li>📅 <b>Joined:</b> Nov 2025</li>
        </ul>
      </div>

      <hr />

      <div className="profile-section">
        <h3>Settings</h3>
        <ul>
          <li>🌙 Dark Mode: ON</li>
          <li>🔔 Notifications: Enabled</li>
        </ul>
      </div>

      <hr />

      <div className="profile-actions">
        <button className="btn">Edit Profile</button>
        <button className="btn">Change Password</button>
        <button className="btn logout">Logout</button>
      </div>

    </div>
  );
}
