import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../App";
import Button from "../Components/Button";

import "../Styles/Navbar.css";

const Navbar = ({ url }) => {
  const { setAuthentication } = useContext(AuthContext);
  const hanldeLogout = () => {
    setAuthentication(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  return (
    <div className="navbar-container">
      <h1 className="navbar-logo">Gofa</h1>
      <ul className="navbar-list">
        <li>
          <NavLink
            exact
            activeClassName="navlink-selected"
            className="navbar-link"
            to={`${url}`}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navlink-selected"
            className="navbar-link"
            to={`${url}/Services`}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navlink-selected"
            className="navbar-link"
            to={`${url}/Contact`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-button">
        <Button
          size="btn-small"
          variant="btn-primary"
          onClick={hanldeLogout}
          label="Logout"
        ></Button>
      </div>
    </div>
  );
};

export default Navbar;
