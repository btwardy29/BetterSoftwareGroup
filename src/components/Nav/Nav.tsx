import React, { FC, useState } from "react";
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

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, setAuth } = useStore();

  const logout = () => {
    setAuth(false);
    setIsOpen(false);
  };

  const togleMobileMenu = (e: React.SyntheticEvent<EventTarget>) => {
    setIsOpen(!isOpen);
  };

  const mobile = (
    <MobileLinks>
      {isAuth ? (
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
          {isAuth ? (
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
