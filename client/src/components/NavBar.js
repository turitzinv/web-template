import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </div>
  );
};

export default NavBar;
