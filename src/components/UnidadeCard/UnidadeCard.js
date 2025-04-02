import React from "react";
import { Link } from "react-router-dom";
import * as S from "./UnidadeCard.style";

const UnidadeCard = ({ id, nome, image, link }) => {
  const handleTourClick = () => {
    window.open(link, "_blank");
  };

  return (
    <S.CardContainer>
      <Link to={`/unidade/${id}`}>
        <S.CardImage src={image} alt={nome} />
        <S.InfoBar>
          <S.UnitTitle>{nome}</S.UnitTitle>

          <S.SeeMore>Veja mais +</S.SeeMore>
        </S.InfoBar>
      </Link>

      <S.TourButton onClick={handleTourClick}>
        Faça um tour virtual &gt;
      </S.TourButton>
    </S.CardContainer>
  );
};

export default UnidadeCard;
