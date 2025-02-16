import React, { useState } from "react";
import { ReactComponent as LogoNutep } from "../../assets/icons/logo-nutep.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import * as S from "./Header.style";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo>
          <a href="/">
            <LogoNutep />
          </a>
        </S.Logo>

        <S.HamburgerButton onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </S.HamburgerButton>

        <S.Overlay menuOpen={menuOpen} onClick={handleOverlayClick} />

        <S.Nav className={menuOpen ? "open" : ""}>
          <S.NavList>
            <S.NavItem onClick={handleLinkClick}>Home</S.NavItem>
            <S.NavItemActive onClick={handleLinkClick}>
              Quem Somos
            </S.NavItemActive>

            <S.NavItem as={Link} to={`/unidades`} onClick={handleLinkClick}>
              Unidades
            </S.NavItem>

            <S.NavItem onClick={handleLinkClick}>Projetos</S.NavItem>
            <S.NavItem as={Link} to={`/news`} onClick={handleLinkClick}>
              Notícias
            </S.NavItem>
            <S.NavItem onClick={handleLinkClick}>
              <S.DonateButton>Doações</S.DonateButton>
            </S.NavItem>
          </S.NavList>
        </S.Nav>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
