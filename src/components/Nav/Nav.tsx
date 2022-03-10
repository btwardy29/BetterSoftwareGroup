import React, { FC, useState } from "react";

import {
  Navbar,
  NavbarDesktop,
  Link,
  NavbarMobile,
  OpenMobileMenu,
  MobileLinks,
  CloseMobileMenu,
  MobileLink,
} from "../../styles/Nav.styles";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togleMobileMenu = (e: React.SyntheticEvent<EventTarget>) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const mobile = (
    <MobileLinks>
      <MobileLink to="/home" onClick={togleMobileMenu}>
        Home
      </MobileLink>
      <MobileLink to="/login" onClick={togleMobileMenu}>
        Login
      </MobileLink>
    </MobileLinks>
  );
  return (
    <>
      <Navbar>
        <NavbarDesktop>
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </NavbarDesktop>
        <NavbarMobile>
          {isOpen ? (
            <CloseMobileMenu onClick={togleMobileMenu} />
          ) : (
            <OpenMobileMenu onClick={togleMobileMenu} />
          )}
        </NavbarMobile>
      </Navbar>
      {isOpen ? mobile : null}
    </>
  );
};

export default Nav;
