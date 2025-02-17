import React from "react";
import styled from "styled-components";

const IntroWrapper = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #48af66;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  max-width: 600px;
  margin: 0 auto 24px;
  line-height: 1.4;
`;

const IntroSection = () => {
  return (
    <IntroWrapper>
      <Title>Conheça o Nutep</Title>
      <Subtitle>
        Núcleo de Tratamento e Estimulação Precoce. Desde 1987, somos uma
        instituição filantrópica que assiste crianças e adolescentes com riscos
        ou transtornos de desenvolvimento...
      </Subtitle>
    </IntroWrapper>
  );
};

export default IntroSection;
