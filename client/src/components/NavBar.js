import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <NavLink id="navlink-home" to="/">Home</NavLink>
      <NavLink id="navlink-inventory" to="/inventory">Inventory</NavLink>
    </div>
  );
};

export default NavBar;
