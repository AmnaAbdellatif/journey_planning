import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>My App</h3>
        <button onClick={toggleMenu}>☰</button>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
