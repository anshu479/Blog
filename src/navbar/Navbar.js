import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Navbar.css";

const Navbar = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="mainHead">
        <h1>Blogger</h1>
      </div>
      <ul className="navlist">
        <li>
          <NavLink to="/home" end>
            HOME
          </NavLink>
        </li>
        {!auth.isLoggedIn && (
          <li>
            <NavLink to="/auth">LOGIN</NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/home" onClick={auth.logout}>
              LOGOUT
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/creArt">CREATE ARTICLE</NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/profile">PROFILE</NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navbar;
