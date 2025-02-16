import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const green = "#48AF66";
const white = "#fff";

const CardContainer = styled.div`
  width: 100%;
  border: 2px solid ${green};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const InfoBar = styled.div`
  background: linear-gradient(
    135deg,
    #68ffc1 0%,
    #57f794 27%,
    #49f081 64%,
    #07ed4c 100%
  );
  color: ${white};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UnitTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: #071638;
`;

const SeeMore = styled.a`
  color: #071638;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const TourButton = styled.button`
  margin: 16px;
  padding: 10px 16px;
  border: 2px solid ${green};
  background-color: transparent;
  color: ${green};
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;

const UnidadeCard = ({ id, nome, image, link }) => {
  return (
    <Link
      to={`/unidade/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <CardContainer>
        <CardImage src={image} alt={nome} />
        <InfoBar>
          <UnitTitle>{nome}</UnitTitle>
          <SeeMore href={link}>Veja mais +</SeeMore>
        </InfoBar>
        <TourButton>Faça um tour virtual &gt;</TourButton>
      </CardContainer>
    </Link>
  );
};

export default UnidadeCard;
