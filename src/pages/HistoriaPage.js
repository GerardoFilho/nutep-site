import React from "react";
import styled from "styled-components";

import Desktop from "../assets/images/desktop2.png";
import Mobile from "../assets/images/mobile2.png";
import useIsDesktop from "../hooks/useIsDesktop";

const TopContainer = styled.div`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  display: flex;
  justify-content: center;
`;

const ImageStyled = styled.img`
  width: 100%;
  max-width: 1400px;
  padding-bottom: 40px;
  cursor: default;
  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

function HistoriaPage() {
  const isDesktop = useIsDesktop(768);

  return (
    <TopContainer>
      <a href="/projetos">
        <ImageStyled src={isDesktop ? Desktop : Mobile} alt="img" />
      </a>
    </TopContainer>
  );
}

export default HistoriaPage;
