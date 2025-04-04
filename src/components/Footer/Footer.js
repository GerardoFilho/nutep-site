import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import useIsDesktop from "../../hooks/useIsDesktop";
import PoliticasPDF from "../../assets/doc/PoliticadePrivacidadeNUTEP_2024.pdf";
import * as S from "./Footer.style";

const Footer = () => {
  const isDesktop = useIsDesktop(768);
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoContainer>
          <S.StyledLogo />
          {!isDesktop && (
            <div>
              <S.ColumnTitle>Nutep</S.ColumnTitle>
              <S.TextParagraph>
                O NUTEP é uma instituição que presta assistência especializada a
                crianças e adolescentes na área do neurodesenvolvimento, sediada
                em Fortaleza, Ceará.
              </S.TextParagraph>
            </div>
          )}
        </S.LogoContainer>

        <div>
          {isDesktop && (
            <>
              <S.ColumnTitle>Nutep</S.ColumnTitle>
              <S.TextParagraph>
                O NUTEP é uma instituição que presta assistência especializada a
                crianças e adolescentes na área do neurodesenvolvimento, sediada
                em Fortaleza, Ceará.
              </S.TextParagraph>
            </>
          )}
          <S.SocialsWrapper>
            <S.SocialTitle>Redes Sociais</S.SocialTitle>
            <S.SocialLink
              href="https://www.instagram.com/nutepnarede"
              target="_blank"
            >
              <FaInstagram size={16} color="#33b97f" />
              @nutepnarede
            </S.SocialLink>
          </S.SocialsWrapper>
        </div>

        <div>
          <S.ColumnTitle>Links Rápidos</S.ColumnTitle>
          <S.LinksList>
            <S.LinkItem to="/">Home</S.LinkItem>
            <S.LinkItem to="/quem-somos">Sobre </S.LinkItem>
            <S.LinkItem to="/unidades">Unidades </S.LinkItem>
            <S.LinkItem to="/servicos">Serviços </S.LinkItem>
            <S.LinkItem to="/projetos">Projetos </S.LinkItem>
            <S.LinkItem to="/doacoes">Doações </S.LinkItem>
          </S.LinksList>
        </div>

        <div>
          <S.ColumnTitle>Formas de Contato</S.ColumnTitle>
          <S.ContactInfo>
            <strong>Email:</strong> doarnutep@nutep.org.br
            <br />
            <strong>Telefone:</strong> (85) 3223-4522
            <br />
            <strong>Endereço:</strong> Rua Papi Junior 1225, Rodolfo Teófilo |
            Fort/CE
          </S.ContactInfo>
          <a href={PoliticasPDF} download style={{ textDecoration: "none" }}>
            <S.PolicyButton>
              <FaDownload size={16} />
              Políticas de Privacidade
            </S.PolicyButton>
          </a>
        </div>
      </S.FooterContent>

      <S.FooterBottom>
        © Todos os direitos reservados ao Núcleo de Tratamento e Estimulação
        Precoce (Nutep)
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
