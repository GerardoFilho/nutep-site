// src/components/ConhecaServicosSection.js
import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: #cff5d0; /* Verde-claro. Ajuste conforme desejar */
  text-align: center;
  padding: 60px 20px; /* Espaçamento superior e inferior */
`;

const SectionContent = styled.div`
  max-width: 800px; /* Limite de largura do texto */
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #2f8147;
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.5;
`;

const ConhecaServicosSection = ({ title, description }) => {
  return (
    <SectionContainer>
      <SectionContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </SectionContent>
    </SectionContainer>
  );
};

export default ConhecaServicosSection;
