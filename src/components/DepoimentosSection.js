import React from "react";
import styled from "styled-components";
import Teste from "../assets/images/wppPerfil.png";

const DepoimentosWrapper = styled.section`
  background: linear-gradient(135deg, #68ffc1, #07ed4c);
  padding: 60px 20px;
  color: #fff;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 28px;
  color: #2f8147;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const DepoimentoCard = styled.div`
  background-color: #fff;
  color: #333;
  width: 260px;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const FotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: url(${Teste}) no-repeat center center / cover;
  border-radius: 50%;
  overflow: hidden;
`;

const Nome = styled.h4`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 4px;
  font-weight: bold;
`;

const Subinfo = styled.span`
  font-size: 12px;
  color: #48af66;
  display: block;
  margin-bottom: 12px;
`;

const TextoDepoimento = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

const DepoimentosSection = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Francisca Rosilane",
      subtitulo: "Mãe de X",
      texto:
        "São anos de apoio e muita dedicação. Foi aqui que meu filho começou a falar suas primeiras palavras...",
    },
    {
      id: 2,
      nome: "Antônia Estelide",
      subtitulo: "Avó de Y",
      texto:
        "No Nutep, fui bem recebida e sinto que minha neta evolui a cada dia, graças ao carinho da equipe...",
    },
    {
      id: 3,
      nome: "Ana Karla Cavalcanti",
      subtitulo: "Assistente Social",
      texto:
        "As atividades inclusivas realizadas aqui ajudaram muitas famílias e mudaram vidas...",
    },
    {
      id: 4,
      nome: "Maria Lúxilea",
      subtitulo: "Mãe de Z",
      texto:
        "Atendimentos de primeira, grande parceria com a família. Sou muito grata ao Nutep.",
    },
  ];

  return (
    <DepoimentosWrapper>
      <Container>
        <Title>Veja o que dizem sobre nós</Title>
        <CardsGrid>
          {depoimentos.map((dep) => (
            <DepoimentoCard key={dep.id}>
              <FotoWrapper />
              <Nome>{dep.nome}</Nome>
              <Subinfo>{dep.subtitulo}</Subinfo>
              <TextoDepoimento>{dep.texto}</TextoDepoimento>
            </DepoimentoCard>
          ))}
        </CardsGrid>
      </Container>
    </DepoimentosWrapper>
  );
};

export default DepoimentosSection;
