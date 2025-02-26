// src/components/CirclesBackgroundMissao.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as CirclesSVG } from "../assets/icons/Circulosinteiros.svg";

/* Fundo gradiente */
const BackgroundWrapper = styled.div`
  position: relative;
  height: ${(height) => height || "500px"};
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
`;

/* Container geral para agrupar as réplicas do SVG */
const SVGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* se quiser que o usuário não clique no SVG */
  overflow: hidden;
`;

/* Cada “instância” do SVG com posição e tamanho */
const CircleWrapper = styled.div`
  position: absolute;
  /* Recebe top, left e size via props */
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transform-origin: center center;
  overflow: hidden;
`;

function CirclesBackgroundMissao({ children, height }) {
  // Vamos supor que queremos 3 círculos do mesmo SVG, cada em posição e tamanho distintos
  const circlesData = [
    { top: "10%", left: "15%", size: 150 },
    { top: "30%", left: "90%", size: 220 },
    { top: "50%", left: "50%", size: 180 },
    { top: "70%", left: "10%", size: 180 },
    { top: "80%", left: "80%", size: 180 },
  ];

  // Cria um array de refs para cada instância
  const circlesRefs = useRef([]);

  // Inicializa o array de refs (um para cada item do circlesData)
  if (!circlesRefs.current.length) {
    circlesRefs.current = Array(circlesData.length)
      .fill()
      .map(() => React.createRef());
  }

  useEffect(() => {
    function handleScroll() {
      // Exemplo: fator de escala suave
      const scale = 1.5 + Math.floor(Math.random() * 1.8);

      // Aplica a cada círculo
      circlesRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = `scale(${scale})`;
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundWrapper height={height}>
      <SVGContainer>
        {circlesData.map((circle, index) => (
          <CircleWrapper
            key={index}
            top={circle.top}
            left={circle.left}
            size={circle.size}
            ref={circlesRefs.current[index]}
          >
            {/* O mesmo SVG replicado */}
            <CirclesSVG width="100%" height="100%" />
          </CircleWrapper>
        ))}
      </SVGContainer>
      {children}
    </BackgroundWrapper>
  );
}

export default CirclesBackgroundMissao;
