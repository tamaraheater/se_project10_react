import { NavLink } from "react-router-dom";
import { useContext } from "react";                     
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";   

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarDefault from "../../assets/avatar.svg";

function Header({ handleAddClick, weatherData, isLoggedIn }) {   // ← we'll pass isLoggedIn from App
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const username = currentUser?.name || "Terrance Tegegne";   // fallback
  const avatar = currentUser?.avatar || avatarDefault;

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

      <div className={`header__buttons-container ${isMenuOpen ? "header__buttons-container_visible" : ""}`}>
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button onClick={handleAddClick} type="button" className="header__add-clothes-button">
              + Add Clothes
            </button>

            <NavLink className="header__nav-link" to="/profile">
              <div className="header__user-name">{username}</div>
            </NavLink>

            <div>
              {avatar && avatar !== avatarDefault ? (
                <img className="header__avatar" src={avatar} alt="user avatar" />
              ) : (
                <span className="header__avatar sidebar__avatar_none">
                  {username?.[0]?.toUpperCase() || "?"}
                </span>
              )}
            </div>
          </>
        ) : (
          <button className="header__login-btn">Log in</button>
        )}
      </div>

      <button className="header__mobile-button" onClick={handleMenuClick}>
        Menu
      </button>
    </header>
  );
}

export default Header;