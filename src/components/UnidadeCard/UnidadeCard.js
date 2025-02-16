import React from "react";
import { Link } from "react-router-dom";
import * as S from "./UnidadeCard.style";

const UnidadeCard = ({ id, nome, image, link }) => {
  return (
    <Link
      to={`/unidade/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <S.CardContainer>
        <S.CardImage src={image} alt={nome} />
        <S.InfoBar>
          <S.UnitTitle>{nome}</S.UnitTitle>
          <S.SeeMore href={link}>Veja mais +</S.SeeMore>
        </S.InfoBar>
        <S.TourButton>Faça um tour virtual &gt;</S.TourButton>
      </S.CardContainer>
    </Link>
  );
};

export default UnidadeCard;
