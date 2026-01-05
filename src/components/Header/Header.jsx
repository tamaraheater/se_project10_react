import "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarDefault from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const username = "Terrance Tegegne";
  const avatar = avatarDefault;

  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink to="/">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
        </NavLink>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__buttons-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-button"
        >
          + Add Clothes
        </button>
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-name">{username}</div>
        </NavLink>
      </div>
            {avatar ? (
              <img
                className="header__avatar"
                src={avatar || avatarDefault}
                alt="user avatar"
              />
            ) : (
              <span className="header__avatar sidebar__avatar_none">
                {username?.toUpperCase().char(0) || ""}
              </span>
            )}
    </header>
  );
}
export default Header;
