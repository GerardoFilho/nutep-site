import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoNutep } from "../../assets/icons/logo-nutep.svg";
import { Link } from "react-router-dom";

const colorDark = "#072D4B";
const colorGreen = "#48AF66";
const colorGreenLight = "#CFF5D0";
const colorWhite = "#FFFFFF";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${colorWhite};
  border-bottom: 1px solid #ddd;
`;

const HeaderContent = styled.div`
  height: 150px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  svg: {
    width: 205px;
    height: 90px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  font-size: 16px;
  color: ${colorDark};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const NavItemActive = styled(NavItem)`
  background-color: ${colorGreenLight};
  padding: 8px 16px;
  border-radius: 24px;
  font-weight: 600;
`;

const DonateButton = styled.button`
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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <a href="/">
            <LogoNutep />
          </a>
        </Logo>

        <Nav>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItemActive>Quem Somos</NavItemActive>

            <NavItem as={Link} to={`/unidades`}>
              Unidades
            </NavItem>

            <NavItem>Projetos</NavItem>
            <NavItem as={Link} to={`/news`}>
              Notícias
            </NavItem>
          </NavList>
          <DonateButton>Doações</DonateButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
