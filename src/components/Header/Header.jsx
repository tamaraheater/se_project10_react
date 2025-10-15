function Header() {
  return (
    <header className="header">
      <img src="" alt="" className="header__logo" />
      <p className="header__date-location">MONTH DATE, LOCATION</p>
      <button className="header__add-clothes-button">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Name:First Last</p>
        <img src="" alt="" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
