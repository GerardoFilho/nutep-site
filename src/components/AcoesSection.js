import React from "react";
import styled from "styled-components";

import AcaoImg1 from "../assets/images/Assistencia-1.png";
import AcaoImg2 from "../assets/images/Assistencia-1.png";
import AcaoImg3 from "../assets/images/Assistencia-1.png";
import AcaoImg4 from "../assets/images/Assistencia-1.png";
import AcaoImg5 from "../assets/images/Assistencia-1.png";
import AcaoImg6 from "../assets/images/Assistencia-1.png";
import AcaoImg7 from "../assets/images/Assistencia-1.png";
import AcaoImg8 from "../assets/images/Assistencia-1.png";
import AcaoImg9 from "../assets/images/Assistencia-1.png";

const AcoesWrapper = styled.section`
  background-color: #e6f7f0;
  padding: 40px 20px;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 285px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  color: #072d4b;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 32px;
`;

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AcaoImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border: 2px solid #48af66;
  border-radius: 8px;
`;

const InstaLink = styled.a`
  display: inline-block;
  color: #48af66;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const AcoesSection = () => {
  return (
    <AcoesWrapper>
      <ContentContainer>
        <Title>Acompanhe as nossas ações</Title>
        <Subtitle>
          Siga-nos pelas redes sociais e fique por dentro da nossa jornada
        </Subtitle>

        <GridContainer>
          <AcaoImage src={AcaoImg1} alt="Ação 1" />
          <AcaoImage src={AcaoImg2} alt="Ação 2" />
          <AcaoImage src={AcaoImg3} alt="Ação 3" />
          <AcaoImage src={AcaoImg4} alt="Ação 4" />
          <AcaoImage src={AcaoImg5} alt="Ação 5" />
          <AcaoImage src={AcaoImg6} alt="Ação 6" />
          <AcaoImage src={AcaoImg7} alt="Ação 7" />
          <AcaoImage src={AcaoImg8} alt="Ação 8" />
          <AcaoImage src={AcaoImg9} alt="Ação 9" />
        </GridContainer>
      </ContentContainer>
      <InstaLink
        href="https://instagram.com/nutepnarede"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; Acesse nosso Instagram!
      </InstaLink>
    </AcoesWrapper>
  );
};

export default AcoesSection;
