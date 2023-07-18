import { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/deer.svg";
import { Link } from "react-router-dom";

import "./Header.scss";
// eslint-disable-next-line react/prop-types
const Header = ({ toggleDrawer }) => {
  const state = useSelector((state) => state.handleCart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    
    <header className="header px-[18px] md:px-[40px]">
      <div className="header__menu w-[10px] md:w-1/5">
        <button className="header__menu-button" onClick={toggleDrawer}>
          <FaBars className="header__menu-icon" />
        </button>
      </div>
      {/* <div className="header__logo"> */}
      <Link className="header__logo tracking-tight md:tracking-[3px] w-[45px] md:w-4/5" to="/">
        <h1 className="header__logo-text">Viva</h1>
        <img src={logo} alt="Logo" className="header__logo-image" />
        <h1 className="header__logo-text">Vintage</h1>
      </Link>
      {/* </div> */}
      <div className="header__links">
        <Link to="/" className="header__links-link hidden md:block">
          Home
        </Link>
        <Link
          to="/cart"
          className="header__links-link"
          style={{ display: "flex" }}
        >
          <FaShoppingCart className="header__link-icon" size={26} />
          <span className="absolute top-9 right-16 md:right-[86px] rounded-full bg-white w-[20px] items-center place-content-center flex text-sm font-bold">{state.totalQuantity}</span>
        </Link>

        {/* Icono de avatar de usuario */}
        <div className="avatar cursor-pointer" onClick={toggleDropdown}>
          <FaUserCircle id="avatar-icon" size={26} />
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="header__user-dropdown">
            <Link to="/sign-in" className="header__user-option" onClick={toggleDropdown}>
              Log in
            </Link>
            <Link to="/register" className="header__user-option" onClick={toggleDropdown}>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
