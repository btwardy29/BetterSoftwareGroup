import React, { FC } from "react";

import { Navbar, NavbarDesktop, Link } from "../../styles/Nav.styles";

const Nav = () => {
  return (
    <Navbar>
      <NavbarDesktop>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </NavbarDesktop>
    </Navbar>
  );
};

export default Nav;
