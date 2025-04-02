// src/components/CirclesBackgroundMissao.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as CirclesSVG } from "../assets/icons/Circulosinteiros.svg";
import useIsDesktop from "../hooks/useIsDesktop";

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

const CircleWrapper = styled.div`
  position: absolute;
  /* Recebe top, left e size via props */
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  transform-origin: center center;
  overflow: hidden;
  transition: transform 0.2s ease-out;
`;

function CirclesBackgroundMissao({ children, height, limitedCircles }) {
  const isDesktop = useIsDesktop(768);
  const circlesData =
    isDesktop || !limitedCircles
      ? [
          { top: "10%", left: "15%", size: 250 },
          { top: "30%", left: "90%", size: 320 },
          { top: "40%", left: "30%", size: 280 },
          { top: "15%", left: "60%", size: 280 },
          { top: "55%", left: "60%", size: 280 },
          { top: "70%", left: "10%", size: 280 },
          { top: "80%", left: "80%", size: 280 },
        ]
      : [
          { top: "10%", left: "15%", size: 250 },
          { top: "30%", left: "90%", size: 320 },
          { top: "40%", left: "30%", size: 280 },
        ];

  const circlesRefs = useRef([]);

  if (!circlesRefs.current.length) {
    circlesRefs.current = Array(circlesData.length)
      .fill()
      .map(() => React.createRef());
  }

  useEffect(() => {
    function handleScroll() {
      const scale = window.scrollY / 1000 + 1;

      console.log(scale);
      console.log(scale / 1.7);

      circlesRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.style.transform = `scale(${
            scale >= 2.7 ? scale / 2 : scale
          })`;
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
            <CirclesSVG width="100%" height="100%" />
          </CircleWrapper>
        ))}
      </SVGContainer>
      {children}
    </BackgroundWrapper>
  );
}

export default CirclesBackgroundMissao;
