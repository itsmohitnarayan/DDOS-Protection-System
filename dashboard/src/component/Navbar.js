import React from 'react';

function Navbar() {
  const gradientShapeStyle = {
    fontSize: '40px',
    minWidth: '280px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    border: '2px solid #fff',
    position: 'relative',
    overflow: 'visible', // Ensure the shadow is visible
    clipPath: 'polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%)',
    background: 'linear-gradient(-60deg, transparent 45%, black 45%)',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#27251F', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
      <div className="container-fluid">
        <div className="d-flex w-100 justify-content-between align-items-center">
          {/* Left Side: Brand Name or Logo */}
          <div className="d-flex align-items-center">
            <i className="fas fa-home me-2"></i>
            <span style={{ fontWeight: 'bold', color: '#fff' }}>PREDATOR</span>
          </div>

          {/* Centered Non-Clickable Box */}
          <div className="d-flex flex-grow-1 justify-content-center">
            <div className="p-3 border text-light" style={gradientShapeStyle}>
              PredatorSense
            </div>
          </div>

          {/* Right Side: Settings Icons */}
          <div className="d-flex align-items-center">
            <a href="#">
              <img src="/logo/mouse (1).png" alt="Mouse" style={{ width: '30px', height: '30px', marginRight: '10px', background: 'none' }} />
            </a>
            <a href="#">
              <img src="/logo/imac.png" alt="Computer" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="#">
              <img src="/logo/audio.png" alt="Amplitude" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="#">
              <img src="/logo/settings.png" alt="Setting" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="#">
              <img src="/logo/remove.png" alt="Underscore" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </a>
            <a href="#">
              <img src="/logo/cross.png" alt="Cross" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
