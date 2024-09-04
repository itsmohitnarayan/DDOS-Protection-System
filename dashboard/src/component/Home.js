import React, { useState } from 'react';

function Home() {
  const [activeItem, setActiveItem] = useState('Home'); // Default active item

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  const navItemStyle = {
    borderColor: 'aqua',
    borderWidth: '2px',
    boxShadow: '0 2px 4px rgba(0, 255, 255, 0.3)', // Reduced shadow
    backgroundColor: '#27251F',
    color: 'white',
    padding: '12px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight:'600',
  };

  return (
    <div className="d-flex flex-column p-3 mx-5" style={{ height: '100vh', width: '250px' }}>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Home' ? 'active' : ''}`}
            onClick={() => handleSetActive('Home')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Home' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Lighting' ? 'active' : ''}`}
            onClick={() => handleSetActive('Lighting')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Lighting' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Lighting
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Mode' ? 'active' : ''}`}
            onClick={() => handleSetActive('Mode')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Mode' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Mode
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Fan Control' ? 'active' : ''}`}
            onClick={() => handleSetActive('Fan Control')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Fan Control' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Fan Control
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Monitoring' ? 'active' : ''}`}
            onClick={() => handleSetActive('Monitoring')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Monitoring' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Monitoring
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'Game Sync' ? 'active' : ''}`}
            onClick={() => handleSetActive('Game Sync')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'Game Sync' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            Game Sync
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link border rounded p-3 ${activeItem === 'App Center' ? 'active' : ''}`}
            onClick={() => handleSetActive('App Center')}
                       style={{
              ... navItemStyle,
              backgroundColor: activeItem === 'App Center' ? '#00FFFF' : navItemStyle.backgroundColor,
            }}

          >
            App Center
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
