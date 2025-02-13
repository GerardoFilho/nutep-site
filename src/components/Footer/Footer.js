import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoFooter } from "../../assets/icons/logo-footer.svg";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fff;
  color: #072d4b;
  border-top: 1px solid #eee;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
`;

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLogo = styled(LogoFooter)`
  width: 120px;
  height: auto;
  margin-bottom: 16px;
`;

const LogoSubtitle = styled.p`
  font-size: 14px;
  color: #48af66;
  margin-top: 8px;
`;

const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const TextParagraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const SocialsWrapper = styled.div`
  margin-top: 16px;
`;

const SocialTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #072d4b;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px;

  a {
    color: #072d4b;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const PolicyButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background-color: transparent;
  color: #48af66;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #48af66;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #48af66;
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #cff5d0;
  padding: 16px 20px;
  text-align: center;
  font-size: 14px;
  color: #48af66;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoColumn>
          <StyledLogo />
          <LogoSubtitle>
            Núcleo de Tratamento <br /> e Estimulação Precoce
          </LogoSubtitle>
        </LogoColumn>

        <div>
          <ColumnTitle>Nutep</ColumnTitle>
          <TextParagraph>
            O NUTEP é uma instituição que presta assistência especializada a
            crianças e adolescentes na área do neurodesenvolvimento, sediada em
            Fortaleza, Ceará.
          </TextParagraph>

          <SocialsWrapper>
            <SocialTitle>Redes Sociais</SocialTitle>
            <SocialLink
              href="https://www.instagram.com/nutepnarede"
              target="_blank"
            >
              <FaInstagram size={16} />
              @nutepnarede
            </SocialLink>
          </SocialsWrapper>
        </div>

        <div>
          <ColumnTitle>Links Rápidos</ColumnTitle>
          <LinksList>
            <LinkItem>
              <a href="#home">Home</a>
            </LinkItem>
            <LinkItem>
              <a href="#sobre">Sobre</a>
            </LinkItem>
            <LinkItem>
              <a href="#unidades">Unidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#materiais">Materiais</a>
            </LinkItem>
            <LinkItem>
              <a href="#contatos">Contatos</a>
            </LinkItem>
            <LinkItem>
              <a href="#doacoes">Doações</a>
            </LinkItem>
          </LinksList>
        </div>

        <div>
          <ColumnTitle>Formas de Contato</ColumnTitle>
          <ContactInfo>
            <strong>Email:</strong> exemplo@email.com
            <br />
            <strong>Telefone:</strong> (85) 3223-4522
            <br />
            <strong>Endereço:</strong> Rua Papi Junior 1225, Rodolfo Teófilo |
            Fort/CE
          </ContactInfo>

          <PolicyButton>
            <FaDownload size={16} />
            Políticas de Privacidade
          </PolicyButton>
        </div>
      </FooterContent>

      <FooterBottom>
        © Todos os direitos reservados ao Núcleo de Tratamento e Estimulação
        Precoce (Nutep)
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
