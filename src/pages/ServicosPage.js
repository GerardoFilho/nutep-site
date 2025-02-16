import React from "react";
import ConhecaServicosSection from "../components/ConhecaServicosSection/ConhecaServicosSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import {
  medicalServices,
  orthopedicWorkshop,
  rehabilitationServices,
  socialAssistanceServices,
} from "../data/servicesData";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const servicosPage = () => {
  const descricao =
    "Disponibilizamos uma grande variedade de serviços especializados em intervenção precoce e reabilitação, tendo à frente profissionais que desenvolvem atividades específicas, sempre considerando a interdisciplinaridade e o Programa Terapêutico Singular (PTA) como eixos fundamentais de atuação.";
  return (
    <>
      <ConhecaServicosSection
        title="CONHEÇA NOSSOS SERVIÇOS"
        description={descricao}
      />
      <Container>
        <ServicesSection
          id="servicosMedicos"
          title="Serviços Médicos"
          servicesList={medicalServices}
        />

        <ServicesSection
          id="servicosReabilitacao"
          title="Serviços de Reabilitação"
          servicesList={rehabilitationServices}
        />

        <ServicesSection
          id="servicosAssistencia"
          title="Serviços de Assistência Social"
          servicesList={socialAssistanceServices}
        />

        <ServicesSection
          id="oficinaOrtopedica"
          title="Oficina Ortopédica"
          servicesList={orthopedicWorkshop}
        />
      </Container>
    </>
  );
};

export default servicosPage;
