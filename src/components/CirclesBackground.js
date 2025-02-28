// src/components/CirclesBackground.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as CirclesSVG } from "../assets/icons/Circulosinteiros.svg";
import useIsDesktop from "../hooks/useIsDesktop";

/* Fundo gradiente */
const BackgroundWrapper = styled.div`
  position: relative;
  height: ${(height) => height || "500px"};
  background: linear-gradient(135deg, #07ed4c, #37d1a3, #6db2bf);
  overflow: hidden;
`;

/* Container geral para agrupar as réplicas do SVG */
const SVGContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* se quiser que o usuário não clique no SVG */
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
  transition: transform 0.3s ease-out;
`;

function CirclesBackground({ children, height }) {
  const isDesktop = useIsDesktop(768);

  const circlesData = [
    { top: "5%", left: "5%", size: 150 },
    { top: "20%", left: "95%", size: 180 },
    { top: "90%", left: "15%", size: 180 },
    { top: "30%", left: "45%", size: 180 },
    { top: "80%", left: "80%", size: 180 },
  ];
  const circlesMobileData = [
    { top: "5%", left: "5%", size: 100 },
    { top: "20%", left: "80%", size: 130 },
    { top: "90%", left: "15%", size: 130 },
  ];

  // Cria um array de refs para cada instância
  const circlesRefs = useRef([]);
  const circlesMobileRefs = useRef([]);

  // Inicializa o array de refs (um para cada item do circlesData)
  if (!circlesRefs.current.length) {
    circlesRefs.current = Array(circlesData.length)
      .fill()
      .map(() => React.createRef());
  }
  if (!circlesMobileRefs.current.length) {
    circlesMobileRefs.current = Array(circlesMobileData.length)
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
      circlesMobileRefs.current.forEach((ref) => {
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
      {isDesktop ? (
        <SVGContainer>
          {circlesData.map((circle, index) => (
            <CircleWrapper
              key={index}
              top={circle.top}
              left={circle.left}
              size={circle.size}
              ref={circlesRefs.current[index]}
            >
              <CirclesSVG width="100%" height="100%" />
            </CircleWrapper>
          ))}
        </SVGContainer>
      ) : (
        <SVGContainer>
          {circlesMobileData.map((circle, index) => (
            <CircleWrapper
              key={index}
              top={circle.top}
              left={circle.left}
              size={circle.size}
              ref={circlesMobileRefs.current[index]}
            >
              <CirclesSVG width="100%" height="100%" />
            </CircleWrapper>
          ))}
        </SVGContainer>
      )}
      {children}
    </BackgroundWrapper>
  );
}

export default CirclesBackground;
