import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navlist">
      <li>
        <NavLink to="/home" end>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOGIN/SIGNUP</NavLink>
      </li>
      <li>
        <NavLink to="/creArt">CREATE ARTICLE</NavLink>
      </li>
      <li>
        <NavLink to="">PROFILE</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
