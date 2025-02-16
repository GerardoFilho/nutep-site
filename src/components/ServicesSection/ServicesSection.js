import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import * as S from "./ServicesSection.style";

const ServicesSection = ({ title, servicesList }) => {
  return (
    <S.SectionContainer>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.CardsGrid>
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
          />
        ))}
      </S.CardsGrid>
    </S.SectionContainer>
  );
};

export default ServicesSection;
