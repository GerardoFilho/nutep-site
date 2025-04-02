// src/components/ProjetoExpansaoUnidadeV.js
import React from "react";
import styled from "styled-components";

// Exemplos de imagens (substitua pelos seus arquivos reais)
import UnidadeVImg1 from "../assets/images/Assistencia-1.png";
import UnidadeVImg2 from "../assets/images/Assistencia-2.png";

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

const ImageTop = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  display: block;
  margin: 0 auto 24px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #48af66; /* Verde */
`;

const BulletPointsContainer = styled.div`
  margin: 24px auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const ImageBottom = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  display: block;
  margin: 24px auto 0;
`;

const ProjetoExpansaoUnidadeV = () => {
  return (
    <SectionContainer>
      <Title>Projeto de Expansão da Unidade V</Title>

      {/* Imagem principal */}
      <ImageTop src={UnidadeVImg1} alt="Unidade V" />

      <Paragraph>
        A unidade V presta assistência a crianças, adolescentes e jovens com
        transtorno do espectro autista e/ou múltiplas deficiências. Promovemos
        saúde, inclusão e oportunidades para nossas crianças, adolescentes e
        jovens, estamos trabalhando para fazer ainda mais pela nossa comunidade.
      </Paragraph>

      <Paragraph>
        <Highlight>
          Atendemos mais de 1000 pacientes com TEA permanentemente.
        </Highlight>
        <br />
        Por isso, temos sido desafiados a expandir cada vez mais nossos
        atendimentos e nossa estrutura.
      </Paragraph>

      {/* Bullet points */}
      <BulletPointsContainer>
        <BulletItem>
          <BulletTitle>Ampliação da estrutura da Unidade V</BulletTitle>
          <BulletText>Cerca de 10% de espaço adicional.</BulletText>
        </BulletItem>
        <BulletItem>
          <BulletTitle>Aumentar o número de atendimentos</BulletTitle>
          <BulletText>Admissão de novos beneficiários.</BulletText>
        </BulletItem>
        <BulletItem>
          <BulletTitle>Expansão e diversificação de evidências</BulletTitle>
          <BulletText>
            Novas salas de atividades e serviços especializados.
          </BulletText>
        </BulletItem>
      </BulletPointsContainer>

      {/* Imagem secundária */}
      <ImageBottom src={UnidadeVImg2} alt="Unidade V Projeto" />
    </SectionContainer>
  );
};

export default ProjetoExpansaoUnidadeV;
