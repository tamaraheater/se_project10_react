import "./Header.css";
import logo from "../../src/assets/logo.svg";
import avatar from "../../src/assets/ellipse-18.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <p className="header__date-location">MONTH DATE, LOCATION</p>
      <button className="header__add-clothes-button">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
