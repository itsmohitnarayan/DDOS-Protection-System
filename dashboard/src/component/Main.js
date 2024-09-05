import React, { useState } from "react";
import "./Main.css"; // Import the CSS file for styling

function Main() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  const items = [
    "Home",
    "DDosDetection",
    "DDosMitigation",
    "Fan Control",
    "DDosMonitoring",
    "Game Sync",
    "App Center",
  ];

  return (
    <div className="main">
      <ul className="main-list">
        {items.map((item) => (
          <li key={item} className="main-item">
            <a
              href="#"
              className={`main-link ${activeItem === item ? "active" : ""}`}
              onClick={() => handleSetActive(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
