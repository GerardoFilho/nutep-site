// src/pages/DoacoesPage.js
import React from "react";
import styled from "styled-components";

// Exemplos de imagens (substitua pelas reais)
import DoarImg from "../assets/images/Assistencia-1.png"; // Imagem da mulher com a criança
import PixQR from "../assets/images/qrCodePix.png"; // Exemplo de QR code
import DepositoLogo from "../assets/images/BB.png"; // Exemplo de logo do banco
import TelemarketingImg from "../assets/images/telemarketing.png"; // Exemplo de imagem telemarketing
import NewsletterSection from "../components/NewsLetterSection";
import DoacoesRapidasSection from "../components/DoacoesRapidasSection";
import OutrasFormasDoar from "../components/OutrasFormasDoar";

/* ========== SEÇÃO 1: MUDE VIDAS, SEJA UM DOADOR ========== */
const HeroWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  border-radius: 16px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
`;

const HeroTextBlock = styled.div`
  flex: 1;
  min-width: 300px;
  color: #072d4b;
`;

const HeroTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const HeroParagraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const HeroButton = styled.button`
  background-color: #48af66;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  object-fit: cover;
`;

/* ========== SEÇÃO 2: DOAÇÕES RÁPIDAS ========== */
const DoacoesWrapper = styled.section`
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DoacoesTitle = styled.h3`
  font-size: 24px;
  color: #072d4b;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const Card = styled.div`
  width: 160px;
  background-color: #fff;
  border: 2px solid #48af66;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const CardValue = styled.h4`
  font-size: 18px;
  color: #072d4b;
  margin-bottom: 8px;
`;

const CardButton = styled.button`
  background-color: #48af66;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

/* ========== SEÇÃO 3: OUTRAS FORMAS DE DOAR ========== */
const FormasWrapper = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const FormasTitle = styled.h3`
  font-size: 24px;
  color: #072d4b;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
`;

const FormasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FormaTitle = styled.h4`
  font-size: 18px;
  color: #072d4b;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const FormaImageWrapper = styled.div`
  margin: 16px 0;
`;

const FormaParagraph = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
`;

// Exemplo de chave pix
const Strong = styled.span`
  font-weight: 600;
`;

function DoacoesPage() {
  const doacoesRapidas = [
    { id: 1, valor: "R$20,00" },
    { id: 2, valor: "R$50,00" },
    { id: 3, valor: "R$75,00" },
    { id: 4, valor: "R$100,00" },
  ];

  return (
    <>
      {/* SEÇÃO 1: MUDE VIDAS, SEJA UM DOADOR */}
      <HeroWrapper>
        <HeroTextBlock>
          <HeroTitle>Mude vidas, seja um doador</HeroTitle>
          <HeroParagraph>
            Contribua para o crescimento do Nutep, e seja um agente
            transformador da vida de crianças, adolescentes e suas famílias.
          </HeroParagraph>
          <HeroButton>Doação online</HeroButton>
        </HeroTextBlock>
        <HeroImageWrapper>
          <HeroImage src={DoarImg} alt="Mude vidas, seja um doador" />
        </HeroImageWrapper>
      </HeroWrapper>

      {/* SEÇÃO 2: DOAÇÕES RÁPIDAS */}
      <DoacoesRapidasSection />

      {/* SEÇÃO 3: OUTRAS FORMAS DE DOAR */}
      <OutrasFormasDoar />
      <NewsletterSection />
    </>
  );
}

export default DoacoesPage;
