// src/components/Header.js
import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>My Shopping Site</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
