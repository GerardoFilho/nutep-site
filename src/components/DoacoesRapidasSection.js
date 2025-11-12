import React from "react";
import styled from "styled-components";
import DoacaoPix from "./DoacaoPix/DoacaoPix";

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

const Card = styled.div`
  width: 140px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h4`
  font-size: 16px;
  color: #072d4b;
  margin-bottom: 8px;
`;

const CardValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #48af66;
`;

function DoacoesRapidasSection() {
  const doacoes = [
    { id: 1, valor: "R$20,00" },
    { id: 2, valor: "R$50,00" },
    { id: 3, valor: "R$75,00" },
    { id: 4, valor: "R$100,00" },
  ];

  function normalizarValor(valor) {
    if (!valor) return "";
    const limpo = String(valor)
      .replace(/[^0-9,.]/g, "")
      .replace(",", ".");
    const num = parseFloat(limpo);
    return isNaN(num) ? "" : num.toFixed(2);
  }

  return (
    <SectionWrapper>
      <Title>Doações Rápidas</Title>

      <CardsRow>
        {doacoes.map((item) => (
          <Card key={item.id}>
            <CardTitle>
              Doe <CardValue>{item.valor}</CardValue>
            </CardTitle>
            <DoacaoPix valorPreset={normalizarValor(item.valor)} />{" "}
          </Card>
        ))}
      </CardsRow>
    </SectionWrapper>
  );
}

export default DoacoesRapidasSection;
