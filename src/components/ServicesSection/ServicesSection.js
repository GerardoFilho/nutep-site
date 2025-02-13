// src/components/ServicesSection.js
import React from "react";
import styled from "styled-components";
import ServiceCard from "../ServiceCard/ServiceCard";

const SectionContainer = styled.section`
  padding: 40px 20px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #062b66;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const ServicesSection = ({ title, servicesList }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <CardsGrid>
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
          />
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

export default ServicesSection;
