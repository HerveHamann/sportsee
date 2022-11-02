import React from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

/**
 * Header componant
 * @returns {JSX}
 */

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>Acceuil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Header;
