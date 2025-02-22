import styled from "styled-components";

const colorDark = "#072D4B";
const colorGreen = "#48AF66";
const colorGreenLight = "#CFF5D0";
const colorWhite = "#FFFFFF";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${colorWhite};
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const HeaderContent = styled.div`
  height: 150px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg {
    width: 205px;
    height: 90px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${colorGreen};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  display: none;

  ${({ menuOpen }) =>
    menuOpen &&
    `
      display: block;
      position: fixed;
      top: 0; 
      left: 0;
      width: 100vw; 
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      z-index: 10;
    `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 220px;
    height: 100%;
    background-color: ${colorWhite};
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 80px 20px;
    transform: translateX(100%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out;
    z-index: 11;

    &.open {
      transform: translateX(0);
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: ${colorDark};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const NavItemActive = styled(NavItem)`
  background-color: ${colorGreenLight};
  padding: 8px 16px;
  border-radius: 24px;
  font-weight: 600;
`;

export const DonateButton = styled.button`
  background-color: ${colorGreen};
  border: none;
  outline: none;
  color: ${colorWhite};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
