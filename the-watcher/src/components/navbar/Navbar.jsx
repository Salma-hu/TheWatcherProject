import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." />
      <div className="navbar-icons">
        <span>🔔</span>
        <span>⚙️</span>
        <span>👤</span>
      </div>
    </div>
  );
};

export default Navbar;
