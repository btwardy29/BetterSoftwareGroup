import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export const Navbar = styled.nav`
  width: 100vw;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #011627;
`;
export const NavbarDesktop = styled.div`
  @media (max-width: 860px) {
    display: none;
  }
`;
export const Link = styled(NavLink)`
  margin-right: 20px;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fdfffc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #2ec4b6;
  }
`;

export const NavbarMobile = styled.div`
  @media (min-width: 860px) {
    display: none;
  }
`;

export const OpenMobileMenu = styled(HiOutlineMenu)`
  height: 1.3rem;
  width: 1.3rem;
  margin-right: 30px;
  background-color: none;
  border: none;
  color: #fdfffc;
  cursor: pointer;
`;

export const CloseMobileMenu = styled(IoMdClose)`
  height: 1.3rem;
  width: 1.3rem;
  margin-right: 30px;
  background-color: none;
  border: none;
  color: #fdfffc;
  cursor: pointer;
`;

export const MobileLinks = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #011627ad;
`;

export const MobileLink = styled(NavLink)`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fdfffc;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #2ec4b6;
  }
`;
