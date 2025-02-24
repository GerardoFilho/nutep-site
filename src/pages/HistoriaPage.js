// src/pages/HistoriaPage.js
import React from "react";
import styled from "styled-components";

// Exemplo de imagens (substitua pelos caminhos reais)
import Desktop from "../assets/images/desktop2.png";
import Mobile from "../assets/images/mobile2.png";
import useIsDesktop from "../hooks/useIsDesktop";

// Container principal
const HistoriaWrapper = styled.section`
  background-color: #aef3b4; /* Fundo verde-claro */
  padding: 60px 20px;
  position: relative;
  overflow: hidden; /* se quisermos que nada transborde */
`;

/* Bloco superior (texto e card de 1987) */
const TopContainer = styled.div`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  display: flex;
  justify-content: center;
`;

/* Texto à esquerda */
const TextoBlock = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  color: #072d4b;
`;

const Title = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;

  /* Exemplo de destaque em verde */
  strong {
    color: #48af66;
  }
`;

const Destaque1987 = styled.div`
  flex: 1;
  min-width: 240px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* Imagem e texto do “1987” */
const YearHighlight = styled.h3`
  font-size: 20px;
  color: #48af66;
  margin-bottom: 8px;
`;

const DestaqueImg = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  margin: 8px 0;
`;

const DestaqueParagraph = styled.p`
  font-size: 14px;
  color: #333;
`;

/* Timeline container */
const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  position: relative;
`;

/* 
   Cada item da linha do tempo: 
   - Caixinha com ano e texto 
   - Imagem (opcional)
   - Precisamos desenhar “linhas” (ou “curvas”) entre eles.
*/

/* Exemplo: item retangular para o ano e texto */
const TimelineItem = styled.div`
  position: absolute;
  width: 220px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
`;

const YearTitle = styled.h4`
  font-size: 18px;
  color: #48af66;
  margin-bottom: 8px;
`;

const SubParagraph = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const TimelineImageCard = styled.div`
  position: absolute;
  width: 220px;
  height: 140px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* “bolinhas” e “linhas” - Exemplo de simulação */
const Circle = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #48af66;
  border-radius: 50%;
`;
const ImageStyled = styled.img`
  width: 100%;
  max-width: 1400px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

const ConnectorLine = styled.div`
  position: absolute;
  width: 2px;
  background-color: #48af66;
`;

/* ============== COMPONENTE PRINCIPAL ============== */

function HistoriaPage() {
  const isDesktop = useIsDesktop(768);

  return (
    <TopContainer>
      <ImageStyled src={isDesktop ? Desktop : Mobile} alt="img" />
    </TopContainer>
  );
}

export default HistoriaPage;
