// src/components/DoacoesRapidasSection.js
import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #48af66; /* Verde principal */
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

// Cartão branco, cantos arredondados, sombra suave
const Card = styled.div`
  width: 140px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
`;

// Título do valor (ex.: "Doe R$20,00")
const CardTitle = styled.h4`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 8px;
`;

// Valor em destaque (opcional)
const CardValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #48af66;
`;

// Botão outline verde, cantos arredondados
const CardButton = styled.button`
  margin-top: 8px;
  background-color: transparent;
  border: 2px solid #48af66;
  border-radius: 24px;
  color: #48af66;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #48af66;
    color: #fff;
  }

  /* Seta (→) opcional */
  &::after {
    content: ">";
    font-size: 14px;
    margin-left: 4px;
  }
`;

function DoacoesRapidasSection() {
  const doacoes = [
    { id: 1, valor: "R$20,00" },
    { id: 2, valor: "R$50,00" },
    { id: 3, valor: "R$75,00" },
    { id: 4, valor: "R$100,00" },
  ];

  return (
    <SectionWrapper>
      <Title>Doações Rápidas</Title>

      <CardsRow>
        {doacoes.map((item) => (
          <Card key={item.id}>
            <CardTitle>
              Doe <CardValue>{item.valor}</CardValue>
            </CardTitle>
            <CardButton>Doar</CardButton>
          </Card>
        ))}
      </CardsRow>
    </SectionWrapper>
  );
}

export default DoacoesRapidasSection;
