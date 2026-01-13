import {useEffect, useState} from "react";

import "./Profile.css";

import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import logo from "../../assets/logo.svg";
// import avatarDefault from "../../assets/avatar.svg"; >>>>>>able to use if needed

// import { NavLink } from "react-router-dom";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
 
  function MobileHeader() {
    const [dateStr, setDateStr] = useState('');
    const [location] = useState('');

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
    setDateStr(today);
  }, []);

export default function Profile({ clothingItems, onCardClick, handleAddClick }) {
  return (
    <section className="profile">
      <header className="mobile__header">
        <div className="mobile_header-logo-container">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
          <p className="mobile__header__date-location">
            {dateStr}, {location}
          </p>
        </div>        
        <div className="mobile__hamburger">
          <img src={hamburgerIcon} alt="Menu icon" />
        </div>
      </header>
      
      <Sidebar />

      <main className="profile__main">
        <div className="cards-header">
          <h2>Your Items</h2>
          <button onClick={handleAddClick}>+ Add new</button>
        </div>

        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </main>
    </section>
  );
}
