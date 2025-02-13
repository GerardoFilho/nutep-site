import React from "react";
import styled from "styled-components";
import { unidadesData } from "../../data/unidadesData";
import UnidadeCard from "../UnidadeCard/UnidadeCard";

const SectionContainer = styled.section`
  padding: 80px 0;
  background-color: #fff;
  text-align: center;
`;

const CardsFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1320px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  flex: 0 0 442px;
  max-width: 442px;
  box-sizing: border-box;
`;

const UnidadesSection = () => {
  return (
    <SectionContainer>
      <CardsFlexContainer>
        {unidadesData.map((unidade) => (
          <CardWrapper key={unidade.id}>
            <UnidadeCard
              nome={unidade.nome}
              image={unidade.image}
              link={unidade.link}
            />
          </CardWrapper>
        ))}
      </CardsFlexContainer>
    </SectionContainer>
  );
};

export default UnidadesSection;
