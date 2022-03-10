import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #011627;
`;
export const NavbarDesktop = styled.div``;
export const Link = styled(NavLink)`
  margin-right: 20px;
  text-transform: uppercase;
  font-size: large;
  text-decoration: none;
  color: #fdfffc;
  &href: {
  }
`;
