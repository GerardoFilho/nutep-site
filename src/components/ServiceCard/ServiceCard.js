import React from "react";
import { FaArrowRight } from "react-icons/fa";
import * as S from "./ServiceCard.style";

const ServiceCard = ({ image, title }) => {
  return (
    <S.CardContainer>
      <S.CardImage src={image} alt={title} />
      <S.TitleIconSection>
        <S.CardTitle>{title}</S.CardTitle>
      </S.TitleIconSection>
    </S.CardContainer>
  );
};

export default ServiceCard;
