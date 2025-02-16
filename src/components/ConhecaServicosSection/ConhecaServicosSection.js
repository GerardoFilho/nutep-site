import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-color: #cff5d0;
  text-align: center;
  padding: 60px 20px;
`;

const SectionContent = styled.div`
  max-width: 800px;
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
