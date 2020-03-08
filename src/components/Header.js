import React from "react";
import Weather from "./Weather";
import CurrentDay from "./CurrentDay";
import "/src/styles/styles.css";

function Header() {
  return (
    <div className="Header">
      <CurrentDay />
      <Weather />
    </div>
  );
}

export default Header;
