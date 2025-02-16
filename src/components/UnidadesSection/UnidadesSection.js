import React from "react";
import { unidadesData } from "../../data/unidadesData";
import UnidadeCard from "../UnidadeCard/UnidadeCard";
import * as S from "./UnidadesSection.style";

const UnidadesSection = () => {
  return (
    <S.SectionContainer>
      <S.CardsFlexContainer>
        {unidadesData.map((unidade) => (
          <S.CardWrapper key={unidade.id}>
            <UnidadeCard
              key={unidade.id}
              id={unidade.id}
              nome={unidade.nome}
              image={unidade.imagemDetalhe}
              link={unidade.link}
            />
          </S.CardWrapper>
        ))}
      </S.CardsFlexContainer>
    </S.SectionContainer>
  );
};

export default UnidadesSection;
