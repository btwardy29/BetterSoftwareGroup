import React, { FC, useState } from "react";

import {
  NavbarContainer,
  Navbar,
  NavbarDesktop,
  Link,
  NavbarMobile,
  OpenMobileMenu,
  MobileLinks,
  CloseMobileMenu,
  MobileLink,
} from "../../styles/Nav.styles";
import { useNavigate } from "react-router-dom";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("authToken");
    setIsOpen(false);
    navigate("/");
  };

  const togleMobileMenu = (e: React.SyntheticEvent<EventTarget>) => {
    setIsOpen(!isOpen);
  };

  const mobile = (
    <MobileLinks>
      {localStorage.getItem("isAuth") ? (
        <>
          <MobileLink to="/home" onClick={togleMobileMenu}>
            Home
          </MobileLink>
          <MobileLink to="/" onClick={togleMobileMenu}>
            Logout
          </MobileLink>
        </>
      ) : (
        <>
          <MobileLink to="/login" onClick={logout}>
            Login
          </MobileLink>
        </>
      )}
    </MobileLinks>
  );
  return (
    <NavbarContainer>
      <Navbar>
        <NavbarDesktop>
          {localStorage.getItem("isAuth") ? (
            <>
              <Link to="/home">Home</Link>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </NavbarDesktop>

        <NavbarMobile>
          {isOpen ? (
            <CloseMobileMenu onClick={togleMobileMenu} />
          ) : (
            <OpenMobileMenu onClick={togleMobileMenu} />
          )}
        </NavbarMobile>

        {isOpen ? mobile : null}
      </Navbar>
    </NavbarContainer>
  );
};

export default Nav;
