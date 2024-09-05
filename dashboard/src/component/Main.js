import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Main.css"; // Import the CSS file for styling

function Main() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  const items = [
    { name: "Home" },
    { name: "DDosDetection", path: "/ddos-detection" },
    { name: "DDosMitigation", path: "/ddos-mitigation" },
    { name: "DDosMonitoring", path: "/ddos-monitoring" },
    { name: "Fan-Control" },
    { name: "Game Sync" },
  ];

  return (
    <div className="main">
      <ul className="main-list">
        {items.map((item) => (
          <li key={item.name} className="main-item">
            {/* Use Link instead of <a> for client-side routing */}
            <Link
              to={item.path} // Set the path using the Link component
              className={`main-link ${
                activeItem === item.name ? "active" : ""
              }`}
              onClick={() => handleSetActive(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
