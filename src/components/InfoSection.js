import React from "react";
import styled from "styled-components";

import MapaBrasil from "../assets/images/Assistencia-1.png";
import PredioAcademico from "../assets/images/Assistencia-1.png";

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  display: grid;
  /* 2 colunas, 2 linhas */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 32px; /* Espaço entre colunas e linhas */

  /* Responsivo: em telas menores, empilha */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* tudo em 1 coluna */
    grid-template-rows: auto;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #48af66; /* Verde principal */
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`;

const ImageWrapper = styled.div`
  margin-top: 16px;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

const ValoresBlock = styled(TextBlock)`
  /* Este é o “NOSSOS VALORES” (1a linha, col 1) */
`;

const OndeBlock = styled(TextBlock)`
  /* “ONDE ESTAMOS” (1a linha, col 2) */
`;

const ProgramasBlock = styled(TextBlock)`
  /* “PROGRAMAS ACADÊMICOS” (2a linha, col 1) */
`;

const PredioImageWrapper = styled.div`
  /* “PROGRAMAS ACADÊMICOS” imagem (2a linha, col 2) */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

function InfoSection() {
  return (
    <SectionWrapper>
      <ValoresBlock>
        <Title>Nossos Valores</Title>
        <Paragraph>
          Guiamos nosso trabalho com base nos princípios do cuidado, da empatia,
          da ética, do respeito, da responsabilidade social e da transparência,
          visando promover um mundo mais inclusivo e mais humano.
        </Paragraph>
      </ValoresBlock>

      <OndeBlock>
        <Title>Onde Estamos</Title>
        <Paragraph>
          Em Fortaleza, somos um dos únicos serviços de intervenção precoce,
          habilitação e reabilitação de crianças e adolescentes capacitado a
          atender todos os transtornos do desenvolvimento, por meio do SUS.
        </Paragraph>
        <Paragraph>
          Contamos também com a única oficina ortopédica credenciada pelo
          Ministério da Saúde no Estado do Ceará, para oferta de recursos de
          tecnologia assistiva.
        </Paragraph>

        <ImageWrapper>
          <img src={MapaBrasil} alt="Mapa do Brasil e CE" />
        </ImageWrapper>
      </OndeBlock>

      <ProgramasBlock style={{ gridColumn: "1 / 2" }}>
        <Title>Programas Acadêmicos</Title>
        <Paragraph>
          O Nutep é um Projeto de Extensão da Universidade Federal do Ceará
          (UFC) desenvolvendo parcerias em diversos projetos acadêmicos. É
          também referência no Estado do Ceará para formação profissional,
          através dos programas de capacitação oferecidos pelo Centro de
          Estudos. É ainda um campo de treinamento para alunos de graduação e
          pós-graduação.
        </Paragraph>
      </ProgramasBlock>

      <PredioImageWrapper style={{ gridColumn: "2 / 3" }}>
        <img src={PredioAcademico} alt="Prédio Acadêmico" />
      </PredioImageWrapper>
    </SectionWrapper>
  );
}

export default InfoSection;
