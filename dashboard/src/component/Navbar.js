import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">CloudSentinels</div>
      <div className="navbar-center">DDos for Cloud Protection</div>
      <div className="navbar-right">
        <img src="/logo/mouse (1).png" alt="mouse" className="navbar-icon" />
        <img src="/logo/imac.png" alt="imac" className="navbar-icon" />
        <img src="/logo/audio.png" alt="audio" className="navbar-icon" />
        <img src="/logo/settings.png" alt="Settings" className="navbar-icon" />
        <img src="/logo/remove.png" alt="remove" className="navbar-icon" />
        <img src="/logo/close.png" alt="close" className="navbar-icon" />
      </div>
    </div>
  );
}

export default Navbar;
