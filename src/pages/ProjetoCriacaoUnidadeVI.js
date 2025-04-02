// src/components/ProjetoCriacaoUnidadeVI.js
import React from "react";
import styled from "styled-components";

// Exemplo de imagens (substitua pelos seus arquivos reais)
import UnidadeVIImg1 from "../assets/images/Assistencia-1.png";
import UnidadeVIImg2 from "../assets/images/Assistencia-2.png";

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #072d4b;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
`;

/* Container para as 2 imagens lado a lado */
const ImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

const UnidadeImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
`;

const BulletPointsContainer = styled.div`
  margin: 24px auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colunas */
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* empilha no mobile */
  }
`;

const BulletItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const BulletTitle = styled.h4`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 8px;
`;

const BulletText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const ProjetoCriacaoUnidadeVI = () => {
  return (
    <SectionContainer>
      <Title>Projeto de Criação da Unidade VI</Title>

      {/* Imagens lado a lado */}
      <ImagesRow>
        <ImageWrapper>
          <UnidadeImage src={UnidadeVIImg1} alt="Unidade VI - Visão 1" />
        </ImageWrapper>
        <ImageWrapper>
          <UnidadeImage src={UnidadeVIImg2} alt="Unidade VI - Visão 2" />
        </ImageWrapper>
      </ImagesRow>

      {/* Texto principal */}
      <Paragraph>
        A ampliação e diversificação da oferta de serviços no NUTEP vem se
        dando, ao longo dos anos, de forma sustentável, amparadas pelas
        conquistas em aumentar e ampliar sua estrutura física e pela ampliação
        do quadro de profissionais. Assim, nosso próximo passo é a criação da
        <strong> Unidade VI</strong>, que terá como foco:
      </Paragraph>

      {/* Bullet points */}
      <BulletPointsContainer>
        <BulletItem>
          <BulletTitle>Ampliar as ações de assistência</BulletTitle>
          <BulletText>
            A crianças e adolescentes com Paralisia Cerebral (PC) e TEA, entre
            outras necessidades.
          </BulletText>
        </BulletItem>

        <BulletItem>
          <BulletTitle>Oferecer mais possibilidades</BulletTitle>
          <BulletText>
            De procedimentos de habilitação e reabilitação, abrangendo as áreas
            sensorial e motora.
          </BulletText>
        </BulletItem>

        <BulletItem>
          <BulletTitle>Fortalecer o desenvolvimento</BulletTitle>
          <BulletText>
            De capacidades e funções, contribuindo para maior autonomia e
            inclusão social.
          </BulletText>
        </BulletItem>

        <BulletItem>
          <BulletTitle>Novas frentes de atendimento</BulletTitle>
          <BulletText>
            A estrutura da Unidade VI possibilitará a criação de novas salas e
            ampliação de equipes.
          </BulletText>
        </BulletItem>
      </BulletPointsContainer>
    </SectionContainer>
  );
};

export default ProjetoCriacaoUnidadeVI;
