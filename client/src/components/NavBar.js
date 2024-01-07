import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
    </div>
  );
};

export default NavBar;
