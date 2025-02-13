import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin: 16px;
  color: #072d4b;
  font-weight: 600;
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  background-color: #62b66d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #4fa359;
  }
`;

const ServiceCard = ({ image, title }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>

      <IconWrapper>
        <FaArrowRight color="#fff" size={16} />
      </IconWrapper>
    </CardContainer>
  );
};

export default ServiceCard;
