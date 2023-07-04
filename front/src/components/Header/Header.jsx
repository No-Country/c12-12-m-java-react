import { useState } from "react";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/deer.svg";

import "./Header.scss";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };
  return (
    <header className="header">
      <div className="header__menu">
      <button className="header__menu-button" onClick={() => console.log("open")}>
        <FaBars className="header__menu-icon" />
        </button>
      </div>
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-image" />
        <h1 className="header__logo-text">VivaVintage</h1>
      </div>
      <div className="header__links">
        <a href="/" className="header__links-link">
          Home
        </a>
        <a href="/cart" className="header__links-link">
          <FaShoppingCart className="header__link-icon" size={24}/>
        </a>

        {/* Icono de avatar de usuario */}
        <div className="avatar" onClick={toggleDropdown}>
          <FaUserCircle size={24} />
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="header__user-dropdown">
            <a href="/" className="header__user-option">
              Log in
            </a>
            <a href="/sign-up" className="header__user-option">
              Sign up
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
