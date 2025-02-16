import React from "react";
import * as S from "./ConhecaServicosSection.style";

const ConhecaServicosSection = ({ title, description }) => {
  return (
    <S.SectionContainer>
      <S.SectionContent>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.SectionContent>
    </S.SectionContainer>
  );
};

export default ConhecaServicosSection;
