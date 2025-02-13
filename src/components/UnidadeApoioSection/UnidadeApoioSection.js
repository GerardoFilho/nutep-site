import React from "react";
import styled from "styled-components";

const SectionApoio = styled.section`
  padding: 40px 0;
  text-align: center;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #067746;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0 auto 32px;
  line-height: 1.5;
`;

const ApoioImage = styled.img`
  width: 100%;
  max-width: 530px;
  height: 367px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ApoioCaption = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #072d4b;
  font-weight: 600;
`;

const UnidadeApoioSection = () => {
  return (
    <SectionApoio>
      <Title>Unidade de Apoio</Title>
      <Subtitle>
        Para além das três Unidades principais, o NUTEP conta com outra Unidade
        de apoio!
      </Subtitle>
      <ApoioImage src="https://universo.uniateneu.edu.br/wp-content/uploads/2022/05/Gestao-publica.jpeg" />
      <ApoioCaption>Unidade IV – Administração e Recursos Humanos</ApoioCaption>
    </SectionApoio>
  );
};

export default UnidadeApoioSection;
