import React, { FC, useState, useEffect } from "react";
import { useStore } from "../../store";
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
import { useNavigate } from "react-router-dom";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
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
    <>
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
      </Navbar>
      {isOpen ? mobile : null}
    </>
  );
};

export default Nav;
