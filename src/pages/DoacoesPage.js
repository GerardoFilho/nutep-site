import React from "react";
import styled from "styled-components";

import DoarImg from "../assets/images/Assistencia-1.png";
import NewsletterSection from "../components/NewsLetterSection";
import DoacoesRapidasSection from "../components/DoacoesRapidasSection";
import OutrasFormasDoar from "../components/OutrasFormasDoar";
import CirclesBackground from "../components/CirclesBackground";
import CirclesBackgroundMissao from "../components/CirclesBackgroundMissao";

const HeroWrapper = styled.section`
  background: linear-gradient(
    135deg,
    rgba(224, 255, 235, 0.8),
    rgba(255, 255, 255, 0.8)
  );
  border-radius: 16px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  position: relative;
  z-index: 999;
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

function DoacoesPage() {
  return (
    <>
      <CirclesBackground height={"1060px"} limitedCircles="true">
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
      </CirclesBackground>
      <DoacoesRapidasSection />
      <OutrasFormasDoar />
      <NewsletterSection />
    </>
  );
}

export default DoacoesPage;
